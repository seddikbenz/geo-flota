import React from 'react'
import './style.scss'

export default class Spinner extends React.Component {
  render() {
    return (
      <div class="lds-facebook"><div></div><div></div><div></div></div>
    )
  }
}