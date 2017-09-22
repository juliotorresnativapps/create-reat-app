import React from 'react';
import PropTypes from 'prop-types';
import SideBar from '../SideBar';
import DashboardContent from '../DashboardContent';
import './_DashboardLayout.scss';

const DashboardLayout = ({ actions, session, history }) => (
  <main>
    <SideBar admin={session.user.super_admin} history={history} logout={actions.logout} />
    <div className="outside-container">
      <DashboardContent history={history} />
    </div>
  </main>
);

DashboardLayout.propTypes = {
  actions: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired
};

export default DashboardLayout;
