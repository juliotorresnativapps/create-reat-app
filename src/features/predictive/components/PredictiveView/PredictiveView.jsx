import React, { Component } from 'react';
import './PredictiveView.scss';
//import SimpleScatter from '../../../charts/simple-scatter/SimpleScatter';
import Toolbar from './Toolbar';
import { connect } from 'react-redux';
import classname from 'classnames';
import Lasso from '../../../../components/Lasso';

import {
	data,
	partsArray,
	subpartsArray,
	trendsArray,
	medicationsArray,
	lasso as lassoData
} from './data';

/**
 * 
 * @param {*} arr 
 */
const duplicate = (arr) => (
	JSON.parse(JSON.stringify(arr))
);

/**
 * 
 * @param {*} state 
 */
const mapProps = (state) => ({
	parientStatusList: state.predictive.parientStatusList,
	benchmarkList: state.predictive.benchmarkList,
	networkList: state.predictive.networkList,
	scoresList: state.predictive.scoresList,
	typesFilterPeriod: state.predictive.typesFilterPeriod,
	periodOfTimeList: state.predictive.periodOfTimeList,
});

/**
 * 
 */
class PredictiveView extends Component {

	/**
	 * 
	 */
	static propTypes = {

	};

	/**
	 * 
	 */
	state = {
		data: [],
		parts: [],
		subparts: [],
		trends: [],
		medications: [],
		axisX: '',
		axisY: ''
	};

	/**
	 * 
	 */
	componentDidMount() {
		this.setState({
			data: data,
			parts: duplicate(partsArray),
			subparts: duplicate(subpartsArray),
			trends: duplicate(trendsArray),
			medications: [],
		});
	}

	/**
	 * On pie section click, filter subparts by part name and set value to 0
	 * remove other sections values from chart
	 * @param {*} data the data selected
	 * @param {*} index the datas index selected
	 */
	onPieClick = (data, index) => {
		let partLetter = partsArray[index].name;
		let subParts = duplicate(subpartsArray);
		subParts.map((subpart) => {
			if (!subpart.name.startsWith(partLetter)) {
				subpart.value = 0;
			}
		});
		let parts = duplicate(partsArray).filter((part) => {
			return part.name === data.name;
		});

		let trends = duplicate(this.state.trends);
		trends.map((trend) => {
			switch (partLetter) {
				case 'A':
					setTimeout(() => {
						delete trend.costD;
						delete trend.costB;
					}, 1000);
					trend.costD = 0;
					trend.costB = 0;
					break;
				case 'B':
					setTimeout(() => {
						delete trend.costA;
						delete trend.costD;
					}, 1000);
					trend.costA = 0;
					trend.costD = 0;
					break;
				case 'D':
					setTimeout(() => {
						delete trend.costA;
						delete trend.costB;
					}, 1000);
					trend.costA = 0;
					trend.costB = 0;
					break;
			}
		});
		this.setState({
			parts: parts,
			subparts: subParts,
			trends: trends
		});
		setTimeout(() => {
			this.setState({
				medications: duplicate(medicationsArray)
			});
		}, 5000);
	}

	/**
	 * Reset charts to initial state
	 */
	resetFilters = () => {
		this.setState({
			parts: duplicate(partsArray),
			subparts: duplicate(subpartsArray),
			trends: duplicate(trendsArray)
		});
	}

	/**
	 * 
	 */
	handleZoom = () => {

	}

	/**
	 * 
	 */
	handleScatterMouseDown = (evt) => {
		const { x, y, z, cx, cy } = evt;
		this.setState({
			node: { x, y, z, cx, cy }
		});
	}

	handleChangeAxisScore = (store, value) => (e) => {
		e.preventDefault();
		this.setState({
			[store]: value
		});
	}

	renderAxis = ({value, store, label, dropup}) => {
		const axis = [ "RAF Score", "Compilance Score", "Miliman Score" ];
		return (
			<div className={classname({dropdown: true, dropup: dropup})}>
				<button href="" style={{width: 200}} className="btn btn-primary dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
					<span style={{float: dropup ? 'right': 'left'}}>{label}</span>{value}
				</button>
				<ul className="dropdown-menu">
					{axis.map((v, i) => (
						<li key={i} className={classname({active: value === v})}>
							<a href="" onClick={this.handleChangeAxisScore(store, v)}>{v}</a>
						</li>
					))}
				</ul>
			</div>
		);
	};
 
	/**
	 * 
	 */
	render() {
		const props = this.props;
		const axisX = this.state.axisX || '';
		const axisY = this.state.axisY || '';
		return (
			<div className="cost">
				<div className="top-nav-bar">
					<div className="top-nav-bar__content">
						<button type="button" className="btn top-nav-bar__breadcrumb">Organization</button>
					</div>
				</div>
				<Toolbar {...props} >fd</Toolbar>
				<div className="panel-container">
					<div className="panel-row panel-row-top panel-row_full">
						<div style={{height: 'auto'}} className="panel panel-default panel-box panel-box_left panel-box_chart panel-box_full">
							<h3 className="title__label" onClick={this.handleZoom}>Predictive</h3>
							<div>
								<this.renderAxis value={axisY} store='axisY' label='Y' dropup={false} />
							</div>
							<Lasso data={lassoData} />
							<div style={{float: 'right'}}>
								<this.renderAxis value={axisX} store='axisX' label='X' dropup />
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default connect(mapProps)(PredictiveView);