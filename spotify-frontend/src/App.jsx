import { useContext } from 'react'
import Display from './components/Display'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import { PlayerContext } from './context/PlayerContext'
import './index.css'

const App = () => {

  const { audioRef, track, songsData } = useContext(PlayerContext);

  return (
    <div className='h-screen total-container bg-black'>
      {songsData.lenght !== 0 ?
        <>
          <div className="h-[90%] flex">
            <Sidebar />
            <Display />
          </div>
          <Player />
        </>
        : null}
      <audio ref={audioRef} src={track ? track.file : ""} preload='none'></audio>
    </div>
  )
}

export default App