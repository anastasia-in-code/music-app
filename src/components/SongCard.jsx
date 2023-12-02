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
    <div className="flex flex-col w-[250px] bg-white/5 p-4 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
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
          src={song?.images?.coverart}
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

// {
//   apple_music_url: 'https://music.apple.com/gb/album/surround-sound-feat-21-savage-baby-tate/1637738689',
//   artist_id: '42',
//   key: 599925144,
//   photo_url: null,
//   ringtone: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/de/e9/7e/dee97e4d-ca95-fe00-cfa4-51f71fc5bef3/mzaf_16387331817857477766.plus.aac.ep.m4a',
//   sections: null,
//   shazam_url: 'https://www.shazam.com/track/42',
//   spotify_uri: null,
//   spotify_uri_query: null,
//   spotify_url: null,
//   subtitle: 'JID',
//   title: 'Surround Sound (feat. 21 Savage & Baby Tate)',
//   youtube_link: null,
// },
