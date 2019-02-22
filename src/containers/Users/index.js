import React, { Component } from 'react';
import {observer} from 'mobx-react'
import {Link, Route} from 'react-router-dom'

import store from '../../stores'

import './style.scss'

import All from './All'
import Add from './Add'
import Edit from './Edit'

class Users extends Component{
  render(){
    return(
      <div className="window">
        <header className="toolbar toolbar-header">
          <h1 className="title">Users settings</h1>

          <div className="toolbar-actions">
            <div className="btn-group">
              <Link to={'/users'} className={`btn btn-default ${this.props.location.pathname === '/users' ? 'active' : ''}`}>
                <span className="icon icon-list"></span>
              </Link>
              <Link to={'/users/add'} className={`btn btn-default ${this.props.location.pathname === '/users/add' ? 'active' : ''}`}>
                <span className="icon icon-list-add"></span>
              </Link>
              <Link to={'/users/edit'} className={`btn btn-default ${this.props.location.pathname === '/users/edit' ? 'active' : ''}`}>
                <span className="icon icon-pencil"></span>
              </Link>
              <button className="btn btn-default">
                <span className="icon icon-ccw"></span>
              </button>
            </div>
          </div>
        </header>

        <Route path={`${this.props.match.path}`} component={All} exact />
        <Route path={`${this.props.match.path}/add`} component={Add} />
        <Route path={`${this.props.match.path}/edit`} component={Edit} />
      </div>
    )
  }
}

export default observer(Users);
