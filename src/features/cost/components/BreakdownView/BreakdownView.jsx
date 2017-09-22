import React, { Component } from 'react';
import './BreakdownView.scss';
import SimpleHorizontalBar from '../../../charts/simple-horizontal-bar/SimpleHorizontalBar';
import backArrow from '../../../../images/ic_arrow_back_24px.png';
import PropTypes from 'prop-types';

const medicationsArray = [
  {
    name: 'Abilify',
    value: 326785
  },
  {
    name: 'Nexium',
    value: 326785
  },
  {
    name: 'Humira',
    value: 245004
  },
  {
    name: 'Crestor',
    value: 33050
  },
  {
    name: 'Advair',
    value: 356456
  },
  {
    name: 'Enbrel',
    value: 15000
  },
  {
    name: 'Remicade',
    value: 6000
  },
  {
    name: 'Cymbalta',
    value: 13720
  },
];

export default class BreakdownView extends Component {

  static propTypes = {
    addMedications: PropTypes.func.isRequired,
    filterByName: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    parts: PropTypes.array.isRequired
  };

  handleBarClick = (data, index) => {
    this.props.filterByName(data.name);
    this.props.addMedications(medicationsArray);
  }

  handleGoBack = () => {
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
              <SimpleHorizontalBar 
                  data={this.props.parts}
                  barClick={this.handleBarClick} />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
