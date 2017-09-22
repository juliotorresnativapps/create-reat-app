import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './_TableHeader.scss';
import arrowUp from '../../images/arrow up@3x.png';
import arrowDown from '../../images/arrow down@3x.png';

const TableHeader = ({ column, orderAsc, orderDesc }) => (
  <th className="display-table__table-header">
    <img src={arrowUp} alt="Order Asc" onClick={orderAsc} className="display-table__table-header__arrow-icon arrow-icon-asc"/>
    <img src={arrowDown} alt="Order Desc" onClick={orderDesc} className="display-table__table-header__arrow-icon arrow-icon-desc"/>
    <span className="display-table__table-header__label">
      {
        column
          .split('_')
          .map(_.capitalize)
          .join(' ')
      }
    </span>
  </th>
);

TableHeader.propTypes = {
  column: PropTypes.string.isRequired,
  orderAsc: PropTypes.func.isRequired,
  orderDesc: PropTypes.func.isRequired
};

export default TableHeader;
