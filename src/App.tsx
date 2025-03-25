import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/mainPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PageResult from './pages/pageResult'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/result" element={<PageResult/>}/>
      </Routes>
  </Router>
  )
}

export default App
