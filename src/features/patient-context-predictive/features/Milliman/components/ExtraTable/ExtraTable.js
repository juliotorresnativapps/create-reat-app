import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
//import '../../../../../../styles/components/_DisplayTable';
import _ from 'lodash';

const RenderHeaders = (columns) => {
  const result = columns.map((prop) => (
  <th key={uuid()} className="display-table__table-header">
    <span className="display-table__table-header__label">
      {
        prop
          .split('_')
          .map(_.capitalize)
          .join(' ')
      }
    </span>
  </th>
  ));
  return result;
};

const renderFields = ({ entity, headers }) => {
  const result = headers.map((prop) =>
    (<td key={uuid()}>
      { entity[prop] }
    </td>)
  );
  return result;
};

const renderRows = (tableInfo, columns) => {
  const result = tableInfo.map((entity) => (
        <tr key={uuid()}>
          {renderFields({entity, columns})}
        </tr>
  ));
  return result;
};

const ExtraTable = (props) => (
  <table className="table display-table">
        <thead>
          <tr>
          <th/>
          {RenderHeaders(props.columns)}
          </tr>
        </thead>
        <tbody>
          <tr><td>Score</td></tr>
          {renderRows(props.tableInfo, props.columns)}
        </tbody>
  </table>
);

ExtraTable.propTypes = {
  columns: PropTypes.array.isRequired,
  tableInfo: PropTypes.array.isRequired
};

export default ExtraTable;
