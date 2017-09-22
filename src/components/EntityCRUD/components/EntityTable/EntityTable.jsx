import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from '../../../TableHeader';
import EntityRow from '../EntityRow';
import uuid from 'uuid';
import _ from 'lodash';

const renderRows = (props) => (
  props.entities.map((entity) => (
    <EntityRow
      key={uuid()}
      headers={props.fields}
      entity={entity}
      entityName={props.entityName}
      displayEntityModal={props.displayEntityModal}
      changeEntityStatus={props.changeEntityStatus}
      changeStatusResource={props.changeStatusResource}
    />
  ))
);

const renderHeaders = ({ headers, orderResultsAsc, orderResultsDesc }) => (
  headers.map((header) => (
    <TableHeader
      key={uuid()}
      column={header.display}
      orderAsc={() => orderResultsAsc(header.target)}
      orderDesc={() => orderResultsDesc(header.target)}
    />
  ))
);

const EntityTable = (props) => (
  <section>
    <h2 hidden>{_.upperFirst(_.lowerCase(props.entityName))} Records Table</h2>
    <table className="display-table table table-striped">
      <thead>
        <tr>
          {renderHeaders(props)}
          <th className="display-table__table-header"/>
        </tr>
      </thead>
      <tbody>
        {renderRows(props)}
      </tbody>
    </table>
  </section>
);

EntityTable.propTypes ={
  changeEntityStatus: PropTypes.func.isRequired,
  changeStatusResource: PropTypes.string.isRequired,
  displayEntityModal: PropTypes.func.isRequired,
  entities: PropTypes.arrayOf(PropTypes.object).isRequired,
  entityName: PropTypes.string.isRequired,
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  orderResultsAsc: PropTypes.func.isRequired,
  orderResultsDesc: PropTypes.func.isRequired
};

export default EntityTable;
