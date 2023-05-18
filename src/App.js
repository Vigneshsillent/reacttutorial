import React from 'react'
import InputField from './components/InputField'
import Button from './components/Button'
import { Route, Routes } from 'react-router-dom'
import Home from './ecom/Home'
import Homeindex from './userLogin/Homeindex'

const App = () => {
  return (
    <div> 
      {/* <Routes >
        <Route path="/" element={<Home />} >
          <Route index element={<HomeContent />} />
          <Route path="/project" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />          
        </Route>
        <Route path='/login' element={<LoginForm />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes> */} 
      <Home /> 
    </div>
  )
}

export default App;