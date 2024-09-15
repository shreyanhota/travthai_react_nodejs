import React from 'react'
import './app.css'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Main from './Components/Main/Main'
import Navbar from './Components/Navbar/Navbar'
import HomePage from './pages/HomePage'
import AIPage from './pages/AIPage'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

const App = () => {
  return (
    <>
	
	<div className="App">
	<Navbar />  
	<Routes>
	  <Route path="/"element={<HomePage />} />
	  <Route path="/about" element={<AIPage />} />
	</Routes>
      
	
    <Home/>
    <Main/>
    <Footer/>
	</div>
    </>
  )
}

export default App