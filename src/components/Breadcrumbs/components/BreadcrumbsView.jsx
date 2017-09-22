import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../breadcrumbs';
import BreadcrumbList from '../components/BreadcrumbList';

const mapStateToProps = (state) => ({
  nodes: state.nodes
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

class BreadcrumbsView extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired
  };

  render() {
    const { actions } = this.props;

    return (
      <BreadcrumbList changeNode={actions.changeNode}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BreadcrumbsView);
