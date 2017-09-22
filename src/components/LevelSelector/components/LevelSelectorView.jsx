import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../level-selector';
import LevelSelectorLayout from './LevelSelectorLayout';

const mapDispatchToProps = (dipatch) => ({
  actions: bindActionCreators(actionCreators, dipatch)
});

export default connect(undefined, mapDispatchToProps)(class LevelSelectorView extends Component {
  render() {
    return (
      <LevelSelectorLayout {...this.props}/>
    );
  }
});