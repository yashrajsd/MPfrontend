import React, { useEffect, useState } from 'react'
import Canvas from '../../../components/Canvas';
import { useNavigate, useParams } from 'react-router';
import Fade from 'react-reveal'
const BoldFont = {
  fontFamily: 'Poppins, sans-serif',
  fontWeight: '600', // bold (600) weight
};

const extraBolt = {
fontFamily: 'Poppins, sans-serif',
fontWeight: '800'
}

const MainGame = ({socket}) => {
  const navigate = useNavigate()
  const {roomID} = useParams()
  const [time,setTime] = useState(null)

  useEffect(()=>{
    socket.on('roundCDT',(remainingTime)=>{
      setTime(remainingTime)
    })

    socket.on('roundEnded',()=>{
      navigate(`/game/${roomID}/round`)
    })

  },[socket])



  return (
    <div>
      <div className='bg-[#BEADFA] text-white flex justify-between items-center px-[2rem] py-[1rem] relative z-[9999]' style={{...BoldFont}}>
        <span>Round 1 TIME: {time}</span>
        <span>
          <h1>Is the apple and banana is the what is the?</h1>
        </span>
        <span>
          Your Score: 353
        </span>
      </div>
      <Canvas socket={socket}/>
    </div>
  )
}

export default MainGame
