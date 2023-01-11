import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home.js'
import Learn from './pages/Learn.js'
import Discuss from './pages/Discuss.js'
import Settings from './pages/Settings.js'
import Login from './pages/Login';
import CreateResponse from './pages/CreateResponse';
import CreatePost from './pages/CreatePost';
import CreateResource from './pages/CreateResource';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import PrivateRoute from './PrivateRoute';

function App() {

  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
    navigate('/home')
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className='App'>
      <Navbar isAuthenticated={isAuthenticated} login={login} logout={logout}/>
        <Routes>
          <Route path='/' element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<Login login={login} logout={logout}/>} />
          <Route path='/home' element={
            <PrivateRoute 
              redirectTo="/login" 
              component={<Home/>} 
              isAuthenticated={isAuthenticated}
            />
          }/>
          <Route path='/learn' element={
            <PrivateRoute 
              redirectTo="/login" 
              component={<Learn/>} 
              isAuthenticated={isAuthenticated}
            />
          }/>
          <Route path='/discuss' element={
            <PrivateRoute 
              redirectTo="/login" 
              component={<Discuss/>} 
              isAuthenticated={isAuthenticated}
            />
          }/>
          <Route path='/settings' element={
            <PrivateRoute 
              redirectTo="/login" 
              component={<Settings/>} 
              isAuthenticated={isAuthenticated}
            />
          }/>
          <Route path='/new_response' element={
            <PrivateRoute 
              redirectTo="/login" 
              component={<CreateResponse/>} 
              isAuthenticated={isAuthenticated}
            />
          }/>
          <Route path='/new_post' element={
            <PrivateRoute 
              redirectTo="/login" 
              component={<CreatePost/>} 
              isAuthenticated={isAuthenticated}
            />
          }/>
          <Route path='/new_resource' element={
            <PrivateRoute 
              redirectTo="/login" 
              component={<CreateResource/>} 
              isAuthenticated={isAuthenticated}
            />
          }/>
        </Routes>
    </div>
  );
}

export default App;
