import React from 'react';
import PropTypes from 'prop-types';

const Breadcrumb = ({ _id, nodeName, changeNode }) => (
  <li onClick={() => changeNode(_id)}>
    <a>{nodeName}</a>
  </li>
);

Breadcrumb.propTypes = {
  _id: PropTypes.string.isRequired,
  changeNode: PropTypes.func.isRequired,
  nodeName: PropTypes.string.isRequired
};

export default Breadcrumb;
