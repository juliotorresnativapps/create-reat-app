import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import TableHeader from '../../TableHeader/TableHeader';
import TableRows from '../TableRows/TableRows';
//import '../../../styles/components/_DisplayTable';

const RenderHeaders = (props) => {
  const result = props.columns.map((prop) =>
        <TableHeader key={uuid()} column={prop} orderAsc={() => props.orderAsc(prop)} orderDesc={() => props.orderDesc(prop)} />
  );
  return result;
};

const renderRows = (props) => {
  const result = props.tableInfo.map((entity) =>
        <TableRows key={uuid()} entity={entity} headers={props.columns} />
  );
  return result;
};

const Table = (props) => (
  <table className="table table-striped display-table">
        <thead>
          <tr>
          {RenderHeaders(props)}
          </tr>
        </thead>
        <tbody>
          {renderRows(props)}
        </tbody>
  </table>
);

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  orderAsc: PropTypes.func.isRequired,
  orderDesc: PropTypes.func.isRequired,
  tableInfo: PropTypes.array.isRequired
};

export default Table;
