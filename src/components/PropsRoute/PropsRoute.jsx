import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const renderMergedProps = (component, ...rest) =>
  React.createElement(component, Object.assign({}, ...rest));

/*eslint-disable */
const PropsRoute = ({ component, ...rest }) => (
  <Route {...rest} render={(routeProps) =>
    renderMergedProps(component, routeProps, rest)
  } />
);
/*eslint-enable */

PropsRoute.propTypes = {
  component: PropTypes.func.isRequired
};

export default PropsRoute;
