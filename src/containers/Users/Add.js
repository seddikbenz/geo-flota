import React, {Component} from 'react';
import {observer} from 'mobx-react'
import {Link} from 'react-router-dom'

import store from '../../stores'

import './style.scss'

class Add extends Component {
  render() {
    return (
      <div className="window-content">
        Add
      </div>
    )
  }
}

export default observer(Add);
