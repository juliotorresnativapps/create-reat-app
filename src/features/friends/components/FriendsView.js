import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators as friendsActions, selector } from '../';
import FriendsLayout from './FriendsLayout';


export default connect(selector, (dispatch) => ({
  actions: bindActionCreators(friendsActions, dispatch)
})) (class FriendsView extends Component {
  render() {
    return (
      <div>
        <FriendsLayout {...this.props} />
      </div>
    );
  }
});