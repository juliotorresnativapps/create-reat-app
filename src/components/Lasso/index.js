/**
 * 
 */

import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

const {d3} = window;
const margin = {top: 20, right: 20, bottom: 30, left: 40};

/**
 * 
 */
class Lasso extends Component {
	static propTypes = {
		data: PropTypes.array,
		height: PropTypes.number,
		margin: PropTypes.object,
		width: PropTypes.number
	}
	constructor(props) {
		super(props);
		this.state = {
			data: props.data||[]
		};
	}
	componentDidMount() {
		this.renderD3();
	}
	componentWillReceiveProps = (props) => {
		const {data} = props;
		this.setState({
			data: data
		});
		this.renderD3();
	}
	renderD3 = () => {
		const {data} = this.state;
		const
			width = this.lasso.offsetWidth - margin.left - margin.right,
			height = width * 0.35;
	
		const x = d3.scale
            .linear()
			.range([0, width]);
		
		const y = d3.scale
            .linear()
			.range([height, 0]);
		
		const color = d3.scale.category10();
		
		const xAxis = d3.svg.axis()
			.scale(x)
			.orient("bottom");
		
		const yAxis = d3.svg.axis()
			.scale(y)
			.orient("left");

		this.lasso.innerHTML = '';
		const svg = d3.select(this.lasso).append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
		
		// Lasso functions to execute while lassoing
		const lassoStart = function() {
			lasso.items()
				.attr("r",3.5) // reset size
				.style("fill",null) // clear all of the fills
				.classed({"not_possible":true,"selected":false}); // style as not possible
		};
		
		const lassoDraw = function() {
			// Style the possible dots
			lasso.items()
				.filter(function(d) { return d.possible === true; })
				.classed({"not_possible":false,"possible":true});
			
			// Style the not possible dot
			lasso.items()
				.filter(function(d) { return d.possible === false; })
				.classed({"not_possible":true,"possible":false});
		};
		
		const lassoEnd = function() {
			// Reset the color of all dots
			lasso.items()
				.style("fill", function(d) { return color(d.species); });
			
			// Style the selected dots
			lasso.items()
				.filter(function(d) { return d.selected === true; })
				.classed({"not_possible":false,"possible":false})
				.attr("r",7);
			
			// Reset the style of the not selected dots
			lasso.items()
				.filter(function(d) { return d.selected === false; })
				.classed({"not_possible":false,"possible":false})
				.attr("r",3.5);
		
		};
		
		// Create the area where the lasso event can be triggered
		var lassoArea = svg.append("rect")
							.attr("width",width)
							.attr("height",height)
							.style("opacity",0);
		
		// Define the lasso
		var lasso = d3.lasso()
			.closePathDistance(75) // max distance for the lasso loop to be closed
			.closePathSelect(true) // can items be selected by closing the path?
			.hoverSelect(true) // can items by selected by hovering over them?
			.area(lassoArea) // area where the lasso can be started
			.on("start",lassoStart) // lasso start function
			.on("draw",lassoDraw) // lasso draw function
			.on("end",lassoEnd); // lasso end function
		
		// Init the lasso on the svg:g that contains the dots
		svg.call(lasso);
		
		x.domain(d3.extent(data, function(d) { return d.sepalWidth; })).nice();
		y.domain(d3.extent(data, function(d) { return d.sepalLength; })).nice();
		
		svg.append("g")
			.attr("class", "x axis")
			.attr("transform", "translate(0," + height + ")")
			.call(xAxis)
			.append("text")
			.attr("class", "label")
			.attr("x", width)
			.attr("y", -6)
			.style("text-anchor", "end")
			.text("Sepal Width (cm)");
		
		svg.append("g")
			.attr("class", "y axis")
			.call(yAxis)
			.append("text")
			.attr("class", "label")
			.attr("transform", "rotate(-90)")
			.attr("y", 6)
			.attr("dy", ".71em")
			.style("text-anchor", "end")
			.text("Sepal Length (cm)")
		
		svg.selectAll(".dot")
			.data(data)
			.enter().append("circle")
			.attr("id",function(d, i) { return "dot_" + i; }) // added
			.attr("class", "dot")
			.attr("r", 3.5)
			.attr("cx", function(d) { return x(d.sepalWidth); })
			.attr("cy", function(d) { return y(d.sepalLength); })
			.style("fill", function(d) { return color(d.species); });
		
		lasso.items(d3.selectAll(".dot"));
		
		var legend = svg.selectAll(".legend")
			.data(color.domain())
			.enter().append("g")
			.attr("class", "legend")
			.attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });
		
		legend.append("rect")
			.attr("x", width - 18)
			.attr("width", 18)
			.attr("height", 18)
			.style("fill", color);
		
		legend.append("text")
			.attr("x", width - 24)
			.attr("y", 9)
			.attr("dy", ".35em")
			.style("text-anchor", "end")
			.text(function(d) { return d; });
	}
	render = () => <div ref={(lasso) => this.lasso = lasso} />;
}

export default Lasso;
