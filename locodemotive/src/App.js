import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home'
import Learn from './pages/Learn'
import Discuss from './pages/Discuss'
import Settings from './pages/Settings'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar>
        <div className='App'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/learn" element={<Learn/>} />
            <Route path="/discuss" element={<Discuss/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </div>
      </Navbar>
    </>
  );
}

export default App;
