import React from 'react';
import PropTypes from 'prop-types';

const ModalDismisser = ({ tag, children, ...rest }) => {
  const Tag = tag;

  return (
    <Tag data-dismiss="modal" {...rest}>
      {children}
    </Tag>
  );
};

ModalDismisser.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
    PropTypes.string.isRequired
  ]),
  tag: PropTypes.string.isRequired
};

export default ModalDismisser;
