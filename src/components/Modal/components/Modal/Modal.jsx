import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Modal = ({ children, name, onClose, className }) => {
  const header = onClose ? (
    <button type="button" data-dismiss="modal" onClick={_.debounce(onClose, 500)} aria-label="Close" className="boxed-view__close">
      <span aria-hidden="true">&times;</span>
    </button>
  ) : undefined;

  return (
    <div className="modal fade" id={name} tabIndex="-1" role="dialog" aria-labelledby={name} data-keyboard="false" data-backdrop="static">
      <div className={`boxed-view__form ${className ? className : ''}`} role="document">
      {header}
      {children}
      </div>
    </div>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
    PropTypes.string.isRequired
  ]),
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default Modal;
