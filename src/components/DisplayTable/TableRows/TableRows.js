import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

const renderFields = ({ entity, headers }) => {
  const result = headers.map((prop) =>
    (<td key={uuid()}>
      { entity[prop] }
    </td>)
  );
  return result;
};

const TableRow = (props) => (
  <tr>
    {renderFields(props)}
  </tr>
);

TableRow.propTypes = {
  entity: PropTypes.object.isRequired,
  headers: PropTypes.array.isRequired
};

export default TableRow;
