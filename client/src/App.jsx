import { useMemo, useState } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Route, Routes, useLocation } from 'react-router';
import Catalog from './components/catalog/Catalog';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CreatePost from './components/create-post/CreatePost';
import FallingItems from './components/falling-items/FallingItems';
import { UserContext } from './contexts/UserContext';
import Logout from './components/logout/Logout';
import PostDetails from './components/post-details/PostDetails';
import EditAd from './components/edit-ad/EditAd';
import Footer from './components/footer/Footer';
import usePersistedState from './components/hooks/usePersistedState';
import ProfileManage from './components/profile-manage/ProfileManage';

function App() {

  const [authData, setAuthData] = usePersistedState({});

  const userLoginHandler = (resultData) => {
    setAuthData(resultData)
  }

  const userLogoutHandler = () => {
    setAuthData({})
  }

  const contextValue = useMemo(() => {
    return {
      ...authData,
      userLoginHandler,
      userLogoutHandler,
    };
  }, [authData]);

    // if(location.pathname == "/catalog"){
    //     document.body.style.overflowY = 'scroll';
    // } else {
    //     document.body.style.overflowY = 'hidden';
    // }

  return (
    <>
    <UserContext.Provider  value={contextValue}>
        <Header/>
        <div className="wrapper">

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/catalog' element={<Catalog/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/logout' element={<Logout/>}/>
            <Route path='/create' element={<CreatePost/>}/>
            <Route path='/profile' element={<ProfileManage/>}/>
            <Route path='/ads/:idAd/details' element={<PostDetails/>}/>
            <Route path='/ads/:idAd/edit' element={<EditAd/>}/>
          </Routes>
          <FallingItems/>
        </div>
    </UserContext.Provider>
    </>
  )
}

export default App
