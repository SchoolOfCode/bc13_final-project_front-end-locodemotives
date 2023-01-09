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
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar/>
        <div className='App'>
          <Routes>
            <Route path='/login' element={<Login/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/learn" element={<Learn/>} />
            <Route path="/discuss" element={<Discuss/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/new_response" element={<CreateResponse/>} />
            <Route path="/new_post" element={<CreatePost/>} />
            <Route path="/new_resource" element={<CreateResource/>} />
          </Routes>
        </div>
    </>
  );
}

export default App;
