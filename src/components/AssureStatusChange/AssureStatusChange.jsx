import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import $ from 'jquery';
import sweetalert from 'sweetalert';
import Modal, { ModalDismisser } from '../Modal';
import './_AssureStatusChange.scss';

export const NAME = 'ASSURE_DELETION_MODAL';

const handleAffirmation = (props) => {
  const { changeEntityStatus, resource, selectedEntity, authToken } = props;

  changeEntityStatus(authToken, resource, selectedEntity._id)
    .then(() => {
      $(`#${NAME}`).modal('hide');
      sweetalert('Entity updated successfully.', '','success');
    })
    .catch(() => {
      sweetalert('Oops...', 'Something went wrong with the server.', "error");
    });
};

const AssureDeletion = (props) => {
  const entityName = props.entityName.substring(0, props.entityName.length - 1).split('_').join(' ').toLowerCase();
  const operation = props.selectedEntity.status ? 'disable' : 'reactivate';

  return (
    <Modal name={NAME} className="boxed-view__form--large boxed-view--tall">
      <form className="assure-status">
        <legend hidden>Assure Deletion</legend>
        <p className="assure-status__message">
          Are you sure you want to {operation} this {entityName}?
        </p>
        <div className="text-center">
          <ModalDismisser tag="button" onClick={() => handleAffirmation(props)} className="anlt-btn anlt-btn--small anlt-btn--primary">
            Yes
          </ModalDismisser>
          <ModalDismisser tag="button" onClick={props.onCancel} className="anlt-btn anlt-btn--small anlt-btn--default">
            No
          </ModalDismisser>
        </div>
      </form>
    </Modal>
  );
};

AssureDeletion.propTypes = {
  authToken: PropTypes.string.isRequired,
  entityName: PropTypes.string.isRequired,
  onAffirmation: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  resource: PropTypes.string.isRequired,
  selectedEntity: PropTypes.object.isRequired
};

export default AssureDeletion;
