import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    <h3 className="font-bold text-base text-white mr-3">{i + 1}.</h3>
    <div className="flex-1 flex flex-row justify-between items-center">
      <img className="w-20 h-20 rounded-lg" src={song?.images?.coverart} alt={song?.title} />
      <div className="flex-1 flex flex-col justify-center mx-3">
        <Link to={`/songs/${song.key}`}>
          <p className="text-xl font-bold text-white">{song?.title}</p>
        </Link>
        <Link to={`/artists/${song?.artists[0]?.adamid}`}>
          <p className="text-base text-gray-300 mt-1">{song?.subtitle}</p>
        </Link>
      </div>
    </div>
    <PlayPause isPlaying={isPlaying} activeSong={activeSong} song={song} handlePause={handlePauseClick} handlePlay={() => handlePlayClick(song, i)} />
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const { data } = useGetTopChartsQuery();
  // console.log(data)
  const data = { tracks: [{
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
    title: 'text',
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
    key: '6750e33153499',
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
    key: '67503s3153499',
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
    key: '675s033153499',
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
    key: '67s5033153499',
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
    key: '675f033153499',
    layout: '5',
    properties: null,
    share: null,
    subtitle: 'Tate McRdae',
    title: 'greedy',
    type: 'MUSIC',
    url: 'https://www.shazam.com/track/675031499/greedy',
  }] };
  const divRef = useRef(null);

  const topPlays = data?.tracks?.slice(0, 5);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex w-full flex-col mt-8 ">
      <div ref={divRef} className="xl:ml-6 ml-0 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
        <div className="w-full flex flex-col">
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-white font-bold text-2xl">Top Charts</h2>
            <Link to="/top-charts">
              <p className="text-gray-300 text-base cursor-pointer">See more</p>
            </Link>

          </div>
          <div className="mt-4 flex flex-col gap-1">
            {topPlays?.map((song, i) => (
              <TopChartCard
                isPlaying={isPlaying}
                activeSong={activeSong}
                handlePauseClick={handlePauseClick}
                handlePlayClick={handlePlayClick}
                key={song.key}
                i={i}
                song={song}
              />
            ))}
          </div>
          <div className="flex flex-row justify-between items-center">
            <h2 className="text-white font-bold text-2xl">Top Artist</h2>
            <Link to="/top-artists">
              <p className="text-gray-300 text-base cursor-pointer">See more</p>
            </Link>

          </div>
          <Swiper slidesPerView="auto" spaceBetween={15} freeMode centeredSlides centeredSlidesBounds modules={[FreeMode]} className="mt-4">
            {topPlays?.map((song, i) => (
              <SwiperSlide key={song?.key} style={{ width: '25%', height: 'auto' }} className="shadow-lg rounded-full animate-slider">
                <Link to={`/artists/${song?.artists[0]?.adamid}`}>
                  <img src={song?.images.background} alt="name" className="rounded-full w-full object-cover" />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>

  );
};

export default TopPlay;
