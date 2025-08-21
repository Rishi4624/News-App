import React from 'react'

import loading from './Ajax-loader.gif'
function Spinner(){
    return (
      <div className='flex justify-center m-8'>
        <img src={loading} alt="loading" />
      </div>
    )
  
}

export default Spinner


