import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import api from '../../fakeAPI';

import { Error, Loader, SongCard } from '../components';

import { useGetCountryChartQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const [songs, setSongs] = useState([]);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  useEffect(() => {
    axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_TvZImtErHWT5TrGfmDHL0HKq1h4kH')
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const getSongs = async () => {
      const result = await api.getAll();
      setSongs(result);
      setLoading(false);
    };
    getSongs();
  }, []);

  const data = api.getAll();
  if (loading) return <Loader title="Loading popular in your country" />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">{'Around You '}
        <span className="font-black">{country || 'US'}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {songs.map((song, idx) => <SongCard key={song.key} song={song} isPlaying={isPlaying} idx={idx} activeSong={activeSong} data={data} />)}
      </div>
    </div>
  );
};

export default AroundYou;
