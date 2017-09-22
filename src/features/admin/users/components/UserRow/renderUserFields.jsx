import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';

const renderUserFields = (entity, headers) => (
  headers.map((prop) => {
    let cell;

    switch (prop) {
      case 'name':
        cell = `${entity.first_name} ${entity.last_name}`;
        break;

      case 'status':
        cell = entity[prop] ? 'Active' : 'Inactive';
        break;

      case 'related_to':
        cell = entity[prop].name;
        break;

      default:
        cell = entity[prop];
        break;
    }
    return (
      <td key={uuid()}>
        {_.upperFirst(cell)}
      </td>
    );
  })
);

export default renderUserFields;
