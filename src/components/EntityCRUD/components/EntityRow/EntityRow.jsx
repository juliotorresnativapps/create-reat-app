import React from 'react';
import PropTypes from 'prop-types';
import EntityControls from '../EntityControls';
import { ENTITIES } from '../../definitions';
import { renderUserFields } from '../../../../features/admin/users';
import { renderOrganizationFields } from '../../../../features/admin/organizations';
import { renderLevelFields } from '../../../../features/admin/levels';
import { renderBusinessUnitFields } from '../../../../features/admin/business-units';
import { renderProviders } from '../../../../features/admin/providers';

const EntityRow = (props) => {
  let fields;

  switch (props.entityName) {
    case ENTITIES.USERS:
      fields = renderUserFields(props.entity, props.headers);
      break;

    case ENTITIES.ORGANIZATIONS:
      fields = renderOrganizationFields(props.entity, props.headers);
      break;

    case ENTITIES.LEVELS:
      fields = renderLevelFields(props.entity, props.headers);
      break;

    case ENTITIES.BUSINESS_UNITS:
      fields = renderBusinessUnitFields(props.entity, props.headers);
      break;

    case ENTITIES.PROVIDERS:
      fields = renderProviders(props.entity, props.headers);
      break;
  }

  return (
    <tr className={`${props.entity.status ? 'display-table__row' : 'display-table__inactive-row'}`}>
      {fields}
      <EntityControls
        entity={props.entity}
        entityName={props.entityName}
        displayEntityModal={props.displayEntityModal}
      />
    </tr>
  );
};

EntityRow.propTypes = {
  changeEntityStatus: PropTypes.func.isRequired,
  changeStatusResource: PropTypes.string.isRequired,
  displayEntityModal: PropTypes.func.isRequired,
  entity: PropTypes.object.isRequired,
  entityName: PropTypes.string.isRequired,
  headers: PropTypes.array.isRequired
};

export default EntityRow;
