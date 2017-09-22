import React, { Component } from 'react';
import Level from '../Level';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import api from '../../../../app/api';

const levelsResource = '/levels';

/**
 * TODO: keep in mind that the error prop in the state might fail.
 * We still don't know if a string or an array is returned form the real API.
 */
export default class LevelSelector extends Component {
  static propTypes = {
    changeLevel: PropTypes.func.isRequired
  }

  constructor() {
    super();

    this.state = {
      levels: [],
      error: undefined
    };

    this.renderLevels = this.renderLevels.bind(this);
  }

  componentDidMount() {
    api.get(levelsResource)
      .then((res) =>
        this.setState((prevState) => ({ ...prevState, levels: res.data }))
      )
      .catch((err) =>
        this.setState((prevState) => ({
          ...prevState,
          error: err.response
        })
      ));
  }

  renderLevels() {
    const { changeLevel } = this.props;

    return this.state.levels
      .map((level) => (
        <Level key={uuid()} changeLevel={changeLevel} {...level} />)
      );
  }

  render() {
    const { renderLevels } = this;
    const { error } = this.state;

    return (
      <div className="dropdown">
        <button className="btn btn-default dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          id="levelDropdown"
          aria-haspopup="true"
          aria-expanded="true">
            Search
        </button>
        <ul className="dropdown-menu" aria-labelledby="levelDropdown">
          { error ? error : renderLevels() }
        </ul>
      </div>
    );
  }
}
