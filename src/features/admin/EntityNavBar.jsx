import React from 'react';
import PropTypes from 'prop-types';
import SectionTab from './SectionTab';

const EntityNavBar = ({ onTabClicks }) => (
  <ul className="nav nav-tabs tab-container">
    <SectionTab to="/dashboard/admin/users" first
      loadEntities={onTabClicks.loadUsers}>
        Users
    </SectionTab>
    <SectionTab to="/dashboard/admin/organizations"
      loadEntities={onTabClicks.loadOrganizations}>
        Organizations
    </SectionTab>
    <SectionTab to="/dashboard/admin/levels"
      loadEntities={onTabClicks.loadLevels}>
        Levels
    </SectionTab>
    <SectionTab to="/dashboard/admin/business-units"
      loadEntities={onTabClicks.loadBusinessUnits}>
        Business Units
    </SectionTab>
    <SectionTab to="/dashboard/admin/providers" last
      loadEntities={onTabClicks.loadProviders}>
        Providers
    </SectionTab>
  </ul>
);

EntityNavBar.propTypes = {
  onTabClicks: PropTypes.object.isRequired
};

export default EntityNavBar;
