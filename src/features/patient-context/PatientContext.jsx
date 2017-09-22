import React, { Component } from 'react';
import './../../../styles/classes/panel-container.scss';
import './../../../styles/classes/side-nav-bar.scss';
import './../../../styles/classes/filter-menu.scss';
import './../../../styles/classes/top-nav-bar.scss';
import logo from '../../../images/Group 1535.png';
import analytic from '../../../images/Group 13192ss.png';
import UsersPanelView from "../Users/components/UsersPanelView";

export default class PatientContext extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }
  renderHeaders() {
  }

  renderItems() {
  }

  render() {
    return (
      <div className="container-fluid" >
        <div className="row">
          <div className="col-xs-3 side-nav-bar">
            <div className="side-nav-bar__logo">
              <img alt="view" src={logo} />
            </div>
            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
              <div className="">
                <div className="side-nav-bar__item_selected" role="tab" id="headingOne">
                  <div className="side-nav-bar__item-inner-container">
                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <img className="side-nav-bar__item-label_selected" alt="view" src={analytic} />
                      <i className="side-nav-bar__item-label_selected">Analytics  </i>
                    </a>
                  </div>
                </div>
                <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                  <div className="side-nav-bar__drop-down-segment" role="tab" id="headingOne">
                    <div className="">
                      <div className="side-nav-bar__drop-down-item-container_selected">
                        <i className="side-nav-bar__drop-down-label_selected">Analytics  </i>
                        <hr className="side-nav-bar__drop-down-divider_selected" />
                      </div>
                      <div className="side-nav-bar__drop-down-item-container">
                        <i className="side-nav-bar__drop-down-label">Analytics  </i>
                        <hr className="side-nav-bar__drop-down-divider" />
                      </div>
                      <div className="side-nav-bar__drop-down-item-container" >
                        <i className="side-nav-bar__drop-down-label">Analytics  </i>
                        <hr className="side-nav-bar__drop-down-divider" />
                      </div>
                      <div className="side-nav-bar__drop-down-item-container" >
                        <i className="side-nav-bar__drop-down-label">Analytics  </i>
                        <hr className="side-nav-bar__drop-down-divider" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-xs-9 outside-container">
            <div className="top-nav-bar">

            </div>
            <div>
              <nav className="navbar filter-menu">
                <ul className="nav navbar-nav">
                  <li className="dropdown filter-menu__item">
                    <a className="dropdown-toggle filter-menu__item-label" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" href="#">Link <span className="glyphicon glyphicon-menu-down filter-menu__item-arrow" />
                    </a>
                    <ul className="dropdown-menu filter-menu__item-drop-down">
                      <li><a className="filter-menu__item-drop-down-item_selected" href="#">Action</a></li>
                      <li role="separator" className="divider filter-menu__item-drop-down-divider"></li>
                      <li><a className="filter-menu__item-drop-down-item_selected" href="#">Action</a></li>
                      <li role="separator" className="divider filter-menu__item-drop-down-divider"></li>
                      <li><a className="filter-menu__item-drop-down-item_selected-last" href="#">Action</a></li>
                    </ul>
                  </li>
                  <li className="filter-menu__item_selected">
                    <a className="filter-menu__item-label_selected" href="#">Link <span className="glyphicon glyphicon-menu-down filter-menu__item-arrow_selected" />
                    </a>
                  </li>
                  <li className="filter-menu__item">
                    <a className="filter-menu__item-label" href="#">Link <span className="glyphicon glyphicon-menu-down filter-menu__item-arrow" />
                    </a>
                  </li>
                  <li className="filter-menu__item">
                    <a className="filter-menu__item-label" href="#">Link <span className="glyphicon glyphicon-menu-down filter-menu__item-arrow" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="panel-container">
              <ul className="nav nav-tabs tab-container">
                <li role="presentation" className="tab-container__tab-item_first" ><a className="tab-container__tab-item-label" href="#">Home</a></li>
                <li role="presentation" className="tab-container__tab-item" ><a className="tab-container__tab-item-label_active" href="#">Home</a></li>
                <li role="presentation" className="tab-container__tab-item_last" ><a className="tab-container__tab-item-label" href="#">Home</a></li>
              </ul>
              <div className="panel panel-default panel-box_tabbed ">
                <div className="panel-body">
                  <UsersPanelView />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
