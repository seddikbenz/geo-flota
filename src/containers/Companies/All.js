import React, {Component} from 'react';
import {observer} from 'mobx-react'
import {Link} from 'react-router-dom'

import store from '../../stores'

import './style.scss'

import Spinner from '../../components/Spinner'

class All extends Component {
  componentDidMount(){
    store.companyStore.getAll()
  }
  render() {
    if(store.companyStore.loading){
      return (
        <div className="window-content center">
          <Spinner/>
        </div>
      )
    }
    return (
      <div className="window-content">
        message = {store.companyStore.message.body} type {store.companyStore.message.type}
        <br/>
        {store.companyStore.companies.map((company,index)=>(
          <div key={index} > {company.name} </div>
        ))}
      </div>
    )
  }
}

export default observer(All);
