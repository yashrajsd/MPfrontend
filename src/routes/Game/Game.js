import React, { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
//import Waiting from './Waiting';
import MainGame from './components/MainGame';
import GameWaiting from './components/GameWaiting';

const Game = ({socket}) => {
    const { roomID } = useParams();
    const [room, setRoom] = useState({});
    const [start,setStart] = useState(false)
    useEffect(() => {
      fetch(`http://localhost:3001/api/room/${roomID}/yashrajsd`, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setRoom(data.room);
        });
    }, [start]);
  
    useEffect(()=>{
      socket.on('startGame',()=>{
        console.log('Game Started')
        setStart(true)
      })
      return()=>{
        socket.off('startGame')
      }
    },[socket])
  
    if(room){
      console.log(room.waiting)
    }
    return (
      <div>
        {/* <h1 className='text-white'>{room && room.name}</h1> */}
        {room && (room.waiting ? <GameWaiting socket={socket} room={room}/> : <MainGame socket={socket} />)}
      </div>
    );
}

export default Game