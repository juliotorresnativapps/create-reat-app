import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './_SideBar.scss';
import logo from '../../../../images/Group 1535.png';

export default class SideBar extends Component {
  static propTypes = {
    admin: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.handleSettingsClick = this.handleSettingsClick.bind(this);
    this.handleAdminClick = this.handleAdminClick.bind(this);
    this.handleLogoCLick = this.handleLogoCLick.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogoCLick() {
    this.props.history.push('/');
  }

  handleSettingsClick() {
    this.props.history.push('/dashboard/settings');
  }

  handleAdminClick() {
    this.props.history.push('/dashboard/admin');
  }

  handleLogout() {
    this.props.logout();
  }

  render() {
    const { handleSettingsClick, handleAdminClick, handleLogout } = this;

    return (
      <nav className="side-bar">
        <div className="side-bar__logo" onClick={this.handleLogoCLick}>
          <img alt="analitico" src={logo}/>
        </div>
        <h2 hidden>SideBar</h2>
        <section className="panel-group" id="side-bar-accordion">
          <h3 hidden>Navigation Menu</h3>
          <li className="panel panel-default borderless">
            <div className="accordion-toggle collapsed side-bar__item analytics" data-toggle="collapse" data-parent="#side-bar-accordion" data-target="#analyticsCollapse">
              <div className="side-bar__item-content">
                <span className="side-bar__item-label">
                  Analytics
                </span>
              </div>
            </div>
            <div id="analyticsCollapse" className="panel-collapse collapse">
              <ul className="side-bar__drop-down" role="tab" >
                <li className="side-bar__drop-down__item-container">
                  <NavLink
                    to="/dashboard/analytics/cost"
                    activeClassName="side-bar__drop-down-label_selected"
                    className="side-bar__drop-down-label">
                    <span className="side-bar__drop-down-label__content">
                      Cost
                    </span>
                  </NavLink>
                </li>
                <li className="side-bar__drop-down__item-container">
                  <NavLink
                    to="/dashboard/analytics/prevalence"
                    activeClassName="side-bar__drop-down-label_selected"
                    className="side-bar__drop-down-label">
                    <span className="side-bar__drop-down-label__content">
                      Prevalence
                    </span>
                  </NavLink>
                </li>
                <li className="side-bar__drop-down__item-container" >
                  <NavLink
                    to="/dashboard/analytics/predictive"
                    activeClassName="side-bar__drop-down-label_selected"
                    className="side-bar__drop-down-label">
                    <span className="side-bar__drop-down-label__content">
                      Predictive
                    </span>
                  </NavLink>
                </li>
                <li className="side-bar__drop-down__item-container" >
                  <NavLink
                    to="/dashboard/analytics/network"
                    activeClassName="side-bar__drop-down-label_selected"
                    className="side-bar__drop-down-label">
                    <span className="side-bar__drop-down-label__content">
                      Network
                    </span>
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          <li className="panel panel-default borderless">
            <div className="accordion-toggle collapsed side-bar__item patients" data-toggle="collapse" data-parent="#side-bar-accordion" data-target="#patientsCollapse">
              <div className="side-bar__item-content">
                <span className="side-bar__item-label">
                  Patients
                </span>
              </div>
            </div>
            <div id="patientsCollapse" className="panel-collapse collapse">
              <ul className="side-bar__drop-down" role="tab" >
                <li className="side-bar__drop-down__item-container">
                  <NavLink
                    activeClassName="side-bar__drop-down-label_selected"
                    className="side-bar__drop-down-label" to="/dashboard/patients/clinical">
                    <span className="side-bar__drop-down-label__content">
                      Clinical
                      </span>
                  </NavLink>
                </li>
                <li className="side-bar__drop-down__item-container">
                  <NavLink
                    activeClassName="side-bar__drop-down-label_selected"
                    className="side-bar__drop-down-label" to="/dashboard/patients/cost">
                    <span className="side-bar__drop-down-label__content">
                      Cost
                        </span>
                  </NavLink>
                </li>
                <li className="side-bar__drop-down__item-container" >
                  <span>
                    <NavLink
                      activeClassName="side-bar__drop-down-label_selected"
                      className="side-bar__drop-down-label" to="/dashboard/patients/prevalence">
                      <span className="side-bar__drop-down-label__content">
                        Prevalence
                        </span>
                    </NavLink>
                  </span>
                </li>
                <li className="side-bar__drop-down__item-container" >
                  <span>
                    <NavLink
                      activeClassName="side-bar__drop-down-label_selected"
                      className="side-bar__drop-down-label" to="/dashboard/patients/predictive">
                      <span className="side-bar__drop-down-label__content">
                        Predictive
                        </span>
                    </NavLink>
                  </span>
                </li>
              </ul>
            </div>
          </li>
          <li className="panel panel-default borderless" onClick={handleSettingsClick} id="js-sidebar-settings">
            <div className="accordion-toggle collapsed side-bar__item settings" data-toggle="collapse" data-parent="#side-bar-accordion" data-target="#settingsCollapse">
              <div className="side-bar__item-content">
                <span className="side-bar__item-label">Settings</span>
              </div>
            </div>
            <div id="settingsCollapse" className="panel-collapse collapse"/>
          </li>
          {
            this.props.admin ?
              <li className="panel panel-default borderless" onClick={handleAdminClick} id="js-sidebar-admin">
                <div className="accordion-toggle collapsed side-bar__item admin" data-toggle="collapse" data-parent="#side-bar-accordion" data-target="#adminCollapse">
                  <div className="side-bar__item-content">
                    <span className="side-bar__item-label">Admin</span>
                  </div>
                </div>
                <div id="adminCollapse" className="panel-collapse collapse"/>
              </li>
              : undefined
          }
          <li className="panel panel-default borderless" onClick={handleLogout} >
            <div className="accordion-toggle collapsed side-bar__item logout" data-toggle="collapse" data-parent="" >
              <div className="side-bar__item-content">
                <span className="side-bar__item-label">Logout</span>
              </div>
            </div>
          </li>
        </section>
      </nav>
    );
  }
}
