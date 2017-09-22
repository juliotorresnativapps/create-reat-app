import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';

const renderLevelFields = (entity, headers) => (
  headers.map((prop) => {
    let item;

    switch (prop) {
      case 'parent':
        item = entity.parent.name;
        break;

      case 'status':
        item = entity[prop] ? 'Active' : 'Inactive';
        break;

      default:
        item = entity[prop];
        break;
    }

    return (
      <td key={uuid()}>
        {_.upperFirst(item)}
      </td>
    );
  })
);

export default renderLevelFields;
