import { useState } from 'react';
import './index.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router';
import Catalog from './components/catalog/Catalog';

function App() {

  return (
    <>
        <Header/>
    <div className="wrapper">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
      </Routes>

    </div>
    </>
  )
}

export default App
