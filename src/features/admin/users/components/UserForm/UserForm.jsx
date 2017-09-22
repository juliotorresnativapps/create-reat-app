import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';
import uuid from 'uuid';
import _ from 'lodash';
import $ from 'jquery';
import sweetalert from 'sweetalert';
import api from '../../../../../app/api';
import { OPERATIONS } from '../../../../../components/EntityCRUD/definitions';
import { EntityForm } from '../../../../../components/EntityCRUD';
import { NAME as ENTITY_FORM_NAME } from '../../../../../components/EntityCRUD/components/EntityForm';
import USER_FORM_ERRORS from '../../errors';
import createIcon from '../../../../../images/ic_create_243px.png';
import { getSelectValues } from '../../utils';

const defaultState = {
  user: {
    _id: undefined,
    credentials: '',
    'first_name': '',
    'last_name': '',
    'email_address': '',
    'telephone_number': '',
    'password': '',
    'password_confirmation': '',
    'super_admin': false,
    'related_to': {},
    permissions: [],

    organization: {},
    'parent_level_id': '',
    status: true,
  },
  unmodifiedUser: {},
  organizations: [],
  levels: [],
  affilliations: [],
  permissions: {},
  selectedOrganization: '-1',
  selectedLevel: '-1',
  selectedAffilliation: '-1',
  isEditing: false,
  selectedPermissions: {
    analytics: [],
    patients: []
  }
};


