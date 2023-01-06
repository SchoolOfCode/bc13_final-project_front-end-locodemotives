import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home.js'
import Learn from './pages/Learn.js'
import Discuss from './pages/Discuss.js'
import Settings from './pages/Settings.js'
import Login from './pages/Login';
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
          </Routes>
        </div>
    </>
  );
}

export default App;