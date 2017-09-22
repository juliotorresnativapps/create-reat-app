import React, { Component } from 'react';
import './../../../../styles/components/_FilterMenu.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export default class PatientContextTabs extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    reloadFunction: PropTypes.func.isRequired,
    tabs: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);

    this.handleTabClick = this.handleTabClick.bind(this);
    this.state = {
    };
  }

  handleTabClick(route, resource) {
    this.props.reloadFunction(resource);
    this.props.history.push(route);
  }

  renderTabItem(){
    return this.props.tabs.map((item) =>
      (<li data-toggle="tab" className="filter-menu__item" key={`${item.tab_name}`} onClick={() => this.handleTabClick(item.route, item.resource, item.hasSubTable)}>
        <NavLink  to={item.route} className="filter-menu__item-label" key={`${item.tab_name}`}>{item.tab_name}</NavLink>
      </li>)
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar filter-menu">
          <ul className="nav nav-tabs navbar-nav filter-menu-nav">
            {this.renderTabItem()}
          </ul>
        </nav>
      </div>

    );
  }

}

