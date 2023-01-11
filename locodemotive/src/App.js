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
// import env from 'react-dotenv';

function App() {

  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  async function getUser(email, password) {
    let userFetch = await fetch(`${process.env.REACT_APP_URL}/user/?email=${email}`);
    let userData = await userFetch.json();
    if (email === userData?.payload?.email && userData.payload.email.length > 0) {
      if (password === userData.payload.password && userData.payload.password.length > 0) {
        login();
        setUser(userData.payload); 
      } else {
        setUser({});
        return "Incorrect Password!"
      }
    } else {
      setUser({});
      return "Incorrect Email!"
    }
  }

  const login = () => {
    setIsAuthenticated(true);
    navigate('/home')
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className='App'>
      <Navbar isAuthenticated={isAuthenticated} login={getUser} logout={logout}/>
        <Routes>
          <Route path='/' element={<Navigate to='/login'/>}/>
          <Route path='/login' element={<Login login={getUser} logout={logout}/>} />
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
