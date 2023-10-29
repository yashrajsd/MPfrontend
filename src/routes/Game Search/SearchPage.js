import React, { useEffect } from 'react';
import SearchSection1 from './Sections/SearchSection1';
import SearchSection2 from './Sections/SearchSection2';
import { useNavigate } from 'react-router';

const SearchPage = ({ socket, setFinding }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      socket.emit('findRoom','Yashraj');
    }, 3000);

    return () => {
      clearTimeout(delay);
      socket.off('findRoom');
    };
  }, []);

  useEffect(()=>{
    socket.on('roomFound', (roomId) => {
        console.log('room found bro')
        console.log(roomId)
        navigate(`/game/${roomId}`);
        setFinding(false);
      });
      return ()=>{
        socket.off('roomFound')
      }
  },[socket])

  return (
    <div className='searchbg'>
      <SearchSection1 />
      <SearchSection2 />
    </div>
  );
};

export default SearchPage;
