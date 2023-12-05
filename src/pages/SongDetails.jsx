// import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DetailsHeader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';

const SongDetails = () => {
  const dispatch = useDispatch();
  // const { songId } = useParams();

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
  //   const { data: relatedSongs, isFetching: isFetchingRelatedSongs, isError } = useGetRelatedSongsQuery({ songId });
  const relatedSongs = { tracks: [
    { artists: [
      {
        adamid: '1798556',
        alias: 'maroon-5',
        id: '42',
      },
    ],
    highlightsurls: {
      artisthighlightsurl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/1798556/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel=',
    },
    hub: {
      actions: [
        {
          id: '1396383939',
          name: 'apple',
          type: 'applemusicplay',
        },
        {
          name: 'apple',
          type: 'uri',
          uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/e5/4b/1f/e54b1fea-2b40-335b-2d49-cb104ee88044/mzaf_9664086041546818329.plus.aac.ep.m4a',
        },
      ],
      displayname: 'APPLE MUSIC',
      explicit: true,
      image: 'https://images.shazam.com/static/icons/hub/web/v5/applemusic.png',
      options: [
        {
          actions: [
            {
              name: 'hub:applemusic:deeplink',
              type: 'applemusicopen',
              uri: 'https://music.apple.com/gb/album/girls-like-you/1396383479?i=1396383939&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
            },
            {
              name: 'hub:applemusic:deeplink',
              type: 'uri',
              uri: 'https://music.apple.com/gb/album/girls-like-you/1396383479?i=1396383939&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
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
      background: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/c3/3f/9a/c33f9a77-7395-bdfe-8068-a4b66d26531e/3ea423ea-6cf0-498a-a692-cc58da556f11_ami-identity-06acd526b8e5ef0283735a165e8eed70-2023-05-19T16-33-45.049Z_cropped.png/800x800cc.jpg',
      coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/1e/cf/97/1ecf9739-cd02-8e8f-77d8-165b2d560f95/17UM1IM32471.rgb.jpg/400x400cc.jpg',
      coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/1e/cf/97/1ecf9739-cd02-8e8f-77d8-165b2d560f95/17UM1IM32471.rgb.jpg/400x400cc.jpg',
      joecolor: 'b:ffffffp:070516s:182123t:383744q:464e4f',
    },
    key: '377495989',
    layout: '5',
    properties: {},
    share: {
      avatar: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/c3/3f/9a/c33f9a77-7395-bdfe-8068-a4b66d26531e/3ea423ea-6cf0-498a-a692-cc58da556f11_ami-identity-06acd526b8e5ef0283735a165e8eed70-2023-05-19T16-33-45.049Z_cropped.png/800x800cc.jpg',
      href: 'https://www.shazam.com/track/377495989/girls-like-you',
      html: 'https://www.shazam.com/snippets/email-share/377495989?lang=en-US&country=GB',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/1e/cf/97/1ecf9739-cd02-8e8f-77d8-165b2d560f95/17UM1IM32471.rgb.jpg/400x400cc.jpg',
      snapchat: 'https://www.shazam.com/partner/sc/track/377495989',
      subject: 'Girls Like You - Maroon 5',
      text: 'Girls Like You by Maroon 5',
      twitter: 'I used @Shazam to discover Girls Like You by Maroon 5.',
    },
    subtitle: 'Maroon 5',
    title: 'Girls Like You',
    type: 'MUSIC',
    url: 'https://www.shazam.com/track/377495989/girls-like-you',
    },
    {
      artists: [
        {
          adamid: '64387566',
          alias: 'katy-perry',
          id: '42',
        },
      ],
      highlightsurls: {
        artisthighlightsurl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/64387566/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1445014544&channel=',
        trackhighlighturl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1445014544?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel=',
      },
      hub: {
        actions: [
          {
            id: '1442330207',
            name: 'apple',
            type: 'applemusicplay',
          },
          {
            name: 'apple',
            type: 'uri',
            uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/ce/c3/da/cec3da3d-b534-cd2c-a3f6-17c1e5d8838c/mzaf_1127506036010278599.plus.aac.ep.m4a',
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
                uri: 'https://music.apple.com/gb/album/roar/1442330205?i=1442330207&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
              },
              {
                name: 'hub:applemusic:deeplink',
                type: 'uri',
                uri: 'https://music.apple.com/gb/album/roar/1442330205?i=1442330207&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
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
        background: 'https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/4b/23/19/4b2319f0-d705-9c27-f6bc-ab127cb4b9cd/mza_656989125661554021.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3f/f9/9f3ff904-2c70-4b70-0501-f57fd330e031/13UAAIM70462.rgb.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3f/f9/9f3ff904-2c70-4b70-0501-f57fd330e031/13UAAIM70462.rgb.jpg/400x400cc.jpg',
        joecolor: 'b:e4e4dap:412520s:3e2724t:614b45q:5f4d48',
      },
      key: '99848195',
      layout: '5',
      properties: {},
      share: {
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/4b/23/19/4b2319f0-d705-9c27-f6bc-ab127cb4b9cd/mza_656989125661554021.png/800x800cc.jpg',
        href: 'https://www.shazam.com/track/99848195/roar',
        html: 'https://www.shazam.com/snippets/email-share/99848195?lang=en-US&country=GB',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/9f/3f/f9/9f3ff904-2c70-4b70-0501-f57fd330e031/13UAAIM70462.rgb.jpg/400x400cc.jpg',
        snapchat: 'https://www.shazam.com/partner/sc/track/99848195',
        subject: 'Roar - Katy Perry',
        text: 'Roar by Katy Perry',
        twitter: 'I used @Shazam to discover Roar by Katy Perry.',
      },
      subtitle: 'Katy Perry',
      title: 'Roar',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/99848195/roar',
    },
    {
      artists: [
        {
          adamid: '63346553',
          alias: 'rihanna',
          id: '42',
        },
      ],
      highlightsurls: {
        artisthighlightsurl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/63346553/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1445858733&channel=',
        trackhighlighturl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1445858733?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel=',
      },
      hub: {
        actions: [
          {
            id: '1443065080',
            name: 'apple',
            type: 'applemusicplay',
          },
          {
            name: 'apple',
            type: 'uri',
            uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/10/9b/1b/109b1b12-4b80-d72f-f3e8-44fc865e09e6/mzaf_15811477240239082747.plus.aac.ep.m4a',
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
                uri: 'https://music.apple.com/gb/album/we-found-love-feat-calvin-harris/1443065067?i=1443065080&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
              },
              {
                name: 'hub:applemusic:deeplink',
                type: 'uri',
                uri: 'https://music.apple.com/gb/album/we-found-love-feat-calvin-harris/1443065067?i=1443065080&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
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
        background: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/14/9d/76/149d76d9-cca6-b8e1-146f-e95a9802db13/mza_2396005047706780053.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e2/ca/9e/e2ca9e81-3812-dac5-b98d-dae683366479/11UMGIM38936.rgb.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e2/ca/9e/e2ca9e81-3812-dac5-b98d-dae683366479/11UMGIM38936.rgb.jpg/400x400cc.jpg',
        joecolor: 'b:ffffffp:0b0908s:490d0dt:3c3a39q:6d3d3e',
      },
      key: '53863883',
      layout: '5',
      properties: {},
      share: {
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/14/9d/76/149d76d9-cca6-b8e1-146f-e95a9802db13/mza_2396005047706780053.png/800x800cc.jpg',
        href: 'https://www.shazam.com/track/53863883/we-found-love-feat-calvin-harris',
        html: 'https://www.shazam.com/snippets/email-share/53863883?lang=en-US&country=GB',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e2/ca/9e/e2ca9e81-3812-dac5-b98d-dae683366479/11UMGIM38936.rgb.jpg/400x400cc.jpg',
        snapchat: 'https://www.shazam.com/partner/sc/track/53863883',
        subject: 'We Found Love (feat. Calvin Harris) - Rihanna',
        text: 'We Found Love (feat. Calvin Harris) by Rihanna',
        twitter: 'I used @Shazam to discover We Found Love (feat. Calvin Harris) by Rihanna.',
      },
      subtitle: 'Rihanna',
      title: 'We Found Love (feat. Calvin Harris)',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/53863883/we-found-love-feat-calvin-harris',
    },
    {
      artists: [
        {
          adamid: '580391756',
          alias: 'the-chainsmokers',
          id: '42',
        },
      ],
      highlightsurls: {
        artisthighlightsurl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/580391756/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1168667476&channel=',
        trackhighlighturl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1168667476?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel=',
      },
      hub: {
        actions: [
          {
            id: '1170699703',
            name: 'apple',
            type: 'applemusicplay',
          },
          {
            name: 'apple',
            type: 'uri',
            uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/0b/43/fa/0b43fa3d-9c08-f4dd-de98-756a72d7db01/mzaf_15476902011721181656.plus.aac.ep.m4a',
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
                uri: 'https://music.apple.com/gb/album/closer-feat-halsey/1170699510?i=1170699703&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
              },
              {
                name: 'hub:applemusic:deeplink',
                type: 'uri',
                uri: 'https://music.apple.com/gb/album/closer-feat-halsey/1170699510?i=1170699703&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
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
        background: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/a1/df/f6/a1dff612-65e9-36ce-1167-c2ec7bee2899/7c048695-1009-4525-8f5a-c1319b768fc9_ami-identity-27852ea90adda198875408ceb0169bd5-2023-07-24T19-18-54.847Z_cropped.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/400x400cc.jpg',
        joecolor: 'b:ded9b1p:060a0fs:15191at:31342fq:3d3f38',
      },
      key: '324443962',
      layout: '5',
      properties: {},
      share: {
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/a1/df/f6/a1dff612-65e9-36ce-1167-c2ec7bee2899/7c048695-1009-4525-8f5a-c1319b768fc9_ami-identity-27852ea90adda198875408ceb0169bd5-2023-07-24T19-18-54.847Z_cropped.png/800x800cc.jpg',
        href: 'https://www.shazam.com/track/324443962/closer-feat-halsey',
        html: 'https://www.shazam.com/snippets/email-share/324443962?lang=en-US&country=GB',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/41/f8/38/41f8380b-9b56-d5d4-31f7-a6411c0c9aaa/886446102054.jpg/400x400cc.jpg',
        snapchat: 'https://www.shazam.com/partner/sc/track/324443962',
        subject: 'Closer (feat. Halsey) - The Chainsmokers',
        text: 'Closer (feat. Halsey) by The Chainsmokers',
        twitter: 'I used @Shazam to discover Closer (feat. Halsey) by The Chainsmokers.',
      },
      subtitle: 'The Chainsmokers',
      title: 'Closer (feat. Halsey)',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/324443962/closer-feat-halsey',
    },
    {
      artists: [
        {
          adamid: '463049461',
          alias: 'clean-bandit',
          id: '42',
        },
      ],
      highlightsurls: {
        artisthighlightsurl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/463049461/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1231975520&channel=',
        trackhighlighturl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1231975520?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel=',
      },
      hub: {
        actions: [
          {
            id: '1436738923',
            name: 'apple',
            type: 'applemusicplay',
          },
          {
            name: 'apple',
            type: 'uri',
            uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c3/ea/36/c3ea366f-00f4-bbf9-c1a6-f11339e887cc/mzaf_7762474531384023481.plus.aac.ep.m4a',
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
                uri: 'https://music.apple.com/gb/album/symphony-feat-zara-larsson/1436738680?i=1436738923&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
              },
              {
                name: 'hub:applemusic:deeplink',
                type: 'uri',
                uri: 'https://music.apple.com/gb/album/symphony-feat-zara-larsson/1436738680?i=1436738923&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
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
        background: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/69/04/cf/6904cf36-b391-6f67-1867-405001e65193/pr_source.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3b/26/be/3b26bed0-2f02-0a84-b899-04d82fa27cbc/190295552596.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3b/26/be/3b26bed0-2f02-0a84-b899-04d82fa27cbc/190295552596.jpg/400x400cc.jpg',
        joecolor: 'b:2e160ap:a4dae9s:7cc4e0t:8cb2bdq:6ca1b5',
      },
      key: '342980369',
      layout: '5',
      properties: {},
      share: {
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/69/04/cf/6904cf36-b391-6f67-1867-405001e65193/pr_source.png/800x800cc.jpg',
        href: 'https://www.shazam.com/track/342980369/symphony-feat-zara-larsson',
        html: 'https://www.shazam.com/snippets/email-share/342980369?lang=en-US&country=GB',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/3b/26/be/3b26bed0-2f02-0a84-b899-04d82fa27cbc/190295552596.jpg/400x400cc.jpg',
        snapchat: 'https://www.shazam.com/partner/sc/track/342980369',
        subject: 'Symphony (feat. Zara Larsson) - Clean Bandit',
        text: 'Symphony (feat. Zara Larsson) by Clean Bandit',
        twitter: 'I used @Shazam to discover Symphony (feat. Zara Larsson) by Clean Bandit.',
      },
      subtitle: 'Clean Bandit',
      title: 'Symphony (feat. Zara Larsson)',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/342980369/symphony-feat-zara-larsson',
    },
    {
      artists: [
        {
          adamid: '64387566',
          alias: 'katy-perry',
          id: '42',
        },
      ],
      highlightsurls: {
        artisthighlightsurl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/64387566/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&channel=',
      },
      hub: {
        actions: [
          {
            id: '716153701',
            name: 'apple',
            type: 'applemusicplay',
          },
          {
            name: 'apple',
            type: 'uri',
            uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/4d/24/8b/4d248bd9-daf0-c1eb-399e-0572e65ef6a0/mzaf_220096764668318056.plus.aac.ep.m4a',
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
                uri: 'https://music.apple.com/gb/album/firework/716153185?i=716153701&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
              },
              {
                name: 'hub:applemusic:deeplink',
                type: 'uri',
                uri: 'https://music.apple.com/gb/album/firework/716153185?i=716153701&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
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
        background: 'https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/4b/23/19/4b2319f0-d705-9c27-f6bc-ab127cb4b9cd/mza_656989125661554021.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7c/cb/c1/7ccbc1a3-9476-8f85-3c14-4e7e91f67f25/13UABIM57788.rgb.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7c/cb/c1/7ccbc1a3-9476-8f85-3c14-4e7e91f67f25/13UABIM57788.rgb.jpg/400x400cc.jpg',
        joecolor: 'b:d6c5cdp:0f0d0ds:120d0et:373133q:393234',
      },
      key: '53224764',
      layout: '5',
      properties: {},
      share: {
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Features112/v4/4b/23/19/4b2319f0-d705-9c27-f6bc-ab127cb4b9cd/mza_656989125661554021.png/800x800cc.jpg',
        href: 'https://www.shazam.com/track/53224764/firework',
        html: 'https://www.shazam.com/snippets/email-share/53224764?lang=en-US&country=GB',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7c/cb/c1/7ccbc1a3-9476-8f85-3c14-4e7e91f67f25/13UABIM57788.rgb.jpg/400x400cc.jpg',
        snapchat: 'https://www.shazam.com/partner/sc/track/53224764',
        subject: 'Firework - Katy Perry',
        text: 'Firework by Katy Perry',
        twitter: 'I used @Shazam to discover Firework by Katy Perry.',
      },
      subtitle: 'Katy Perry',
      title: 'Firework',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/53224764/firework',
    },
  ],
  };
  //   if (isFetchingSongDetails || isFetchingRelatedSongs) return <Loader title="Searching song details" />;
  //   if (isError) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, musicData: relatedSongs.tracks, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId="" songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
        <div className="mt-5">
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1].text.map((line, i) => <p key={i} className="text-gray-400 text-base my-1">{line}</p>) : <p className="text-gray-400 text-base my-1">Sorry, lo lyrics found!</p>}
        </div>
      </div>

      <RelatedSongs data={relatedSongs.tracks} isPlaying={isPlaying} activeSong={activeSong} handlePauseClick={handlePauseClick} handlePlayClick={handlePlayClick} />
    </div>
  );
};

export default SongDetails;