export default EntityForm({
  all: [
    'first_name',
    'last_name',
    'email_address',
    'related_to'
  ]
})(class UserForm extends Component {
  static propTypes = {
    additionalResources: PropTypes.object.isRequired,
    authToken: PropTypes.string.isRequired,
    createEntity: PropTypes.func.isRequired,
    operation: PropTypes.string.isRequired,
    resources: PropTypes.object.isRequired,
    updateEntity: PropTypes.func.isRequired,
    user: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  componentWillReceiveProps(nextProps) {
    this.loadUser(nextProps.user);
  }

  
  loadUser = autobind((user) => {
    const userExists = Object.keys(user).length;

    if (!userExists) {
      this.setState(() => ({
        ...defaultState,
        validationError: undefined
      }));
    } else {
      this.setState(() => ({
        ...defaultState,
        user,
        isEditing: false,
        validationError: undefined
      }));
    }

    this.getOrganizations();
    this.getPermissions();

    if (this.props.operation === OPERATIONS.READ) {
      this.loadAffilliation();
    }
  });

  
  getOrganizations = autobind(() => {
    const { setOrganizations } = this;
    const { additionalResources, authToken } = this.props;

    api.get(additionalResources.ORGANIZATIONS, { headers: { Authorization: authToken } })
      .then((res) => res.data)
      .then(setOrganizations);
  })

  setOrganizations = autobind((organizations) => {
    const { loadAffilliation } = this;
    const { operation } = this.props;

    this.setState((prevState) => ({
      ...prevState,
      organizations,
      levels: [],
      affilliations: [],
      selectedOrganization: undefined,
      selectedLevel: undefined,
      selectedAffilliation: undefined
    }));

    if (operation === OPERATIONS.READ) {
      loadAffilliation();
    }
  })

  getOrganizationLevels = autobind((evt) => {
    const { authToken } = this.props;
    const id = evt.target.value;

    if (id == -1) {
      this.setState((prevState) => ({ ...prevState, selectedOrganization: undefined }));
    } else {
      const { setLevels } = this;
      const { additionalResources } = this.props;

      api.post(additionalResources.LEVELS, { id }, { headers: { Authorization: authToken } })
        .then((res) => res.data)
        .then((levels) => setLevels(id, levels));
    }
  });

  setLevels = autobind((selectedOrganization, levels) => {
    this.setState((prevState) => ({
      ...prevState,
      levels,
      affilliations: [],
      selectedOrganization,
      selectedLevel: undefined,
      selectedAffilliation: undefined
    }));
  });

  loadAffilliation = autobind(() => {
    const { additionalResources, authToken } = this.props;
    const { user } = this.state;

    const selectedLevel = user.level._id.$oid;
    const selectedAffilliation = user.related_to._id.$oid;
    const selectedOrganization = user.level.organization_id ? user.level.organization_id.$oid : selectedAffilliation;

    Promise.all([
      api.post(additionalResources.LEVELS, { id: selectedOrganization }, { headers: { Authorization: authToken } }),
      api.post(additionalResources.AFFILLIATIONS, { id: selectedLevel }, { headers: { Authorization: authToken } }),
    ]).then(([levelsRes, affilliationsRes]) =>
      this.setState((prevState) => ({
        ...prevState,
        levels: levelsRes.data,
        affilliations: affilliationsRes.data,
        selectedOrganization,
        selectedLevel,
        selectedAffilliation
      }))
    );
  });

  getLevelAffilliations = autobind((evt) => {
    const { authToken } = this.props;
    const id = evt.target.value;

    if (id == -1) {
      this.setState((prevState) => ({ ...prevState, selectedLevel: undefined }));
    } else {
      const { setAffilliations } = this;
      const { additionalResources } = this.props;

      api.post(additionalResources.AFFILLIATIONS, { id }, { headers: { Authorization: authToken } })
        .then((res) => res.data)
        .then((affilliations) => setAffilliations(id, affilliations));
    }
  });

  setAffilliations = autobind((selectedLevel, affilliations) => {
    this.setState((prevState) => ({
      ...prevState,
      affilliations,
      selectedLevel,
      selectedAffilliation: undefined,
    }));
  });

  getPermissions = autobind(() => {
    const { authToken, additionalResources } = this.props;

    api.get(additionalResources.PERMISSIONS, { headers: { Authorization: authToken } })
      .then((res) => res.data)
      .then(this.setPermissions);
  })

  setPermissions = autobind((permissions) => {
    _.uniq(permissions.map((permission) => permission.category))
      .forEach((permission) => {
        this.setState((prevState) => ({
          ...prevState,
          permissions: {
            ...prevState.permissions,
            [permission]: permissions.filter((x) => x.category === permission)
          }
        }));
      });

    if(this.props.operation === OPERATIONS.READ) {
      this.setState((prevState) => ({
        ...prevState,
        user: {
          ...prevState.user,
          permissions: _.flattenDeep(
            Object.keys(this.state.user.permissions)
              .map((key) => this.state.user.permissions[key].map(JSON.parse))
          )
        }
      }));
    }
  });

  makeHandleOnChange = autobind((attribute) => {
    return (isCheckbox = false) => (evt) => {
      const value = isCheckbox ? evt.target.checked : evt.target.value;
      const { user } = this.state;
      const modifiedUser = { ...user, [attribute]: value };

      this.setState((prevState) => ({ ...prevState, user: modifiedUser }));
    };
  });

  handleAffilliationSelect = autobind((evt) => {
    const { user } = this.state;

    const nodeInfo = evt.target.value;
    const modifiedUser = {
      ...user,
      'related_to': nodeInfo
    };

    this.setState((prevState) => ({
      ...prevState,
      user: modifiedUser,
      selectedAffilliation: nodeInfo
    }));
  });

  renderPermissionsSelector = autobind((section) => {
    const permissions = this.state.permissions[section];

    return permissions
      ? (permissions.map((permission) => (
        <option key={uuid()} value={JSON.stringify(permission)}>
          {permission.name}
        </option>
      )))
      : undefined;
  });

  makeHandlePermissionChange = autobind((section) => {
    return (evt) => {
      const { user, selectedPermissions } = this.state;

      const permissions = getSelectValues(evt.target);

      const modifiedSelectedPermissions = {
        ...selectedPermissions,
        [section]: permissions
      };

      //Abstraer
      const modifiedUser = {
        ...user,
        permissions: _.flattenDeep(
          Object.keys(modifiedSelectedPermissions)
            .map((key) => modifiedSelectedPermissions[key].map(JSON.parse))
        )
      };

      this.setState((prevState) => ({
        ...prevState,
        user: modifiedUser,
        selectedPermissions: modifiedSelectedPermissions
      }));
    };
  });


  handleSubmit = autobind((evt) => {
    evt.preventDefault();
    const { doCreateUser, doUpdateUser, setValidationError } = this;
    const { operation } = this.props;
    const { isEditing } = this.state;

    const missingParams = UserForm.required.filter((param) => !this.state.user[param]);
    if (missingParams.length) {
      setValidationError(missingParams[0]);
      return;
    }

    if (operation === OPERATIONS.CREATE) {
      doCreateUser();
    } else if (isEditing) {
      doUpdateUser();
    }

    this.setState((prevState) => ({ ...prevState, validationError: undefined }));
  });

  setValidationError = autobind((param) => {
    this.setState((prevState) => ({
      ...prevState,
      validationError: USER_FORM_ERRORS[param]
    }));
  });

  renderValidationError = autobind(() => {
    return this.state.validationError ? (
      <div className="alert alert-danger text-left">
        <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true" />
        An error ocurred:  {this.state.validationError}
      </div>
    ) : undefined;
  });

  doCreateUser = autobind(() => {
    const { user } = this.state;
    const { createEntity, resources, authToken } = this.props;

    createEntity(authToken, resources.CREATE, { ...user, 'password_confirmation': user.password })
      .then(() => {
        $(`#${ENTITY_FORM_NAME}`).modal('hide');
        sweetalert('Entity created successfully.', '', 'success');
      })
      .catch(() => {
        sweetalert('Oops...', 'Something went wrong with the server.', 'error');
      });
  });

  
  doUpdateUser = autobind(() => {
    const { user } = this.state;
    const { updateEntity, resources, authToken } = this.props;

    updateEntity(authToken, resources.UPDATE, user)
      .then(() => {
        $(`#${ENTITY_FORM_NAME}`).modal('hide');
        sweetalert('Entity updated successfully', '', 'success');
      })
      .catch(() => {
        sweetalert('Oops...', 'Something went wrong with the server.', 'error');
      });
  });

  renderCollection = autobind((name) => {
    return [
      <option key={uuid()} value="-1" label={`Select ${name.substring(0, name.length - 1)}...`} />,

      this.state[name]
        .map((item) => (
          <option
            key={uuid()}
            value={item._id.$oid}>
            {item.name}
          </option>
        ))
    ];
  });

  renderFooter = autobind((canSubmit) => {
    const { renderValidationError, props, state } = this;
    const { operation } = props;
    const { isEditing } = state;

    const submitButtonText = _.startCase(_.camelCase(isEditing ? 'UPDATE' : operation));
    const isCreatingOrUpdating = (operation === OPERATIONS.CREATE) || isEditing;

    return isCreatingOrUpdating ? (
      <div className="boxed-view__submit">
        {renderValidationError()}
        <button type="submit"
          disabled={!canSubmit}
          className="anlt-btn anlt-btn-large anlt-btn--brand">
          {submitButtonText} User
        </button>
      </div>
    ) : undefined;
  });

  toggleEditMode = autobind(() => {
    const { isEditing } = this.state;

    if (isEditing) {
      this.setState((prevState) => ({
        ...prevState,
        isEditing: !prevState.isEditing,
        user: prevState.unmodifiedUser,
        unmodifiedUser: {}
      }));
    } else {
      this.setState((prevState) => ({
        ...prevState,
        isEditing: !prevState.isEditing,
        unmodifiedUser: prevState.user
      }));
    }
    this.getOrganizations();
  });

  renderEditionToggle = autobind(() => {
    const { toggleEditMode } = this;
    const { operation } = this.props;

    return operation === OPERATIONS.READ
      ? <img src={createIcon} alt="update entity" className="display-table__table-icon" onClick={toggleEditMode} />
      : undefined;
  });

  render() {
    const { makeHandleOnChange, renderCollection, getOrganizationLevels, getLevelAffilliations, handleAffilliationSelect, handleSubmit, renderFooter, renderEditionToggle, renderPermissionsSelector, makeHandlePermissionChange } = this;
    const { operation } = this.props;
    const { user, selectedOrganization, selectedLevel, selectedAffilliation, selectedPermissions, isEditing } = this.state;

    const isReading = (operation === OPERATIONS.READ) && !isEditing;
    const hasSelectedOrganization = !!selectedOrganization && selectedOrganization != -1;
    const hasSelectedLevel = !!selectedLevel && selectedLevel != -1;
    const hasSelectedAffilliation = !!selectedAffilliation && selectedAffilliation != -1;
    const canSelectLevel = !isReading && hasSelectedOrganization;
    const canSelectAffilliation = !isReading && hasSelectedLevel;
    const canSubmit = hasSelectedOrganization && hasSelectedLevel && hasSelectedAffilliation;

    const formTitle = `${_.startCase(_.camelCase(isEditing ? 'UPDATE' : operation))} User ${(operation === OPERATIONS.CREATE || isEditing) ? 'Form' : (operation === OPERATIONS.READ ? 'Info' : '')}`;
    const isActiveUserLabel = `Status: ${user.status ? 'Active' : 'Inactive'}`;

    return (
      <form onSubmit={handleSubmit}>
        <h5 className="boxed-view__title">
          {formTitle} {renderEditionToggle()}
        </h5>
        <div className="row boxed-view__row">
          <div className="col-xs-6 boxed-view__field">
            <label htmlFor="user[firstName]" className="sr-only">First Name: </label>
            <input type="text" placeholder="First Name" onChange={makeHandleOnChange('first_name')()} value={user.first_name} disabled={isReading} id="user[firstName]" className="boxed-view__input" />
          </div>
          <div className="col-xs-6 boxed-view__field">
            <label htmlFor="user[lastName]" className="sr-only">Last Name: </label>
            <input type="text" placeholder="Last Name" onChange={makeHandleOnChange('last_name')()} value={user.last_name} disabled={isReading} id="user[lastName]" className="boxed-view__input" />
          </div>
        </div>
        <div className="row boxed-view__row">
          <div className="col-xs-6 boxed-view__field">
            <label htmlFor="user[credential]" className="sr-only">Credential: </label>
            <input type="text" placeholder="Credential" onChange={makeHandleOnChange('credentials')()} value={user.credentials} disabled={isReading} id="user[credential]" className="boxed-view__input" />
          </div>
          <div className="col-xs-6 boxed-view__field">
            <label htmlFor="user[email_address]" className="sr-only">Email Address: </label>
            <input type="email" placeholder="Email Address" onChange={makeHandleOnChange('email_address')()} value={user.email_address} disabled={isReading} id="user[email_address]" className="boxed-view__input" />
          </div>
        </div>
        <div className="row boxed-view__row">
          <div className="col-xs-6 boxed-view__field">
            <label htmlFor="user[telephone_number]" className="sr-only">Telephone Number: </label>
            <input type="tel" placeholder="Telephone Number" onChange={makeHandleOnChange('telephone_number')()} value={user.telephone_number} disabled={isReading} id="user[telephone_number]" className="boxed-view__input" />
          </div>
          <div className="col-xs-6 boxed-view__field">
            <label htmlFor="user[password]" className="sr-only">Password: </label>
            <input type="password" placeholder="Password" onChange={makeHandleOnChange('password')()} value={user.password || ''} disabled={isReading} id="user[password]" className="boxed-view__input" />
          </div>
        </div>
        <div className="row boxed-view__row">
          <div className="col-xs-6 boxed-view__field">
            <label htmlFor="user[status]" className="sr-only">Status: </label>
            <input type="text" value={isActiveUserLabel} disabled placeholder="Status: " id="user[status]" className="boxed-view__input" />
          </div>
          <div className="col-xs-6 boxed-view__field boxed-view__input">
            <div className="boxed-view__checkbox">
              <label htmlFor="user[isSuperAdmin]" className="boxed-view__checkbox-label">Super Admin? </label>
              <input type="checkbox" onChange={makeHandleOnChange('super_admin')(true)} checked={user.super_admin} disabled={isReading} id="user[isSuperAdmin]" className="boxed-view__checkbox" />
            </div>
          </div>
        </div>
        <fieldset>
          <legend className="boxed-view__legend">Affilliations</legend>
          <div className="row boxed-view__row">
            <div className="col-xs-6 boxed-view__field">
              <label htmlFor="user[organization]" className="sr-only">Organization: </label>
              <select disabled={isReading} onChange={getOrganizationLevels} value={selectedOrganization} id="user[organization]" className="boxed-view__input">
                {renderCollection('organizations')}
              </select>
            </div>
            <div className="col-xs-6 boxed-view__field">
              <label htmlFor="user[level]" className="sr-only">Level: </label>
              <select disabled={!canSelectLevel} onChange={getLevelAffilliations} value={selectedLevel} id="user[level]" className="boxed-view__input">
                {renderCollection('levels')}
              </select>
            </div>
          </div>
          <div className="row boxed-view__row">
            <div className="col-xs-6 boxed-view__field">
              <label htmlFor="user[affilliation]" className="sr-only">Affilliation: </label>
              <select disabled={!canSelectAffilliation} onChange={handleAffilliationSelect} value={selectedAffilliation} id="user[affilliation]" className="boxed-view__input">
                {renderCollection('affilliations')}
              </select>
            </div>
          </div>
        </fieldset>
        <div className="row boxed-view__row">
          <fieldset className="col-xs-6 boxed-view__field">
            <legend className="boxed-view__legend">Analytics Permissions</legend>
            <div style={{ 'height': '100px', 'overflowY': 'scroll' }}>
              <select multiple className="boxed-view__input" value={selectedPermissions.analytics} onChange={makeHandlePermissionChange('analytics')}>
                {renderPermissionsSelector('analytics')}
              </select>
            </div>
          </fieldset>
          <fieldset className="col-xs-6 boxed-view__field">
            <legend className="boxed-view__legend">Patient Permissions</legend>
            <div style={{ 'height': '100px', 'overflowY': 'scroll' }}>
              <select multiple className="boxed-view__input" value={selectedPermissions.patients} onChange={makeHandlePermissionChange('patients')}>
                {renderPermissionsSelector('patients')}
              </select>
            </div>
          </fieldset>
        </div>
        {renderFooter(canSubmit)}
      </form>
    );
  }
});