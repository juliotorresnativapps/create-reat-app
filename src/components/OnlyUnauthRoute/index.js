import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
  session: state.session
});

class OnlyUnauthRoute extends Component {
  static propTypes = {
    component: PropTypes.func,
    render: PropTypes.func,
    session: PropTypes.object.isRequired
  }

  render() {
    const { component: Component, render: renderComponent, ...rest } = this.props;
    const isUnauthenticated = !!this.props.session.auth_token;

    return (
      <Route {...rest} render={(props) => {
        if(!isUnauthenticated) {
          return renderComponent ? renderComponent() : <Component {...props}/>;
        } else {
          return <Redirect to={{ pathname: '/dashboard', state: { from: props.location }}}/>;
        }
      }}/>
    );
  }
}

export default connect(mapStateToProps)(OnlyUnauthRoute);

