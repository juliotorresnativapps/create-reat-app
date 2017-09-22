import React from 'react';
import PropTypes from 'prop-types';
import { OPERATIONS } from '../../definitions';
import { ModalToggler } from '../../../Modal';
import { NAME as ENTITY_FORM_NAME } from '../EntityForm';
import { NAME as ASSURE_STATUS_CHANGE_MODAL_NAME } from '../../../AssureStatusChange/AssureStatusChange';
import { ENTITIES } from '../../definitions';
import viewIcon from '../../../../images/ic_visibility_243px.png';
import lockIcon from '../../../../images/lock@3x.png';
import unlockIcon from '../../../../images/unlock@3x.png';

const EntityControls = ({ entity, entityName, displayEntityModal }) => (
  <td>
    {
      entity.status ?
        (
          <div className="text-center">
            <ModalToggler tag="span" modal={ENTITY_FORM_NAME} onClick={() => displayEntityModal(OPERATIONS.READ, entity)}>
              <img src={viewIcon} alt="read entity" className="display-table__table-icon"/>
            </ModalToggler>
            {
              entityName !== ENTITIES.LEVELS
              ? <ModalToggler tag="span" modal={ASSURE_STATUS_CHANGE_MODAL_NAME} onClick={() => displayEntityModal(OPERATIONS.DELETE, entity)}>
                  <img src={lockIcon} alt="disable entity" className="display-table__table-icon"/>
                </ModalToggler>
              : undefined
            }
          </div>
        ) : (
          entityName !== ENTITIES.LEVELS
          ? <div className="text-center">
              <ModalToggler tag="span" modal={ASSURE_STATUS_CHANGE_MODAL_NAME} onClick={() => displayEntityModal(OPERATIONS.DELETE, entity)}>
                <img src={unlockIcon} alt="enable entity" className="display-table__table-icon"/>
              </ModalToggler>
            </div>
          : undefined
        )
    }
  </td>
);

EntityControls.propTypes = {
  displayEntityModal: PropTypes.func.isRequired,
  entity: PropTypes.object.isRequired,
  entityName: PropTypes.string.isRequired
};

export default EntityControls;
