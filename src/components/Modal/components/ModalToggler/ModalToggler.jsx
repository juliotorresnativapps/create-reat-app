import React from 'react';
import PropTypes from 'prop-types';

const ModalToggler = ({ modal, tag, children, ...rest }) => {
  const Tag = tag;

  return (
    <Tag data-toggle="modal" data-target={`#${modal}`} {...rest}>
      {children}
    </Tag>
  );
};

ModalToggler.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
    PropTypes.string.isRequired
  ]),
  className: PropTypes.string,
  modal: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  tag: PropTypes.string.isRequired
};

export default ModalToggler;
