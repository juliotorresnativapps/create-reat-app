import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';
import PropsRoute from '../../components/PropsRoute';
import EntityCRUDLayout from '../../components/EntityCRUD/components/EntityCRUDLayout';
import EntityNavBar from './EntityNavBar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../components/EntityCRUD/entity-cruds';
import { NAME as entityCRUDName } from '../../components/EntityCRUD';
import { NAME as sessionName } from '../../features/session';
import { ENTITIES } from '../../components/EntityCRUD/definitions';
import { getTableHeaders, getTableFields } from '../../components/EntityCRUD/utils';
import { findResources, ENDPOINTS, ENDPOINTS_TYPE } from '../../components/EntityCRUD/endpoints';

const mapStateToProps = (state) => ({
  authToken: state[sessionName]['auth_token'],
  entityCRUD: state[entityCRUDName]
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    createEntity: actionCreators.createEntity,
    updateEntity: actionCreators.updateEntity,
    changeEntityStatus: actionCreators.changeEntityStatus,
    displayEntityModal: actionCreators.displayEntityModal,
    hideEntityModal: actionCreators.hideEntityModal,
    searchEntity: actionCreators.searchEntity,
    getEntityCrudPage: actionCreators.getEntityCrudPage,
    changeEntityTab: actionCreators.changeEntityTab
  }, dispatch)
});


class AdminSection extends Component {
  static propTypes = {
    actions: PropTypes.object,
    authToken: PropTypes.string,
    entityCRUD: PropTypes.object
  }

  constructor(props) {
    super(props);

    const { authToken, actions } = props;

    this.onTabClicks = {
      loadUsers: () => actions.changeEntityTab(authToken, ENTITIES.USERS, ENDPOINTS.USERS[ENDPOINTS_TYPE.GET]),
      loadOrganizations: () => actions.changeEntityTab(authToken, ENTITIES.ORGANIZATIONS, ENDPOINTS.ORGANIZATIONS[ENDPOINTS_TYPE.GET]),
      loadLevels: () => actions.changeEntityTab(authToken, ENTITIES.LEVELS, ENDPOINTS.LEVELS[ENDPOINTS_TYPE.GET]),
      loadBusinessUnits: () => actions.changeEntityTab(authToken, ENTITIES.BUSINESS_UNITS, ENDPOINTS.BUSINESS_UNITS[ENDPOINTS_TYPE.GET]),
      loadProviders: () => actions.changeEntityTab(authToken, ENTITIES.PROVIDERS, ENDPOINTS.PROVIDERS[ENDPOINTS_TYPE.GET])
    };
  }

  render() {
    const { onTabClicks } = this;
    const { entityCRUD } = this.props;

    const routeProps = {
      component: EntityCRUDLayout,
      resources: findResources(entityCRUD.selectedEntityType),
      headers: getTableHeaders(entityCRUD.selectedEntityType),
      fields: getTableFields(entityCRUD.selectedEntityType),
      ...this.props
    };

    return (
      <section>
        <EntityNavBar onTabClicks={onTabClicks}/>
        <Switch>
          <PropsRoute path="/dashboard/admin/users" entityName={ENTITIES.USERS} {...routeProps}/>
          <PropsRoute path="/dashboard/admin/organizations" entityName={ENTITIES.ORGANIZATIONS} {...routeProps}/>
          <PropsRoute path="/dashboard/admin/levels" entityName={ENTITIES.LEVELS} {...routeProps}/>
          <PropsRoute path="/dashboard/admin/business-units" entityName={ENTITIES.BUSINESS_UNITS} {...routeProps}/>
          <PropsRoute path="/dashboard/admin/providers" entityName={ENTITIES.PROVIDERS} {...routeProps} />
          <PropsRoute entityName={ENTITIES.USERS} {...routeProps}/>
        </Switch>
      </section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminSection);
