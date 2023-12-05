import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader, SongCard } from '../components';
import { genres } from '../constants';
import { selectGenreListId } from '../redux/features/playerSlice';
import api from '../fakeAPI';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
  const [songs, setSongs] = useState([]);
  const [isLoading, setIsLoading] = useState('true');

  useEffect(() => {
    const getSongs = async () => {
      const result = await api.getbyGenre(genres.find((genre) => genre.title === (genreListId || 'Pop'))?.value);
      setSongs(result);
      setIsLoading(false);
    };
    getSongs();
  }, [genreListId]);

  if (isLoading) return <Loader title="Wait, loading songs..." />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreListId || 'Pop'}</h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >{genres.map((genre) => <option key={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs?.map((song, idx) => (
          <SongCard musicData={songs} key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
