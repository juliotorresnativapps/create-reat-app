import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { actionCreators } from '../cost';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import CostLayout from "./CostLayout";
import { NAME as costManagementName } from '../cost';
import { NAME as sessionManagementName } from '../../session';

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const mapStateToProps = (state) => ({
  authToken: state[sessionManagementName].auth_token,
  parts: state[costManagementName].parts,
  partsHistory: state[costManagementName].partsHistory,
  trends: state[costManagementName].trends,
  medications: state[costManagementName].medications,
  watchingD: state[costManagementName].watchingD
});

export default connect(mapStateToProps, mapDispatchToProps)(class GeneralCostView extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };
  render() {
    return (
      <CostLayout {...this.props} />
    );
  }
});