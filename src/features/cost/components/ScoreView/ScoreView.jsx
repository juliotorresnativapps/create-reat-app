import React, { Component } from 'react';
import './ScoreView.scss';
import TwoLevelPie from '../../../charts/two-level-pie/TwoLevelPie';
import backArrow from '../../../../images/ic_arrow_back_24px.png';
import PropTypes from 'prop-types';

const subpartsArray = [
  { name: 'A1', value: 100 },
  { name: 'A2', value: 300 },
  { name: 'B1', value: 100 },
  { name: 'B2', value: 80 },
  { name: 'B3', value: 40 },
  { name: 'B4', value: 30 },
  { name: 'B5', value: 50 },
  { name: 'D1', value: 150 },
  { name: 'D2', value: 50 }
];

const duplicate = (arr) => JSON.parse(JSON.stringify(arr));

export default class ScoreView extends Component {

  static propTypes = {
    filterByName: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    parts: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);
    this.handleGoBack = this.handleGoBack.bind(this);
    this.onPieClick = this.onPieClick.bind(this);
    this.state = {
      subparts: [],
    };
  }

  componentDidMount() {
    this.setState({
      subparts: duplicate(subpartsArray),
    });
  }

  /**
   * On pie section click, filter subparts by part name and set value to 0
   * remove other sections values from chart
   * @param {*} data the data selected
   * @param {*} index the datas index selected
   */
  onPieClick(data, index) {
    // let partLetter = partsArray[index].name;
    // let subParts = duplicate(subpartsArray);
    // subParts.map((subpart) => {
    //   if (!subpart.name.startsWith(partLetter)) {
    //     subpart.value = 0;
    //   }
    // });
    this.props.filterByName(data.name);
  }

  /**
   * Reset charts to initial state
   */
  resetFilters() {

  }

  handleGoBack() {
    this.props.history.goBack();
  }

  render() {
    return (
      <div className="cost">
        <div className="top-nav-bar">
          <div className="top-nav-bar__content">
            <button type="button" className="btn top-nav-bar__breadcrumb">Organization</button>
          </div>
        </div>
        <div className="panel-container">
          <div className="panel-row panel-row-top panel-row_full">
            <div className="panel panel-default panel-box panel-box_left panel-box_chart panel-box_full">
              <img className="img-floating img-left img-top img_back"
                   onClick={this.handleGoBack}
                   src={backArrow} alt="Back arrow"/>
              <h3 className="title__label">Total Score</h3>
              <TwoLevelPie
                animated={false}
                pieClick={this.onPieClick}
                resetFilters={this.resetFilters}
                parts={this.props.parts}
                subparts={this.state.subparts} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
