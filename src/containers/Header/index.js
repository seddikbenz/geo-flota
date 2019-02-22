import React, { Component } from 'react';
import {observer} from 'mobx-react'
import store from '../../stores'
import {Link} from 'react-router-dom'
import './style.scss'

class Header extends Component{
  logout(){
    store.authStore.logout()
    // window.location.reload() // TODO : make window reload for new Token in Production
  }
  render(){
    return(
      <header className="toolbar toolbar-header">
        <h1 className="title">Geo-Flota {store.commonStore.version}</h1>
        <div className="toolbar-actions">
          <button onClick={this.logout} className="btn btn-default pull-right">
            <span className="icon icon-logout"></span>
            &nbsp;Logout
          </button>
          <Link to={'/notifications'} className="btn btn-default pull-right">
            <span className="icon icon-bell"></span>
            &nbsp;Notifications
          </Link>
          <Link to={'/me'} className="btn btn-default">
            <span className="icon icon-user"></span>
            &nbsp;&nbsp;{store.userStore.currentUser.username}
            </Link>
        </div>
      </header>
    )
  }
}

export default observer(Header);
