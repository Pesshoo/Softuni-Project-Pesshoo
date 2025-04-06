import { useMemo, useState } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Route, Routes } from 'react-router';
import Catalog from './components/catalog/Catalog';
import Login from './components/login/Login';
import Register from './components/register/Register';
import CreatePost from './create-post/CreatePost';
import PostDetails from './post-details/PostDetails';
import FallingItems from './components/falling-items/FallingItems';
import { UserContext } from './contexts/UserContext';
import Logout from './components/logout/Logout';

function App() {

  const [authData, setAuthData] = useState({});

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
            <Route path='/post/details' element={<PostDetails/>}/>
          </Routes>
          <FallingItems/>
        </div>
    </UserContext.Provider>
    </>
  )
}

export default App
