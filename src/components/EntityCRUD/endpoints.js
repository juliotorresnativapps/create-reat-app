import {
  ENTITIES
} from './definitions';

export const ENDPOINTS_TYPE = {
  GET: 'get',
  CREATE: 'create',
  DELETE: 'delete',
  UPDATE: 'update',
  SEARCH: 'search'
};

export const ENDPOINTS = {
  ORGANIZATIONS: {
    [ENDPOINTS_TYPE.GET]: '/organizations',
    [ENDPOINTS_TYPE.CREATE]: '/organizations',
    [ENDPOINTS_TYPE.DELETE]: '/organizations',
    [ENDPOINTS_TYPE.UPDATE]: '/organizations',
    [ENDPOINTS_TYPE.SEARCH]: '/organizations/search',
    ALL: '/organizations/all'
  },

  USERS: {
    [ENDPOINTS_TYPE.GET]: '/users',
    [ENDPOINTS_TYPE.CREATE]: '/users',
    [ENDPOINTS_TYPE.DELETE]: '/users',
    [ENDPOINTS_TYPE.UPDATE]: '/users/',
    [ENDPOINTS_TYPE.SEARCH]: '/users'
  },

  BUSINESS_UNITS: {
    [ENDPOINTS_TYPE.GET]: '/business_units',
    [ENDPOINTS_TYPE.CREATE]: '/business_units',
    [ENDPOINTS_TYPE.DELETE]: '/business_units',
    [ENDPOINTS_TYPE.UPDATE]: '/business_units',
    [ENDPOINTS_TYPE.SEARCH]: '/business_units/search'
  },

  PROVIDERS: {
    [ENDPOINTS_TYPE.GET]: '/providers',
    [ENDPOINTS_TYPE.CREATE]: '/providers',
    [ENDPOINTS_TYPE.DELETE]: '/providers',
    [ENDPOINTS_TYPE.UPDATE]: '/providers',
    [ENDPOINTS_TYPE.SEARCH]: '/providers/search'
  },

  LEVELS: {
    [ENDPOINTS_TYPE.GET]: '/levels',
    [ENDPOINTS_TYPE.CREATE]: '/levels',
    [ENDPOINTS_TYPE.DELETE]: '/levels',
    [ENDPOINTS_TYPE.UPDATE]: '/levels',
    [ENDPOINTS_TYPE.SEARCH]: '/levels/search',
    LEVELS_FROM_ORGANIZATION: '/levels/organization_levels',
    NODES_FROM_LEVEL: '/levels/level_nodes'
  },

  AFFILLIATIONS: {
    [ENDPOINTS_TYPE.GET]: '/affilliations',
    [ENDPOINTS_TYPE.CREATE]: '/affilliations',
    [ENDPOINTS_TYPE.DELETE]: '/affilliations',
    [ENDPOINTS_TYPE.UPDATE]: '/affilliations',
    [ENDPOINTS_TYPE.SEARCH]: '/affilliations/search'
  },

  PERMISSIONS: {
    ALL: '/permissions'
  }
};

export const ADDITIONAL_RESOURCES = {
  USER: {
    ORGANIZATIONS: ENDPOINTS.ORGANIZATIONS.ALL,
    LEVELS: ENDPOINTS.LEVELS.LEVELS_FROM_ORGANIZATION,
    AFFILLIATIONS: ENDPOINTS.LEVELS.NODES_FROM_LEVEL,
    PERMISSIONS: ENDPOINTS.PERMISSIONS.ALL
  }
};

export function findResource(entityType, operation) {
  const targetOperation = operation.toLowerCase();
  let resource;

  switch (entityType) {
    case ENTITIES.ORGANIZATIONS:
      resource = ENDPOINTS.ORGANIZATIONS[targetOperation];
      break;

    case ENTITIES.USERS:
      resource = ENDPOINTS.USERS[targetOperation];
      break;

    case ENTITIES.LEVELS:
      resource = ENDPOINTS.LEVELS[targetOperation];
      break;

    case ENTITIES.BUSINESS_UNITS:
      resource = ENDPOINTS.BUSINESS_UNITS[targetOperation];
      break;

    case ENTITIES.PROVIDERS:
      resource = ENDPOINTS.PROVIDERS[targetOperation];
      break;
  }

  return resource;
}

export const findResources = (type) => ({
  GET: findResource(type, ENDPOINTS_TYPE.GET),
  CREATE: findResource(type, ENDPOINTS_TYPE.CREATE),
  UPDATE: findResource(type, ENDPOINTS_TYPE.UPDATE),
  CHANGE_STATUS: findResource(type, ENDPOINTS_TYPE.DELETE),
  SEARCH: findResource(type, ENDPOINTS_TYPE.SEARCH)
});
