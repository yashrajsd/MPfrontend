import React, { useEffect } from 'react'
import { useNavigate,useParams } from 'react-router';
import Fade from 'react-reveal'
const BoldFont = {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: '600', // bold (600) weight
  };

const Announcement = ({socket}) => {
    const navigate = useNavigate()
    const {roomID} = useParams()
      useEffect(()=>{
          socket.on('nextRound',()=>{
            navigate(`/game/${roomID}`)
          })
      },[socket])
  return (
    <Fade bottom>
        <div className='bg-[#FFF8C9] w-[100vw] h-[100vh] flex justify-center items-center flex-col' style={{...BoldFont}}>
        <h1>
            Round 1
        </h1>
        </div>
    </Fade>
  )
}

export default Announcement
