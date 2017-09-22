import api from '../../app/api';
import { ENTITIES } from './definitions';

export const actions = {
  DISPLAY_ENTITY_MODAL: 'DISPLAY_ENTITY_MODAL',
  HIDE_ENTITY_MODAL: 'HIDE_ENTITY_MODAL',
  ATTEMPT_CREATE_ENTITY: 'ATTEMPT_CREATE_ENTITY',
  CREATE_ENTITY_SUCCEEDED: 'CREATE_ENTITY_SUCCEEDED',
  CREATE_ENTITY_FAILURE: 'CREATE_ENTITY_FAILURE',
  ATTEMPT_UPDATE_ENTITY: 'ATTEMPT_UPDATE_ENTITY',
  UPDATE_ENTITY_SUCCEEDED: 'UPDATE_ENTITY_SUCCEEDED',
  UPDATE_ENTITY_FAILURE: 'UPDATE_ENTITY_FAILURE',
  ATTEMPT_TOGGLE_ENTITY: 'ATTEMPT_TOGGLE_ENTITY',
  TOGGLE_ENTITY_SUCCEEDED: 'TOGGLE_ENTITY_SUCCEEDED',
  TOGGLE_ENTITY_FAILED: 'TOGGLE_ENTITY_FAILED',
  ATTEMPT_SEARCH_ENTITY: 'ATTEMPT_SEARCH_ENTITY',
  SEARCH_ENTITY_SUCCEEDED: 'SEARCH_ENTITY_SUCCEEDED',
  SEARCH_ENTITY_FAILED: 'SEARCH_ENTITY_FAILED',
  ATTEMPT_GET_CRUD_SPECIFIC_PAGE: 'ATTEMPT_GET_CRUD_SPECIFIC_PAGE',
  GET_SPECIFIC_CRUD_PAGE_SUCCEEDED: 'GET_SPECIFIC_CRUD_PAGE_SUCCEEDED',
  GET_SPECIFIC_CRUD_PAGE_FAILED: 'GET_SPECIFIC_CRUD_PAGE_FAILED',
  SELECT_ENTITY_TYPE: 'SELECT_ENTITY_TYPE'
};

const defaultState = {
  entities: [],
  totalNumberOfEntities: 0,
  currentPage: 1,
  pageSize: 14,
  selectedEntity: {},
  selectedEntityType: ENTITIES.USERS,
  selectedOperation: '',
  selectedColumn: undefined,
  selectedColumnModifier: undefined,
  searchTerm: '',
  isCreatingEntity: false,
  isUpdatingEntity: false,
  isTogglingEntity: false,
  isGettingPage: false,
  formErrors: undefined,
  toggleErrors: undefined,
  searchErrors: undefined,
  paginationErrors: undefined,
  loadingError: undefined
};

const defaultPaginationConfig = {
  page: 1
};

