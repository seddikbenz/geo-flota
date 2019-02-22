import React, { Component } from 'react';
import {observer} from 'mobx-react'
import store from '../../stores'
import {Link, withRouter} from 'react-router-dom'
import './style.scss'

class Sidebar extends Component{
  render(){
    return(
      <div className="pane pane-sm sidebar">
        <nav className="nav-group">
          <h5 className="nav-group-title">Feutures</h5>
          <Link to={'/'} className={`nav-group-item ${this.props.location.pathname == '/' ? 'active':''}`}>
            <span className="icon icon-home"></span>
            Home
          </Link>
          <Link to={'/map'} className={`nav-group-item ${this.props.location.pathname == '/map' ? 'active':''}`}>
            <span className="icon icon-map"></span>
            Map
          </Link>
          <Link to={'/reports'} className={`nav-group-item ${this.props.location.pathname == '/reports' ? 'active':''}`}>
            <span className="icon icon-docs"></span>
            Reports
          </Link>
        </nav>
        <nav className="nav-group">
          <h5 className="nav-group-title">Settings</h5>
          <Link to={'/companies'} className={`nav-group-item ${this.props.location.pathname == '/companies' || this.props.location.pathname == '/companies/add' || this.props.location.pathname == '/companies/edit' ? 'active':''}`}>
            <span className="icon icon-suitcase"></span>
            Companies
          </Link>
          <Link to={'/users'} className={`nav-group-item ${this.props.location.pathname == '/users' || this.props.location.pathname == '/users/add' || this.props.location.pathname == '/users/edit' ? 'active':''}`}>
            <span className="icon icon-users"></span>
            Users
          </Link>
          <Link to={'/cars'} className={`nav-group-item ${this.props.location.pathname == '/cars' || this.props.location.pathname == '/cars/add' || this.props.location.pathname == '/cars/edit' ? 'active':''}`}>
            <span className="icon icon-gauge"></span>
            Cars
          </Link>
          <Link to={'/devices'} className={`nav-group-item ${this.props.location.pathname == '/devices' || this.props.location.pathname == '/devices/add' || this.props.location.pathname == '/devices/edit' ? 'active':''}`}>
            <span className="icon icon-flash"></span>
            Devices
          </Link>
          <Link to={'/settings'} className={`nav-group-item ${this.props.location.pathname == '/settings' ? 'active':''}`}>
            <span className="icon icon-tools"></span>
            Settings
          </Link>
        </nav>
      </div>
    )
  }
}

export default withRouter(observer(Sidebar));
