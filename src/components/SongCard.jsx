import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, isPlaying, activeSong, musicData, idx }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, musicData, idx }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[200px] bg-white/5 p-4 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relatice w-full h-56 group">
        <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex 
         ${song && activeSong.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img
          className="rounded-lg"
          alt="song_img"
          src={song?.images?.coverart || song?.images?.default}
        />
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>

        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link to={song?.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>

        </p>
      </div>
    </div>

  );
};

export default SongCard;