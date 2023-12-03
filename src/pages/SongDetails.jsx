import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';

import { useGetSongDetailsQuery } from '../redux/services/shazamCore';

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songId } = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player);

  //   const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songId });
  const songData = {
    albumadamid: '1440825845',
    alias: 'sorry',
    artists: [
      {
        adamid: '320569549',
        alias: 'justin-bieber',
        id: '42',
      },
    ],
    genres: {
      primary: 'Pop',
    },
    highlightsurls: {
      artisthighlightsurl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/320569549/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1445009885',
      trackhighlighturl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1445009885?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web',
    },
    hub: {
      actions: [
        {
          id: '1440826320',
          name: 'apple',
          type: 'applemusicplay',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/49/10/40/4910402e-cc44-4247-3058-64ff021e5c7c/mzaf_801346138142615051.plus.aac.ep.m4a',
        },
      ],
      displayname: 'APPLE MUSIC',
      explicit: false,
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      options: [
        {
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/sorry/1440825845?i=1440826320&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/sorry/1440825845?i=1440826320&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
          ],
          beacondata: {
            providername: 'applemusic',
            type: 'open',
          },
          caption: 'OPEN',
          colouroverflowimage: false,
          image: 'https://images.shazam.com/static/icons/hub/web/v5/overflow-open-option.png',
          listcaption: 'Open in Apple Music',
          overflowimage: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic-overflow.png',
          providername: 'applemusic',
          type: 'open',
        },
      ],
      type: 'APPLEMUSIC',
    },
    images: {
      background: 'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/3a/c1/a3/3ac1a308-06fe-f693-ea95-09ca2b2c88a1/pr_source.png/800x800cc.jpg',
      coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/a4/dc/81a4dc50-8d7e-6ae5-71d3-f83393348248/15UMGIM59807.rgb.jpg/400x400cc.jpg',
      coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/a4/dc/81a4dc50-8d7e-6ae5-71d3-f83393348248/15UMGIM59807.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:1f1f1fp:f2f1efs:cfcec8t:c8c7c5q:acaba6',
    },
    isrc: 'USUM71516760',
    key: '293401556',
    layout: '5',
    relatedtracksurl: 'https://cdn.shazam.com/shazam/v3/en-US/GB/web/-/tracks/track-similarities-id-293401556?startFrom=0&pageSize=20&connected=',
    releasedate: '23-10-2015',
    sections: [
      {
        metadata: [
          {
            text: 'Purpose',
            title: 'Album',
          },
          {
            text: 'RBMG/Def Jam',
            title: 'Label',
          },
          {
            text: '2015',
            title: 'Released',
          },
        ],
        metapages: [
          {
            caption: 'Justin Bieber',
            image: 'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/3a/c1/a3/3ac1a308-06fe-f693-ea95-09ca2b2c88a1/pr_source.png/800x800cc.jpg',
          },
          {
            caption: 'Sorry',
            image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/a4/dc/81a4dc50-8d7e-6ae5-71d3-f83393348248/15UMGIM59807.rgb.jpg/400x400cc.jpg',
          },
        ],
        tabname: 'Song',
        type: 'SONG',
      },
      {
        beacondata: {
          commontrackid: '47297318',
          lyricsid: '12494925',
          providername: 'musixmatch',
        },
        footer: 'Writer(s): Julia Michaels, Justin Bieber, Justin Tranter, Michael Tucker, Sonny Moore\nLyrics powered by www.musixmatch.com',
        tabname: 'Lyrics',
        text: [
          'You gotta go and get angry at all of my honesty',
          "You know I try but I don't do too well with apologies",
          "I hope I don't run out of time, could someone call a referee?",
          'Cause I just need one more shot at forgiveness',
          'I know you know that I made those mistakes maybe once or twice',
          'By once or twice I mean maybe a couple a hundred times',
          'So let me, oh let me redeem, oh redeem, oh myself tonight',
          'Cause I just need one more shot at second chances',
          '',
          'Yeah, is it too late now to say sorry?',
          "Cause I'm missing more than just your body",
          'Is it too late now to say sorry?',
          'Yeah I know that I let you down',
          "Is it too late to say I'm sorry now?",
          '',
          "I'm sorry, yeah",
          'Sorry, yeah',
          'Sorry',
          'Yeah I know that I let you down',
          "Is it too late to say I'm sorry now?",
          '',
          "I'll take every single piece of the blame if you want me to",
          'But you know that there is no innocent one in this game for two',
          "I'll go, I'll go and then you go, you go out and spill the truth",
          'Can we both say the words and forget this?',
          '',
          'Is it too late now to say sorry?',
          "Cause I'm missing more than just your body",
          'Is it too late now to say sorry?',
          'Yeah I know that I let you down',
          "Is it too late to say I'm sorry now?",
          '',
          "I'm not just trying to get you back on me",
          "Cause I'm missing more than just your body",
          'Is it too late now to say sorry?',
          'Yeah I know that I let you down',
          "Is it too late to say I'm sorry now?",
          '',
          "I'm sorry, yeah",
          'Sorry, oh',
          'Sorry',
          'Yeah I know that I let you down',
          "Is it too late to say I'm sorry now?",
          "I'm sorry, yeah",
          'Sorry, oh',
          'Sorry',
          'Yeah I know that I let you down',
          "Is it too late to say I'm sorry now?",
        ],
        type: 'LYRICS',
      },
      {
        tabname: 'Related',
        type: 'RELATED',
        url: 'https://cdn.shazam.com/shazam/v3/en-US/GB/web/-/tracks/track-similarities-id-293401556?startFrom=0&pageSize=20&connected=',
      },
    ],
    share: {
      avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/3a/c1/a3/3ac1a308-06fe-f693-ea95-09ca2b2c88a1/pr_source.png/800x800cc.jpg',
      href: 'https://www.shazam.com/track/293401556/sorry',
      html: 'https://www.shazam.com/snippets/email-share/293401556?lang=en-US&country=GB',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/a4/dc/81a4dc50-8d7e-6ae5-71d3-f83393348248/15UMGIM59807.rgb.jpg/400x400cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/293401556',
      subject: 'Sorry - Justin Bieber',
      text: 'Sorry by Justin Bieber',
      twitter: 'I used @Shazam to discover Sorry by Justin Bieber.',
    },
    subtitle: 'Justin Bieber',
    title: 'Sorry',
    trackadamid: '1440826320',
    type: 'MUSIC',
    url: 'https://www.shazam.com/track/293401556/sorry',
    urlparams: {
      '{trackartist}': 'Justin+Bieber',
      '{tracktitle}': 'Sorry',
    },
  };

  console.log(songData);
  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1].text.map((line, i) => <p className="text-gray-400 text-base my-1">{line}</p>) : <p className="text-gray-400 text-base my-1">Sorry, lo lyrics found!</p>}
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
