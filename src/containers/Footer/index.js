import React, { Component } from 'react';
import {observer} from 'mobx-react'
import store from '../../stores'
import {Link} from 'react-router-dom'
import './style.scss'

class Header extends Component{
  render(){
    return(
      <footer className="toolbar toolbar-footer">

      </footer>
    )
  }
}

export default observer(Header);
