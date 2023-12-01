import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const genreTitle = 'Pop';
//   const { data, isFetching, error } = useGetTopChartsQuery();
//   console.log(data, isFetching, error);

// if(isFetching) return <Loader title=""Wait, loading songs... />;

  const musicData = [
    {
      apple_music_url: 'https://music.apple.com/gb/album/surround-sound-feat-21-savage-baby-tate/1637738689',
      artist_id: '42',
      key: 599925144,
      photo_url: null,
      ringtone: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/de/e9/7e/dee97e4d-ca95-fe00-cfa4-51f71fc5bef3/mzaf_16387331817857477766.plus.aac.ep.m4a',
      sections: null,
      shazam_url: 'https://www.shazam.com/track/42',
      spotify_uri: null,
      spotify_uri_query: null,
      spotify_url: null,
      subtitle: 'JID',
      title: 'Surround Sound (feat. 21 Savage & Baby Tate)',
      youtube_link: null,
    },
    {
      apple_music_url: 'https://music.apple.com/gb/album/%D0%BF%D1%8B%D1%8F%D0%BB%D0%B0/1539712120',
      artist_id: '42',
      key: 544842905,
      photo_url: null,
      ringtone: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c0/01/18/c0011847-e7d5-e44a-c9d2-ed20e4897311/mzaf_13815513855997291591.plus.aac.ep.m4a',
      sections: null,
      shazam_url: 'https://www.shazam.com/track/42',
      spotify_uri: null,
      spotify_uri_query: null,
      spotify_url: null,
      subtitle: 'АИГЕЛ',
      title: 'Пыяла',
      youtube_link: null,
    },
    {
      apple_music_url: 'https://music.apple.com/gb/album/greedy/1716102849',
      artist_id: '42',
      key: 675031499,
      photo_url: null,
      ringtone: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/cc/d0/74/ccd0742d-ee21-0779-aa1f-3f2b487f8725/mzaf_11197527489833730464.plus.aac.p.m4a',
      sections: null,
      shazam_url: 'https://www.shazam.com/track/42',
      spotify_uri: null,
      spotify_uri_query: null,
      spotify_url: null,
      subtitle: 'Tate McRae',
      title: 'greedy',
      youtube_link: null,
    },
    {
      apple_music_url: 'https://music.apple.com/gb/album/strangers/1704393598',
      artist_id: '42',
      key: 675132421,
      photo_url: null,
      ringtone: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/db/2a/73/db2a7351-5c27-4ae9-c436-e8be3ff1e31c/mzaf_5761935811721239534.plus.aac.ep.m4a',
      sections: null,
      shazam_url: 'https://www.shazam.com/track/42',
      spotify_uri: null,
      spotify_uri_query: null,
      spotify_url: null,
      subtitle: 'Kenya Grace',
      title: 'Strangers',
      youtube_link: null,
    },
    {
      apple_music_url: 'https://music.apple.com/gb/album/water/1717680174',
      artist_id: '42',
      key: 673104339,
      photo_url: null,
      ringtone: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/50/93/b2/5093b22f-2c88-f6b7-d189-6429dfe32e6a/mzaf_5521717704386567882.plus.aac.ep.m4a',
      sections: null,
      shazam_url: 'https://www.shazam.com/track/42',
      spotify_uri: null,
      spotify_uri_query: null,
      spotify_url: null,
      subtitle: 'Tyla',
      title: 'Water',
      youtube_link: null,
    },
    {
      apple_music_url: 'https://music.apple.com/gb/album/si-no-est%C3%A1s/1678217704',
      artist_id: '42',
      key: 633367735,
      photo_url: null,
      ringtone: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/58/31/ed/5831ede0-611c-479c-ea3b-4e646066e4b8/mzaf_7161969819350161171.plus.aac.ep.m4a',
      sections: null,
      shazam_url: 'https://www.shazam.com/track/42',
      spotify_uri: null,
      spotify_uri_query: null,
      spotify_url: null,
      subtitle: 'Iñigo Quintero',
      title: 'Si No Estás',
      youtube_link: null,
    },
    {
      apple_music_url: 'https://music.apple.com/gb/album/%D0%BC%D0%BE%D0%B9-%D0%BC%D0%B0%D1%80%D0%BC%D0%B5%D0%BB%D0%B0%D0%B4%D0%BD%D1%8B%D0%B9-%D1%8F-%D0%BD%D0%B5-%D0%BF%D1%80%D0%B0%D0%B2%D0%B0/977147649',
      artist_id: '42',
      key: 45389104,
      photo_url: null,
      ringtone: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d0/34/89/d034899a-863d-f827-fea8-73f9d72fedf1/mzaf_10619160784264946198.plus.aac.ep.m4a',
      sections: null,
      shazam_url: 'https://www.shazam.com/track/42',
      spotify_uri: null,
      spotify_uri_query: null,
      spotify_url: null,
      subtitle: 'Katya Lel',
      title: 'Мой мармеладный (Я не права)',
      youtube_link: null,
    }];

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">Discover {genreTitle}</h2>
        <select
          onChange={() => { }}
          value=""
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >{genres.map((genre) => <option key={genre.value}>{genre.title}</option>)}
        </select>
        <Error />
        <Loader />
        <SongCard />
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {musicData.map((song) => (
          <SongCard key={song.key} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
