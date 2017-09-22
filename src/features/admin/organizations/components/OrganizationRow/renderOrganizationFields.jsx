import React from 'react';
import _ from 'lodash';
import uuid from 'uuid';

const renderOrganizationFields = (entity, headers) => (
  headers.map((prop) => {
    let item;

    switch (prop) {
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

export default renderOrganizationFields;
