import React from 'react'
import WaitingSection1 from './sections/WaitingSection1'
import WaitingSection2 from './sections/WaitingSection2'

function GameWaiting ({socket})  {
  return (
    <div>
        <WaitingSection1/>
        <WaitingSection2 socket={socket}/>
    </div>
  )
}

export default GameWaiting