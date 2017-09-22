import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './_Paginator.scss';

export default class Paginator extends Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    getPage: PropTypes.func.isRequired,
    pageSize: PropTypes.number.isRequired,
    resource: PropTypes.string.isRequired,
    selectedColumn: PropTypes.string,
    selectedColumnModifier: PropTypes.string,
    totalNumberOfEntities: PropTypes.number.isRequired
  };

  constructor(props) {
    super(props);

    this.searchPage = _.debounce(this.searchPage.bind(this), 100);
  }

  componentWillReceiveProps(nextProps) {
    this.pageInput.value = nextProps.currentPage;
  }

  searchPage(page, selectedColumn, selectedColumnModifier) {
    if(page) {
      const realPage = page;
      const { pageInput } = this;
      const { totalNumberOfEntities, pageSize, getPage, resource } = this.props;
      const maxPages =  Math.ceil(totalNumberOfEntities / pageSize);

      const isOutOfRange = (realPage > maxPages) || (page < 1);
      if(isOutOfRange) {
        return;
      }
      getPage(resource, realPage, selectedColumn, selectedColumnModifier);
      pageInput.value = page;
    }
  }

  render() {
    const { props, searchPage } = this;
    const { currentPage, pageSize, totalNumberOfEntities, selectedColumn, selectedColumnModifier } = props;
    const maxPages =  totalNumberOfEntities / pageSize;
    const displayMaxPagesValue = totalNumberOfEntities % pageSize === 0 ? maxPages : Math.floor(maxPages + 1);

    return (
      <div className="paginator clearfix">
        <div className="paginator__content">
          <button
            type="button"
            onClick={() => searchPage(1, selectedColumn, selectedColumnModifier)}
            disabled={currentPage === 1}
            className="btn btn-default btn-xs paginator__button">
              &lt;&lt;
          </button>
          <button
            type="button"
            onClick={() => searchPage(currentPage - 1, selectedColumn, selectedColumnModifier)}
            disabled={currentPage === 1}
            className="btn btn-default btn-xs paginator__button">
              &lt;
          </button>
          <input
            placeholder={currentPage}
            type="number"
            min={1}
            max={maxPages}
            ref={(input) => this.pageInput = input}
            onChange={(evt) => searchPage(evt.target.value, selectedColumn, selectedColumnModifier)}
            defaultValue={currentPage}
            className="paginator__input"
          />
          {
            maxPages ?
              <span className="paginator__label">of {displayMaxPagesValue}</span>: undefined
          }
          <button
            type="button"
            onClick={() => searchPage(currentPage + 1, selectedColumn, selectedColumnModifier)}
            disabled={currentPage === displayMaxPagesValue}
            className="btn btn-default btn-xs paginator__button">
              &gt;
          </button>
          <button
            type="button"
            onClick={() => searchPage(displayMaxPagesValue, selectedColumn, selectedColumnModifier)}
            disabled={currentPage === displayMaxPagesValue}
            className="btn btn-default btn-xs paginator__button">
              &gt;&gt;
          </button>
        </div>
      </div>
    );
  }
}
