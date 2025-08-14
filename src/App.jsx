import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import NewsItem from './components/NewsItems.jsx'
import News from './components/News.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className='bg-gray-200 dark:bg-gray-200 min-h-screen'>
      <Navbar />
      
      <News pageSize='5'/>  
     
      {/* <Todo></Todo> */}
    </div>
    
  )
}

export default App
