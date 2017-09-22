import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './_SummaryView.scss';

export default class Summary extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor() {
    super();

    this.handleCostClick = this.handleCostClick.bind(this);
    this.handlePredictiveClick = this.handlePredictiveClick.bind(this);
    this.handleNetworkClick = this.handleNetworkClick.bind(this);
    this.handlePrevalenceClick = this.handlePrevalenceClick.bind(this);
  }

  handleCostClick() {
    this.props.history.push('/dashboard/analytics/cost');
  }

  handlePredictiveClick() {
    this.props.history.push('/dashboard/analytics/predictive');
  }

  handleNetworkClick() {
    this.props.history.push('/dashboard/analytics/network');
  }

  handlePrevalenceClick() {
    this.props.history.push('/dashboard/analytics/predictive');
  }

  render() {
    const { handleCostClick, handlePredictiveClick, handleNetworkClick, handlePrevalenceClick } = this;

    return (
      <div className="summary">
        <div className="top-nav-bar">
          <div className="top-nav-bar__content">
            <button type="button" className="btn top-nav-bar__breadcrumb">Affilliation</button>
          </div>
        </div>
        <div className="panel-container">
          <div className="panel-row panel-row-top">
            <div className="panel panel-default panel-box panel-box_cost" onClick={handleCostClick}>
              <h3 className="summary__label">Cost</h3>
            </div>
            <div className="panel panel-default panel-box panel-box_predictive" onClick={handlePredictiveClick}>
              <h3 className="summary__label">Predictive</h3>
            </div>
          </div>
          <div className="panel-row">
            <div className="panel panel-default panel-box panel-box_network" onClick={handleNetworkClick}>
              <h3 className="summary__label">Network</h3>
            </div>
            <div className="panel panel-default panel-box panel-box_prevalence" onClick={handlePrevalenceClick}>
              <h3 className="summary__label">Prevalence</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
