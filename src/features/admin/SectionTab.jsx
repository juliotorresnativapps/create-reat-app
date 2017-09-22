import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const SectionTab = (props) => (
  <li role="presentation"
    onClick={props.loadEntities}
    className={
      props.first
      ? "tab-container__tab-item_first" :
        (
          props.last
          ? "tab-container__tab-item_last"
          : "tab-container__tab-item"
        )
    }>
      <NavLink
        className="tab-container__tab-item-label"
        activeClassName="tab-container__tab-item-label_active"
        to={props.to}>
          {props.children}
      </NavLink>
  </li>
);

SectionTab.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.object.isRequired,
    PropTypes.string.isRequired
  ]),
  className: PropTypes.string,
  first: PropTypes.bool,
  last: PropTypes.bool,
  loadEntities: PropTypes.func,
  to: PropTypes.string.isRequired
};

export default SectionTab;
