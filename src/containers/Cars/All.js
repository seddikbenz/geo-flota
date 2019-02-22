import React, {Component} from 'react';
import {observer} from 'mobx-react'
import {Link} from 'react-router-dom'

import store from '../../stores'

import './style.scss'

class All extends Component {
  render() {
    return (
      <div className="window-content">
        All
      </div>
    )
  }
}

export default observer(All);
