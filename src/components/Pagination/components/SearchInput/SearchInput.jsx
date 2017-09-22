import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class SearchInput extends Component {
  static propTypes = {
    resource: PropTypes.string.isRequired,
    search: PropTypes.func.isRequired,
    target: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
    this.handleSearchTerm = _.debounce(this.handleSearchTerm.bind(this), 500);
  }

  handleOnKeyUp(evt) {
    this.handleSearchTerm(evt.target.value);
  }

  handleSearchTerm(searchTerm) {
    const { resource } = this.props;
    this.props.search(resource, searchTerm);
  }

  render() {
    const { handleOnKeyUp, props } = this;
    const { target } = props;

    const placeholder = `Search ${target}`;

    return (
      <div className="display-table__input">
        <label htmlFor="target[searchTerm]" className="sr-only">{target}: </label>
        <span className="search-icon"/>
        <input type="text" placeholder={placeholder} onKeyUp={handleOnKeyUp} id="target[searchTerm]" className="input--glyph"/>
      </div>
    );
  }
}
