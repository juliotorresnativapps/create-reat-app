import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LevelSelector from './LevelSelector';

export default class LevelSelectorLayout extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  }

  render() {
    const { actions } = this.props;

    return (
      <LevelSelector changeLevel={actions.changeLevel} />
    );
  }
}
