import { useEffect, useState } from 'react';
import api from '../../fakeAPI';

import { Loader, ArtistCard } from '../components';

const TopArtists = () => {
  const [loading, setLoading] = useState(true);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const getArtists = async () => {
      const result = await api.getArtists();
      setArtists(result);
      setLoading(false);
    };
    getArtists();
  }, []);

  if (loading) return <Loader title="Loading top charts" />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Top Artists</h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {artists.map((track) => <ArtistCard key={track.key} track={track} />)}
      </div>
    </div>
  );
};

export default TopArtists;
