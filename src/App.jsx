import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx'
import NewsItem from './components/NewsItems.jsx'
import News from './components/News.jsx'

import './App.css'

import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
} from 'react-router-dom';

function App() {
 const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='bg-gray-200 dark:bg-gray-200 min-h-screen'>
        <Navbar />

        <Routes>
          <Route path="/" element={<News pageSize={5} category="general" />} />
          <Route path="/entertarment" element={<News pageSize={5} category="entertarment" />} />
          <Route path="/sports" element={<News pageSize={5} category="sports" />} />
          <Route path="/technology" element={<News pageSize={5} category="technology" />} />
          <Route path="/science" element={<News pageSize={5} category="science" />} />
          <Route path="/health" element={<News pageSize={5} category="health" />} />
          <Route path="/business" element={<News pageSize={5} category="business" />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
