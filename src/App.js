
import './App.css';
import {Routes,Route} from 'react-router'
import LandingPage from './routes/landing page/LandingPage';
import io from 'socket.io-client';
import SearchPage from './routes/Game Search/SearchPage';
import Error404 from './routes/Error 404/Error404';
import Game from './routes/Game/Game';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Top5 from './components/Top5';
import Auth from './pages/Auth';
import Verify from './pages/Verify';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import OpenRoute from './components/Auth/OpenRoute'
import PrivateRoute from './components/Auth/PrivateRoute'

const socket = io.connect('http://localhost:3001')

function App() {
  const [finding,setFinding] = useState(false)
  console.log(socket, 'sokkkkk');
  return (
    <div className="App">
            <Routes>
        <Route element={<LandingPage socket={socket} setFinding={setFinding} />} path='/' />
        {finding && (<Route element={<SearchPage socket={socket} setFinding={setFinding} />} path='/finding' />)}
        <Route path="/top5" element={<Top5 />} />
        <Route
          path="/auth"
          element={
            <OpenRoute>
              <Auth />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <Verify />
            </OpenRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/game/:roomID"
          element={
            <PrivateRoute>
              <Game socket={socket}/>
            </PrivateRoute>
          }
        />
        <Route element={<Error404 />} path='/*' />

      </Routes>
    </div>
  );
}

export default App;
