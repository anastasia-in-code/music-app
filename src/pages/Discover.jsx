import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetTopChartsQuery, useGetSongsByGenreQuery } from '../redux/services/shazamCore';

const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);

  // const { data, isFetching, error } = useGetSongsByGenreQuery({genre: genreListId || 'POP' })
  //   console.log(data?.tracks)
  //   console.log(data, isFetching, error);
  //   console.log(data);

  const data = {
    tracks: [{
      artists: [{ adamid: '548421',
        alias: 'wham',
        id: '42' }],
      highlightsurls: null,
      hub: null,
      images: {
        background: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/5e/79/cd/5e79cd67-d483-52ef-3270-8dca1f390616/d15092ad-9322-4af8-b80f-0159d6409689_ami-identity-11b6c33ddb521791b7ba1dd8c4dcf764-2023-11-17T01-24-42.921Z_cropped.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        joecolor: 'b:222423p:f1f0f6s:e49783t:c7c7ccq:bd8070',
      },
      key: '67503214499',
      layout: '5',
      properties: null,
      share: null,
      subtitle: 'Tate McRaes',
      title: 'greedy',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/675031499/greedy',
    }, {
      artists: [{ adamid: '548421',
        alias: 'wham',
        id: '42' }],
      highlightsurls: null,
      hub: null,
      images: {
        background: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/5e/79/cd/5e79cd67-d483-52ef-3270-8dca1f390616/d15092ad-9322-4af8-b80f-0159d6409689_ami-identity-11b6c33ddb521791b7ba1dd8c4dcf764-2023-11-17T01-24-42.921Z_cropped.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        joecolor: 'b:222423p:f1f0f6s:e49783t:c7c7ccq:bd8070',
      },
      key: '675033153499',
      layout: '5',
      properties: null,
      share: null,
      subtitle: 'Tate McRdae',
      title: 'greedy',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/675031499/greedy',
    }, {
      artists: [{ adamid: '548421',
        alias: 'wham',
        id: '42' }],
      highlightsurls: null,
      hub: null,
      images: {
        background: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/5e/79/cd/5e79cd67-d483-52ef-3270-8dca1f390616/d15092ad-9322-4af8-b80f-0159d6409689_ami-identity-11b6c33ddb521791b7ba1dd8c4dcf764-2023-11-17T01-24-42.921Z_cropped.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        joecolor: 'b:222423p:f1f0f6s:e49783t:c7c7ccq:bd8070',
      },
      key: '67570351499',
      layout: '5',
      properties: null,
      share: null,
      subtitle: 'Tate McsRae',
      title: 'greedy',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/675031499/greedy',
    }, {
      artists: [{ adamid: '548421',
        alias: 'wham',
        id: '42' }],
      highlightsurls: null,
      hub: null,
      images: {
        background: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/5e/79/cd/5e79cd67-d483-52ef-3270-8dca1f390616/d15092ad-9322-4af8-b80f-0159d6409689_ami-identity-11b6c33ddb521791b7ba1dd8c4dcf764-2023-11-17T01-24-42.921Z_cropped.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        joecolor: 'b:222423p:f1f0f6s:e49783t:c7c7ccq:bd8070',
      },
      key: '67250391499',
      layout: '5',
      properties: null,
      share: null,
      subtitle: 'Tate McfRae',
      title: 'greedy',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/675031499/greedy',
    }, {
      artists: [{ adamid: '548421',
        alias: 'wham',
        id: '42' }],
      highlightsurls: null,
      hub: null,
      images: {
        background: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/5e/79/cd/5e79cd67-d483-52ef-3270-8dca1f390616/d15092ad-9322-4af8-b80f-0159d6409689_ami-identity-11b6c33ddb521791b7ba1dd8c4dcf764-2023-11-17T01-24-42.921Z_cropped.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        joecolor: 'b:222423p:f1f0f6s:e49783t:c7c7ccq:bd8070',
      },
      key: '67503351499',
      layout: '5',
      properties: null,
      share: null,
      subtitle: 'Tate McRhae',
      title: 'greedy',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/675031499/greedy',
    }],
  };

  // if (isFetching) return <Loader title="Wait, loading songs..." />;

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
        {data?.tracks.map((song, idx) => (
          <SongCard musicData={data} key={song.key} song={song} isPlaying={isPlaying} activeSong={activeSong} idx={idx} />
        ))}
      </div>
    </div>
  );
};

export default Discover;