export const actionCreators = {
  changeEntityTab: (authToken, type, resource) => (dispatch) => {
    dispatch(actionCreators.getEntityCrudPage(authToken, resource, { page: 1 }))
      .then(() => {
        dispatch(actionCreators.selectEntityType(type));
      });
  },

  selectEntityType: (type) => ({
    type: actions.SELECT_ENTITY_TYPE,
    payload: type
  }),

  displayEntityModal: (operation, entity = {}) => ({
    type: actions.DISPLAY_ENTITY_MODAL,
    payload: { operation, entity }
  }),

  hideEntityModal: () => ({
    type: actions.HIDE_ENTITY_MODAL
  }),

  createEntity: (authToken, resource, entityInfo) => (dispatch) => {
    dispatch(actionCreators.attemptCreateEntity());

    return api.post(resource, entityInfo, { headers: { Authorization : authToken } })
      .then((res) =>
        setTimeout(() => dispatch(actionCreators.createEntitySucceeded(res.data)), 1000)
      )
      .catch((err) => {
        dispatch(actionCreators.createEntityFailed(err.response.data));
        throw err;
      });
  },

  attemptCreateEntity: () => ({
    type: actions.ATTEMPT_CREATE_ENTITY
  }),

  createEntitySucceeded: () => ({
    type: actions.CREATE_ENTITY_SUCCEEDED
  }),

  createEntityFailed: (errorInfo) => ({
    type: actions.CREATE_ENTITY_FAILURE,
    payload: errorInfo
  }),

  updateEntity: (resource, entityInfo) => (dispatch) => {
    dispatch(actionCreators.attemptUpdateEntity());

    return api.put(resource, entityInfo)
      .then(() =>
        setTimeout(() => dispatch(actionCreators.updateEntitySucceeded(entityInfo))), 1000)
      .catch((err) => {
        dispatch(actionCreators.updateEntityFailed(err.response.data));
        throw err;
      });
  },

  attemptUpdateEntity: () => ({
    type: actions.ATTEMPT_UPDATE_ENTITY
  }),

  updateEntitySucceeded: (entity) => ({
    type: actions.UPDATE_ENTITY_SUCCEEDED,
    payload: entity
  }),

  updateEntityFailed: (errorInfo) => ({
    type: actions.UPDATE_ENTITY_FAILURE,
    payload: errorInfo
  }),

  changeEntityStatus: (authToken, resource, id) => (dispatch) => {
    dispatch(actionCreators.toggleEntity());

    return api.delete(resource, {
        headers: { Authorization: authToken },
        data: { id: id.$oid }
      })
      .then(() =>
        dispatch(actionCreators.toggleEntitySucceeded(id))
      )
      .catch((err) => {
        dispatch(actionCreators.toggleEntityFailed(err.response.data));
        throw err;
      });
  },

  toggleEntity: () => ({
    type: actions.ATTEMPT_TOGGLE_ENTITY,
  }),

  toggleEntitySucceeded: (id) => ({
    type: actions.TOGGLE_ENTITY_SUCCEEDED,
    payload: id
  }),

  toggleEntityFailed: (errorInfo) => ({
    type: actions.TOGGLE_ENTITY_FAILED,
    payload: errorInfo
  }),

  searchEntity: (resource, searchTerm) => (dispatch) => {
    dispatch(actionCreators.attemptSearchEntity());

    const url = searchTerm? `${resource}?searchTerm=${searchTerm}` : resource;

    return api.get(url)
      .then((res) =>
        dispatch(actionCreators.searchEntitySucceeded(res.data))
      )
      .catch((err) =>
        dispatch(actionCreators.searchEntityFailed(err.response.data))
      );
  },

  attemptSearchEntity: () => ({
    type: actions.ATTEMPT_SEARCH_ENTITY
  }),

  searchEntitySucceeded: (entities) => ({
    type: actions.SEARCH_ENTITY_SUCCEEDED,
    payload: entities
  }),

  searchEntityFailed: (errorInfo) => ({
    type: actions.SEARCH_ENTITY_FAILED,
    payload: errorInfo
  }),

  getEntityCrudPage: (authToken, resource, config = defaultPaginationConfig) => (dispatch) => {
    dispatch(actionCreators.attemptGetSpecificCrudPage());

    const queryString = Object.keys(config)
      .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(config[k])}`)
      .join('&');

    return api.get(`${resource}?${queryString}`, {
        headers: { Authorization: authToken },
      })
      .then((res) =>
        dispatch(actionCreators.getSpecificCrudPageSucceeded(res, config))
      )
      .catch((err) =>
        dispatch(actionCreators.getSpecificCrudPageFailed(err.response.data))
      );
  },

  attemptGetSpecificCrudPage: () => ({
    type: actions.ATTEMPT_GET_CRUD_SPECIFIC_PAGE
  }),

  getSpecificCrudPageSucceeded: (response, config) => ({
    type: actions.GET_SPECIFIC_CRUD_PAGE_SUCCEEDED,
    payload: { response, config }
  }),

  getSpecificCrudPageFailed: (errorInfo) => ({
    type: actions.GET_SPECIFIC_CRUD_PAGE_FAILED,
    payload: errorInfo
  })
};

export default function(prevState = defaultState, action) {
  switch(action.type) {
    case actions.SELECT_ENTITY_TYPE:
      return {
        ...prevState,
        selectedEntityType: action.payload
      };

    case actions.DISPLAY_ENTITY_MODAL:
      return {
        ...prevState,
        selectedEntity: action.payload.entity,
        selectedOperation: action.payload.operation
      };

    case actions.HIDE_ENTITY_MODAL:
      return {
        ...prevState,
        selectedEntity: {},
        selectedOperation: ''
      };

    case actions.ATTEMPT_CREATE_ENTITY:
      return {
        ...prevState,
        isCreatingEntity: true,
        formErrors: undefined
      };

    case actions.CREATE_ENTITY_SUCCEEDED:
      return {
          ...prevState,
          isCreatingEntity: false,
          selectedOperation: '',
          selectedEntity: {}
        };

    case actions.CREATE_ENTITY_FAILURE:
      return {
        ...prevState,
        isCreatingEntity: false,
        formErrors: action.payload
      };

    case actions.ATTEMPT_UPDATE_ENTITY:
      return {
        ...prevState,
        isUpdatingEntity: true,
        formErrors: undefined
      };

    case actions.UPDATE_ENTITY_SUCCEEDED: {
      const modifiedEntities = prevState.entities.map((entity) => {
        if(entity._id === action.payload._id) {
          return action.payload;
        } else {
          return entity;
        }
      });

      return {
        ...prevState,
        isUpdatingEntity: false,
        entities: modifiedEntities,
        selectedOperation: '',
        selectedEntity: {}
      };
    }
    case actions.UPDATE_ENTITY_FAILURE:
      return {
        ...prevState,
        isUpdatingEntity: false,
        formErrors: action.payload
      };

    case actions.ATTEMPT_DELETE_ENTITY:
      return {
        ...prevState,
        isTogglingEntity: true,
        toggleErrors: undefined
      };

    case actions.TOGGLE_ENTITY_SUCCEEDED: {
      const modifiedEntities = prevState.entities.map((entity) => {

        if(entity._id === action.payload) {
          return { ...entity, status: !entity.status };
        } else {
          return entity;
        }
      });

      return {
        ...prevState,
        isTogglingEntity: false,
        selectedEntity: {},
        entities: modifiedEntities
      };
    }
    case actions.TOGGLE_ENTITY_FAILED:
      return {
        ...prevState,
        isTogglingEntity: false,
        toggleErrors: action.payload
      };

    case actions.ATTEMPT_SEARCH_ENTITY:
      return {
        ...prevState,
        isSearchingEntity: true,
        searchErrors: undefined
      };

    case actions.SEARCH_ENTITY_SUCCEEDED:
      return {
        ...prevState,
        entities: [action.payload],
        currentPage: 0,
        isSearchingEntity: false,
        selectedColumn: undefined,
        selectedColumnModifier: undefined
      };

    case actions.SEARCH_ENTITY_FAILED:
      return {
        ...prevState,
        isSearchingEntity: false,
        searchErrors: action.payload
      };

    case actions.ATTEMPT_GET_CRUD_SPECIFIC_PAGE:
      return {
        ...prevState,
        isLoadingEntities: true,
        loadingError: undefined
      };

    case actions.GET_SPECIFIC_CRUD_PAGE_SUCCEEDED: {
      const { response, config } = action.payload;
      return {
        ...prevState,
        entities: response.data,
        totalNumberOfEntities: Number(response.headers.total),
        currentPage: config.page,
        pageSize: Number(response.headers['per-page']),
        selectedColumn: config.order_by,
        selectedColumnModifier: config.modifier,
        isLoadingEntities: false,
      };
    }
    case actions.GET_SPECIFIC_CRUD_PAGE_FAILED:
      return {
        ...prevState,
        isLoadingEntities: false,
        loadingError: action.payload
      };

    default: return prevState;
  }
}

export const NAME = 'crud';
