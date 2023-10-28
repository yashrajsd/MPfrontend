import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import './WaitingSection2.scss';

const WaitingSection2 = ({ socket }) => {
  const { roomID } = useParams();

  const handleStartGame = async () => {
    try {
      await axios.post(`http://localhost:3001/api/room/${roomID}/start-game`)
      .then(() => {
        console.log('game started bro');
        socket.emit('gameStarted', roomID);
      });
    } catch (error) {
      console.error('Error starting the game:', error);
    }
  };

  return (
    <div className='flex justify-center items-center h-[90vh] relative'>
      <div className='animationRing w-[50vh] h-[50vh] rounded-full border-solid border-[#1A1A1A] border-[40px]'></div>
      <div className='absolute'>
        <div>
        </div>
        <div>
          <button
            className="bg-white hover:bg-gray-400 text-[1.5rem] text-black font-bold py-2 px-4 border-b-4 border-gray-700 hover:border-gray-500 rounded-lg"
            onClick={handleStartGame}
          >
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default WaitingSection2;
