import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
  session: state.session
});


class OnlyAuthRoute extends Component {
  static propTypes = {
    component: PropTypes.func,
    render: PropTypes.func,
    session: PropTypes.object.isRequired
  }

  render() {
    const { component: Component, render: renderComponent, ...rest } = this.props;
    const isAuthenticated = !!this.props.session.auth_token;

    return (
      <Route {...rest} render={(props) => {
        if(isAuthenticated) {
          return renderComponent ? renderComponent() : <Component {...props}/>;
        } else {
          return <Redirect to={{ pathname: '/auth', state: { from: props.location }}}/>;
        }
      }}/>
    );
  }
}

export default connect(mapStateToProps)(OnlyAuthRoute);
