import { useState } from 'react';
import './index.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router';
import Catalog from './components/catalog/Catalog';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CreatePost from './create-post/CreatePost';
import PostDetails from './post-details/PostDetails';
import FallingItems from './components/falling-items/FallingItems';

function App() {

  return (
    <>
        <Header/>
    <div className="wrapper">

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/catalog' element={<Catalog/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/create' element={<CreatePost/>}/>
        <Route path='/post/details' element={<PostDetails/>}/>
      </Routes>
      <FallingItems/>
    </div>
    </>
  )
}

export default App
