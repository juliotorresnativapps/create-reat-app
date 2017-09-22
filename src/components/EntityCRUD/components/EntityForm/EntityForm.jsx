import React from 'react';
import PropTypes from 'prop-types';
import Modal from '../../../Modal';
import { UserForm } from '../../../../features/admin/users';
import { ADDITIONAL_RESOURCES } from '../../endpoints';
import { ENTITIES } from '../../definitions';

export const NAME = 'ENTITY_FORM';

const EntityForm = (props) => {
  let form;

  switch(props.entityName) {
    case ENTITIES.USERS: {
      const userResources = {
        CREATE: props.resources.CREATE,
        UPDATE: props.resources.UPDATE
      };

      form = (
        <UserForm
          user={props.entity}
          operation={props.operation}
          resources={userResources}
          createEntity={props.createEntity}
          updateEntity={props.updateEntity}
          additionalResources={ADDITIONAL_RESOURCES.USER}
          authToken={props.authToken}
        />
      );
    }
      break;

    case ENTITIES.ORGANIZATIONS:
      break;

    case ENTITIES.LEVELS:
      break;

    case ENTITIES.BUSINESS_UNITS:
      break;

    case ENTITIES.PROVIDERS:
      break;
  }

  return (
    <Modal name={NAME} onClose={props.onClose} className="boxed-view__form--large">
      <h4 className="analitico-logo analitico-logo--alternate h2">Analitico</h4>
      {form}
    </Modal>
  );
};

EntityForm.propTypes = {
  authToken: PropTypes.string.isRequired,
  createEntity: PropTypes.func.isRequired,
  entity: PropTypes.object,
  entityName: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  operation: PropTypes.string.isRequired,
  resources: PropTypes.object.isRequired,
  updateEntity: PropTypes.func.isRequired
};

export default EntityForm;
