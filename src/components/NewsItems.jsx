import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import Navbar from './Navbar.jsx'

function NewsItems(props) {
  

    let { title, description, imageUrl, newsUrl } = props;

    return (
      <div>
        <div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-50 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <a href={newsUrl}>
              <img className="rounded-t-lg" src={imageUrl} alt="" />
            </a>
            <div className="p-5">
              <a href={newsUrl}>
                <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-700 ">{title}</h5>
              </a>
              <h5 className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</h5>
              <a href={newsUrl} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <h6 className='text-white'>Read more</h6>
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>

              </a>
            </div>
          </div>


        </div>
      </div>
    )
  
}

export default NewsItems
