import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import Input from './components/input';
import React from 'react'

const App = () => {
  return (
<body>
  <div className='container'>
    <Header />
    <Input />
  </div>    
</body>
  )
}




export default App;
