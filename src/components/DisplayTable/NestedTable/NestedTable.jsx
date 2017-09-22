import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import TableHeader from '../../TableHeader/TableHeader';
//import '../../../styles/components/_DisplayTable';
import './_NestedTable.scss';
import Table from '../Table/Table.js';
import _ from 'lodash';

const RenderHeaders = (props) => {
  const result = props.columns.map((prop) =>
    <TableHeader key={uuid()} column={prop} orderAsc={() => props.orderAsc(prop)} orderDesc={() => props.orderDesc(prop)} />
  );
  return result;
};

const orderColumn = (modifier, info, props, id) => {
  return (order_by) => {
    const modifiedTableInfo = props.tableInfo.map((entity) => {
      if (entity.id === id) {
        return {
          ...entity,
          data: _.orderBy(info, [order_by], [modifier])
        };
      }
      return entity;
    });
    props.orderSubTableInfo(modifiedTableInfo);
  };
};

const renderFields = (entity, headers) => {
  const result = headers.map((prop) =>
    (<td key={uuid()}>
      {entity[prop]}
    </td>)
  );
  return result;
};

const renderRows = (props) => {
  const separatedRows = [];

  props.tableInfo.forEach((entity) => {
    separatedRows.push(
      <tr key={uuid()} className="accordion-toggle" data-toggle="collapse" data-target={`#${entity.id}`}>
        {renderFields(entity, props.columns)}
      </tr>);

    separatedRows.push(
      <tr key={uuid()}>
        <td className=' no-padding' colSpan={props.columns.length} >
          <div className="accordion-body collapse" id={entity.id}>
            <Table columns={props.subColumns} tableInfo={entity.data}
              orderAsc={orderColumn('asc', entity.data, props, entity.id)} orderDesc={orderColumn('desc', entity.data, props, entity.id)} />
          </div>
        </td>
      </tr>
    );
  });

  return _.concat(separatedRows);
};

const NestedTable = (props) => (
  <table className="table table-striped nested display-table">
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

NestedTable.propTypes = {
  columns: PropTypes.array.isRequired,
  orderAsc: PropTypes.func.isRequired,
  orderDesc: PropTypes.func.isRequired,
  orderSubTableInfo: PropTypes.func.isRequired,
  subColumns: PropTypes.array.isRequired,
  tableInfo: PropTypes.array.isRequired
};

export default NestedTable;
