import React from 'react'
import Canvas from '../../../components/Canvas'

const MainGame = ({socket}) => {
  return (
    <div>
      <Canvas socket={socket}/>
    </div>
  )
}

export default MainGame