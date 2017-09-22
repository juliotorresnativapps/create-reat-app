import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CostView.scss';
import PropTypes from 'prop-types';
import SimpleBar from '../../../charts/simple-bar/SimpleBar';
import SimpleHorizontalBar from '../../../charts/simple-horizontal-bar/SimpleHorizontalBar';
import TwoLevelPie from '../../../charts/two-level-pie/TwoLevelPie';
import Toolbar from './Toolbar';
import backArrow from '../../../../images/ic_arrow_back_24px.png';
import { fetch as fetchPharmacy } from '../../../../app/actions/pharmacy';
import { fetch as fetchMedication } from '../../../../app/actions/medication';

const mapProps = (state) => ({
  parientStatusList: state.predictive.parientStatusList,
	benchmarkList: state.predictive.benchmarkList,
	authToken: state.session.auth_token,
	node: ((state.session||{}).user.related_to_id||{}).$oid||null,
	pharmaciesList: state.pharmacy.list,
	medicationsList: state.medication.list,
});

export default connect(mapProps)(class CostView extends Component {
	static propTypes = {
		addMedications: PropTypes.func.isRequired,
		authToken: PropTypes.string,
		dispatch: PropTypes.func.isRequired,
		filterByName: PropTypes.func.isRequired,
		history: PropTypes.object.isRequired,
		medications: PropTypes.array,
		node: PropTypes.func,
		parts: PropTypes.array,
		partsHistory: PropTypes.array.isRequired,
		trends: PropTypes.array,
		undo: PropTypes.func.isRequired,
    watchingD: PropTypes.bool
  };

  constructor(props) {
    super(props);
    this.state = {
      isD: false,
      subparts: [],
    };
  }

	componentDidMount() {
		const { dispatch, authToken, node } = this.props;
		if (node !== null) {
			dispatch(fetchPharmacy(authToken, node));
			dispatch(fetchMedication(authToken, node));
		}
	}

  handleBreakdownClick = () => {
    this.props.history.push('/dashboard/analytics/cost/breakdown');
  };

  handleScoreClick = () => {
    this.props.history.push('/dashboard/analytics/cost/score');
  };

  handleBarClick = (data) => {
    this.props.filterByName(data.name);
  };

  handlePieClick = (data) => {
    this.props.filterByName(data.name);
  };

  /**
   * Reset charts to previous state
   */
  handleReset = () => {
    this.props.undo();
  };

  render() {

    return (
      <div className="cost">
        <div className="top-nav-bar">
          <div className="top-nav-bar__content">
            <button type="button" className="btn top-nav-bar__breadcrumb">Organization</button>
          </div>
        </div>
        <Toolbar {...this.props} />
        <div className="panel-container">
          <div className="panel-row panel-row-top">
            <div className="panel panel-default panel-box panel-box_left panel-box_chart">
              {
                this.props.partsHistory.length > 1 ? (
                  <img className="img-floating img-left img-top img_back"
                   onClick={this.handleReset}
                   src={backArrow} alt="Back arrow"/>
                ) : null
              }

              <h3 className="title__label" onClick={this.handleScoreClick}>Total Score</h3>
              <TwoLevelPie
                  pieClick={this.handlePieClick}
                  resetFilters={this.handleReset}
                  parts={this.props.parts}
                  subparts={this.state.subparts} />
            </div>
            <div className="panel panel-default panel-box panel-box_chart">
              <h3 className="title__label" onClick={this.handleBreakdownClick}>Cost Breakdown</h3>
              <SimpleHorizontalBar
                  data={this.props.parts}
                  barClick={this.handleBarClick} />
            </div>
          </div>
          <div className="panel-row">
            <div className={`panel panel-default panel-box panel-box_chart ${this.props.watchingD ? 'panel-box_left' : 'panel-box_full'}`}>
              <h3 className="title__label">Cost Trend</h3>
              <SimpleBar data={this.props.trends} />
            </div>
            {
              this.props.watchingD ? (
                <div className="panel panel-default panel-box panel-box_chart">
                  <h3 className="title__label">Cost Per Medication</h3>
                  <SimpleHorizontalBar data={this.props.medications} />
                </div>) : null
            }
          </div>

				</div>

			</div>);
  }
});
