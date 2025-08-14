import React, { Component } from 'react'

import loading from './Ajax-loader.gif'
export default class Spinner extends Component {
  

  render() {
    return (
      <div className='flex justify-center m-8'>
        <img src={loading} alt="loading" />
      </div>
    )
  }
}


