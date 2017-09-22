import React from 'react';
import PropTypes from 'prop-types';
import Breadcrumb from '../Breadcrumb';
import uuid from 'uuid';

const renderBreadcrumbs = ({ nodes, changeNode }) =>
  nodes.map((node) =>
    <Breadcrumb key={uuid()} changeNode={changeNode} {...node} />
  );

const BreadcrumbList = (props) => (
  <div>
    <ol className="breadcrumb">
      {renderBreadcrumbs(props)}
    </ol>
  </div>
);

BreadcrumbList.propTypes = {
  changeNode: PropTypes.func.isRequired,
  nodes: PropTypes.array.isRequired
};

export default BreadcrumbList;
