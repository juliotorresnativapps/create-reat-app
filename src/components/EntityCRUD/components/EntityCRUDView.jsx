// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import EntityCRUDLayout from './EntityCRUDLayout';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { NAME as entityCRUDName } from 'components/EntityCRUD';
// import { NAME as sessionName } from 'features/session';
// import { actionCreators } from '../entity-cruds';
// import { findResource, findHeaders, ENDPOINTS_TYPE } from '../endpoints.js';

// const mapStateToProps = (state) => ({
//   authToken: state[sessionName]['auth_token'],
//   entityCRUD : state[entityCRUDName]
// });

// const actionsToMap = {
//   createEntity: actionCreators.createEntity,
//   updateEntity: actionCreators.updateEntity,
//   changeEntityStatus: actionCreators.changeEntityStatus,
//   displayEntityModal: actionCreators.displayEntityModal,
//   hideEntityModal: actionCreators.hideEntityModal,
//   searchEntity: actionCreators.searchEntity,
//   getEntityCrudPage: actionCreators.getEntityCrudPage
// };

// const mapDispatchToProps = (dispatch) => ({
//   actions: bindActionCreators(actionsToMap, dispatch)
// });

// @connect(mapStateToProps, mapDispatchToProps)
// export default class EntityTableview extends Component {
//   static propTypes = {
//     entityName: PropTypes.string.isRequired
//   };

//   render() {
//     const { entityName } = this.props;

//     const resources = {
//       GET: findResource(entityName, ENDPOINTS_TYPE.GET),
//       CREATE: findResource(entityName, ENDPOINTS_TYPE.CREATE),
//       UPDATE: findResource(entityName, ENDPOINTS_TYPE.UPDATE),
//       CHANGE_STATUS: findResource(entityName, ENDPOINTS_TYPE.DELETE),
//       SEARCH: findResource(entityName, ENDPOINTS_TYPE.SEARCH)
//     };

//     const headers = findHeaders(entityName);

//     return (
//       <EntityCRUDLayout {...this.props} resources={resources} headers={headers}/>
//     );
//   }
// }
