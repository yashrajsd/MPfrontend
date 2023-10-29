
import './App.css';
import {Routes,Route} from 'react-router'
import LandingPage from './routes/landing page/LandingPage';
import io from 'socket.io-client';
import SearchPage from './routes/Game Search/SearchPage';
import Error404 from './routes/Error 404/Error404';
import Game from './routes/Game/Game';
import { useState } from 'react';


const socket = io.connect('http://localhost:3001')

function App() {
  const [finding,setFinding] = useState(false)
  return (
    <div className="App">
      <Routes>
        <Route element={<LandingPage socket={socket} setFinding={setFinding}/>} path='/' />
        {finding && (<Route element={<SearchPage socket={socket} setFinding={setFinding}/>} path='/finding'/>)}
        <Route element={<Error404/>}  path='/*'/>
        <Route element={<Game socket={socket}/>} path='/game/:roomID'/>
      </Routes>
    </div>
  );
}

export default App;
