import {
  ENTITIES
} from './definitions';

export function getTableHeaders(entityType) {
  let resource;

  switch (entityType) {
    case ENTITIES.USERS:
      resource = [{
          display: 'name',
          target: 'first_name'
        }, {
          display: 'related_to',
          target: 'related_to'
        },
        {
          display: 'status',
          target: 'status'
        }
      ];
      break;

    case ENTITIES.ORGANIZATIONS:
      resource = [{
        display: 'name',
        target: 'name'
      }];
      break;

    case ENTITIES.LEVELS:
      resource = [{
        display: 'name',
        target: 'name'
      }, {
        display: 'parent_level',
        target: 'parent'
      }, {
        display: 'status',
        target: 'status'
      }];
      break;

    case ENTITIES.BUSINESS_UNITS:
      resource = [{
        display: 'name',
        target: 'name'
      }, {
        display: 'parent_name',
        target: 'parent'
      }, {
        display: 'status',
        target: 'status'
      }];
      break;

    case ENTITIES.PROVIDERS:
      resource = [{
        display: 'name',
        target: 'name'
      }, {
        display: 'credentials',
        target: 'credentials'
      }, {
        display: 'parent',
        target: 'parent'
      }, {
        display: 'status',
        target: 'status'
      }];
      break;
  }

  return resource;
}

export function getTableFields(entityType) {
  let resource;

  switch (entityType) {
    case ENTITIES.USERS:
      resource = ['name', 'related_to', 'status'];
      break;

    case ENTITIES.ORGANIZATIONS:
      resource = ['name'];
      break;

    case ENTITIES.LEVELS:
      resource = ['name', 'parent', 'status'];
      break;

    case ENTITIES.BUSINESS_UNITS:
      resource = ['name', 'parent', 'status'];
      break;

    case ENTITIES.PROVIDERS:
      resource = ['name', 'credentials', 'parent', 'status'];
      break;
  }

  return resource;
}
