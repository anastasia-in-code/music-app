import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Error, Loader, SongCard } from '../components';

import { useGetSongsBySearchQuery } from '../redux/services/shazamCore';

const Search = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { searchTerm } = useParams();
  console.log(searchTerm);

  // const { data, isFetching, isError } = useGetSongsBySearchQuery({searchTerm});
  // console.log(data)
  const data = {
    artist: {
      hits: [
        {
          artist: {
            adam_id: 1303473736,
            alias: null,
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/00/2d/a7/002da720-69be-2ba9-8671-96839f3f8c79/bcd4c8fc-3039-45f2-9fce-c04d0aa31824_ami-identity-022ae204b68789b75741261e880cf6fa-2023-07-18T16-13-51.762Z_cropped.png/800x800bb.jpg',
            genres: [],
            genres_primary: null,
            name: 'Sorry',
            url: 'https://music.apple.com/gb/artist/sorry/1303473736',
            verified: false,
          },
        },
        {
          artist: {
            adam_id: 1297022257,
            alias: null,
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/9a/ba/bf/9ababf10-d4b0-9ae1-156b-ace732346f5c/859738722247_cover.jpg/800x800ac.jpg',
            genres: [],
            genres_primary: null,
            name: 'Sorry.',
            url: 'https://music.apple.com/gb/artist/sorry/1297022257',
            verified: false,
          },
        },
        {
          artist: {
            adam_id: 1516287513,
            alias: null,
            avatar: null,
            genres: [],
            genres_primary: null,
            name: 'SORRY',
            url: 'https://music.apple.com/gb/artist/sorry/1516287513',
            verified: false,
          },
        },
        {
          artist: {
            adam_id: 194915608,
            alias: null,
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Music/11/5c/2d/mzi.injfwmsw.jpg/800x800ac.jpg',
            genres: [],
            genres_primary: null,
            name: 'Sorry',
            url: 'https://music.apple.com/gb/artist/sorry/194915608',
            verified: false,
          },
        },
        {
          artist: {
            adam_id: 1100427795,
            alias: null,
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/8d/36/d3/8d36d3f6-575f-714e-1814-26fdbe87e53d/191061856245.jpg/800x800ac.jpg',
            genres: [],
            genres_primary: null,
            name: 'Sorry',
            url: 'https://music.apple.com/gb/artist/sorry/1100427795',
            verified: false,
          },
        },
      ],
    },
    tracks: {
      hits: [
        {
          actions: [
            {
              id: '362651775',
              name: 'track:362651775',
              type: 'track',
            },
          ],
          alias: 'sorry',
          artists: [
            {
              adamid: '524830875',
              alias: 'nothing-but-thieves',
              id: '42',
            },
          ],
          heading: {
            subtitle: 'Nothing But Thieves',
            title: 'Sorry',
          },
          images: {
            blurred: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ea/6e/bf/ea6ebff3-a03a-d2d1-510a-262532379736/886446439082.jpg/400x400cc.jpg',
            default: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ea/6e/bf/ea6ebff3-a03a-d2d1-510a-262532379736/886446439082.jpg/400x400cc.jpg',
            play: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ea/6e/bf/ea6ebff3-a03a-d2d1-510a-262532379736/886446439082.jpg/400x400cc.jpg',
          },
          key: '362651775',
          share: {
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/8c/8f/bc/8c8fbcbb-97be-df96-e692-36479f717a69/f6a053fa-15d2-4a78-819b-748133e47dcc_ami-identity-96efaea2e058da095020a9708fde11a3-2023-05-31T16-11-37.709Z_cropped.png/800x800cc.jpg',
            href: 'https://www.shazam.com/track/362651775/sorry',
            html: 'https://www.shazam.com/snippets/email-share/362651775?lang=en-US&country=GB',
            image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ea/6e/bf/ea6ebff3-a03a-d2d1-510a-262532379736/886446439082.jpg/400x400cc.jpg',
            snapchat: 'https://www.shazam.com/partner/sc/track/362651775',
            subject: 'Sorry - Nothing But Thieves',
            text: 'Sorry by Nothing But Thieves',
            twitter: 'I used @Shazam to discover Sorry by Nothing But Thieves.',
          },
          stores: {
            apple: {
              actions: [
                {
                  type: 'uri',
                  uri: 'https://music.apple.com/gb/album/sorry/1226033753?i=1226033760&app=music&itsct=Shazam_1',
                },
              ],
              coverarturl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ea/6e/bf/ea6ebff3-a03a-d2d1-510a-262532379736/886446439082.jpg/400x400cc.jpg',
              explicit: false,
              previewurl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b9/dc/ec/b9dcec50-b74e-827b-36d3-d350a2876573/mzaf_9970299975044994129.plus.aac.ep.m4a',
              productid: '1226033753',
              trackid: '1226033760',
            },
          },
          streams: {},
          type: 'MUSIC',
          url: 'https://www.shazam.com/track/362651775/sorry',
          urlparams: {
            '{trackartist}': 'Nothing+But+Thieves',
            '{tracktitle}': 'Sorry',
          },
        },
        {
          actions: [
            {
              id: '342386263',
              name: 'track:342386263',
              type: 'track',
            },
          ],
          alias: 'sorry',
          artists: [
            {
              adamid: '128050210',
              alias: 'future',
              id: '42',
            },
          ],
          heading: {
            subtitle: 'Future',
            title: 'Sorry',
          },
          images: {
            blurred: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/69/6c/e9/696ce94b-c23f-1e78-07e7-d09990fedcae/886446604039.jpg/400x400cc.jpg',
            default: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/69/6c/e9/696ce94b-c23f-1e78-07e7-d09990fedcae/886446604039.jpg/400x400cc.jpg',
            play: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/69/6c/e9/696ce94b-c23f-1e78-07e7-d09990fedcae/886446604039.jpg/400x400cc.jpg',
          },
          key: '342386263',
          share: {
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/c2/db/82/c2db8258-65df-a3b5-a69e-38bebb0b956c/pr_source.png/800x800cc.jpg',
            href: 'https://www.shazam.com/track/342386263/sorry',
            html: 'https://www.shazam.com/snippets/email-share/342386263?lang=en-US&country=GB',
            image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/69/6c/e9/696ce94b-c23f-1e78-07e7-d09990fedcae/886446604039.jpg/400x400cc.jpg',
            snapchat: 'https://www.shazam.com/partner/sc/track/342386263',
            subject: 'Sorry - Future',
            text: 'Sorry by Future',
            twitter: 'I used @Shazam to discover Sorry by Future.',
          },
          stores: {
            apple: {
              actions: [
                {
                  type: 'uri',
                  uri: 'https://music.apple.com/gb/album/sorry/1253102461?i=1253102617&app=music&itsct=Shazam_1',
                },
              ],
              coverarturl: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/69/6c/e9/696ce94b-c23f-1e78-07e7-d09990fedcae/886446604039.jpg/400x400cc.jpg',
              explicit: true,
              previewurl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/69/e5/24/69e52427-c90e-f369-75bd-727b3613c3c5/mzaf_12476809358954438114.plus.aac.ep.m4a',
              productid: '1253102461',
              trackid: '1253102617',
            },
          },
          streams: {},
          type: 'MUSIC',
          url: 'https://www.shazam.com/track/342386263/sorry',
          urlparams: {
            '{trackartist}': 'Future',
            '{tracktitle}': 'Sorry',
          },
        },
        {
          actions: [
            {
              id: '45147211',
              name: 'track:45147211',
              type: 'track',
            },
          ],
          alias: 'sorry',
          artists: [
            {
              adamid: '2827464',
              alias: 'kaskade',
              id: '42',
            },
          ],
          heading: {
            subtitle: 'Kaskade',
            title: 'Sorry',
          },
          images: {
            blurred: 'https://is1-ssl.mzstatic.com/image/thumb/Music/80/2d/fb/mzi.gpgjlfst.tif/400x400cc.jpg',
            default: 'https://is1-ssl.mzstatic.com/image/thumb/Music/80/2d/fb/mzi.gpgjlfst.tif/400x400cc.jpg',
            play: 'https://is1-ssl.mzstatic.com/image/thumb/Music/80/2d/fb/mzi.gpgjlfst.tif/400x400cc.jpg',
          },
          key: '45147211',
          share: {
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/5e/ad/82/5ead82db-aabd-da0e-cb7d-b4558ef705ea/mzl.uvjtthad.jpg/800x800cc.jpg',
            href: 'https://www.shazam.com/track/45147211/sorry',
            html: 'https://www.shazam.com/snippets/email-share/45147211?lang=en-US&country=GB',
            image: 'https://is1-ssl.mzstatic.com/image/thumb/Music/80/2d/fb/mzi.gpgjlfst.tif/400x400cc.jpg',
            snapchat: 'https://www.shazam.com/partner/sc/track/45147211',
            subject: 'Sorry - Kaskade',
            text: 'Sorry by Kaskade',
            twitter: 'I used @Shazam to discover Sorry by Kaskade.',
          },
          stores: {
            apple: {
              actions: [
                {
                  type: 'uri',
                  uri: 'https://music.apple.com/gb/album/sorry/185392770?i=185395269&app=music&itsct=Shazam_1',
                },
              ],
              coverarturl: 'https://is1-ssl.mzstatic.com/image/thumb/Music/80/2d/fb/mzi.gpgjlfst.tif/400x400cc.jpg',
              explicit: false,
              previewurl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/cf/bc/7a/cfbc7a89-a699-5b26-80d2-cfae474d3169/mzaf_15059324843475856412.plus.aac.ep.m4a',
              productid: '185392770',
              trackid: '185395269',
            },
          },
          streams: {},
          type: 'MUSIC',
          url: 'https://www.shazam.com/track/45147211/sorry',
          urlparams: {
            '{trackartist}': 'Kaskade',
            '{tracktitle}': 'Sorry',
          },
        },
        {
          actions: [
            {
              id: '42395275',
              name: 'track:42395275',
              type: 'track',
            },
          ],
          alias: 'sorry',
          artists: [
            {
              adamid: '20044',
              alias: 'madonna',
              id: '42',
            },
          ],
          heading: {
            subtitle: 'Madonna',
            title: 'Sorry',
          },
          images: {
            blurred: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/24/5a/e8/245ae865-c767-310b-c8ee-6b3a05e43fd4/dj.hgvybcjz.jpg/400x400cc.jpg',
            default: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/24/5a/e8/245ae865-c767-310b-c8ee-6b3a05e43fd4/dj.hgvybcjz.jpg/400x400cc.jpg',
            play: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/24/5a/e8/245ae865-c767-310b-c8ee-6b3a05e43fd4/dj.hgvybcjz.jpg/400x400cc.jpg',
          },
          key: '42395275',
          share: {
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages113/v4/6f/ed/d8/6fedd8aa-ebed-7fce-c0d6-4938fa19b7fb/1eabb313-e1ec-470f-b5fe-ede6f7a23983_ami-identity-d6894690f735e0ff6853ea7f9674c67d-2023-01-17T04-51-22.663Z_cropped.png/800x800cc.jpg',
            href: 'https://www.shazam.com/track/42395275/sorry',
            html: 'https://www.shazam.com/snippets/email-share/42395275?lang=en-US&country=GB',
            image: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/24/5a/e8/245ae865-c767-310b-c8ee-6b3a05e43fd4/dj.hgvybcjz.jpg/400x400cc.jpg',
            snapchat: 'https://www.shazam.com/partner/sc/track/42395275',
            subject: 'Sorry - Madonna',
            text: 'Sorry by Madonna',
            twitter: 'I used @Shazam to discover Sorry by Madonna.',
          },
          stores: {
            apple: {
              actions: [
                {
                  type: 'uri',
                  uri: 'https://music.apple.com/gb/album/sorry/91992239?i=91990183&app=music&itsct=Shazam_1',
                },
              ],
              coverarturl: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/24/5a/e8/245ae865-c767-310b-c8ee-6b3a05e43fd4/dj.hgvybcjz.jpg/400x400cc.jpg',
              explicit: false,
              previewurl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/50/44/35/5044352f-10ee-2b65-2388-5afc153c470d/mzaf_545991110748698301.plus.aac.ep.m4a',
              productid: '91992239',
              trackid: '91990183',
            },
          },
          streams: {},
          type: 'MUSIC',
          url: 'https://www.shazam.com/track/42395275/sorry',
          urlparams: {
            '{trackartist}': 'Madonna',
            '{tracktitle}': 'Sorry',
          },
        },
        {
          actions: [
            {
              id: '293401556',
              name: 'track:293401556',
              type: 'track',
            },
          ],
          alias: 'sorry',
          artists: [
            {
              adamid: '320569549',
              alias: 'justin-bieber',
              id: '42',
            },
          ],
          heading: {
            subtitle: 'Justin Bieber',
            title: 'Sorry',
          },
          images: {
            blurred: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/a4/dc/81a4dc50-8d7e-6ae5-71d3-f83393348248/15UMGIM59807.rgb.jpg/400x400cc.jpg',
            default: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/a4/dc/81a4dc50-8d7e-6ae5-71d3-f83393348248/15UMGIM59807.rgb.jpg/400x400cc.jpg',
            play: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/a4/dc/81a4dc50-8d7e-6ae5-71d3-f83393348248/15UMGIM59807.rgb.jpg/400x400cc.jpg',
          },
          key: '293401556',
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
          stores: {
            apple: {
              actions: [
                {
                  type: 'uri',
                  uri: 'https://music.apple.com/gb/album/sorry/1440825845?i=1440826320&app=music&itsct=Shazam_1',
                },
              ],
              coverarturl: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/81/a4/dc/81a4dc50-8d7e-6ae5-71d3-f83393348248/15UMGIM59807.rgb.jpg/400x400cc.jpg',
              explicit: false,
              previewurl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/49/10/40/4910402e-cc44-4247-3058-64ff021e5c7c/mzaf_801346138142615051.plus.aac.ep.m4a',
              productid: '1440825845',
              trackid: '1440826320',
            },
          },
          streams: {},
          type: 'MUSIC',
          url: 'https://www.shazam.com/track/293401556/sorry',
          urlparams: {
            '{trackartist}': 'Justin+Bieber',
            '{tracktitle}': 'Sorry',
          },
        },
        {
          actions: [
            {
              id: '682170421',
              name: 'track:682170421',
              type: 'track',
            },
          ],
          alias: 'sorry',
          artists: [
            {
              adamid: '1435848034',
              alias: 'the-kid-laroi',
              id: '42',
            },
          ],
          heading: {
            subtitle: 'The Kid LAROI',
            title: 'SORRY',
          },
          images: {
            blurred: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/46/26/10/46261095-a39c-9231-7d1c-9718aa092b3a/196871605403.jpg/400x400cc.jpg',
            default: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/46/26/10/46261095-a39c-9231-7d1c-9718aa092b3a/196871605403.jpg/400x400cc.jpg',
            play: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/46/26/10/46261095-a39c-9231-7d1c-9718aa092b3a/196871605403.jpg/400x400cc.jpg',
          },
          key: '682170421',
          share: {
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/d3/32/cc/d332cc4a-b0f5-1de0-0b9d-97d5e7832be6/b37c968c-c905-41d7-b14c-f7804e8a7068_ami-identity-2659880baed54ea2f54957bd0fc27164-2023-10-16T15-58-56.969Z_cropped.png/800x800cc.jpg',
            href: 'https://www.shazam.com/track/682170421/sorry',
            html: 'https://www.shazam.com/snippets/email-share/682170421?lang=en-US&country=GB',
            image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/46/26/10/46261095-a39c-9231-7d1c-9718aa092b3a/196871605403.jpg/400x400cc.jpg',
            snapchat: 'https://www.shazam.com/partner/sc/track/682170421',
            subject: 'SORRY - The Kid LAROI',
            text: 'SORRY by The Kid LAROI',
            twitter: 'I used @Shazam to discover SORRY by The Kid LAROI.',
          },
          stores: {
            apple: {
              actions: [
                {
                  type: 'uri',
                  uri: 'https://music.apple.com/gb/album/sorry/1715047367?i=1715047368&app=music&itsct=Shazam_1',
                },
              ],
              coverarturl: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/46/26/10/46261095-a39c-9231-7d1c-9718aa092b3a/196871605403.jpg/400x400cc.jpg',
              explicit: true,
              previewurl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/78/64/04/78640426-571c-8c9d-78c3-60a73f37734d/mzaf_7531681999683843356.plus.aac.ep.m4a',
              productid: '1715047367',
              trackid: '1715047368',
            },
          },
          streams: {},
          type: 'MUSIC',
          url: 'https://www.shazam.com/track/682170421/sorry',
          urlparams: {
            '{trackartist}': 'The+Kid+LAROI',
            '{tracktitle}': 'SORRY',
          },
        },
        {
          actions: [
            {
              id: '384063',
              name: 'track:384063',
              type: 'track',
            },
          ],
          alias: 'sorry-i-didnt-know-original-radio-edit',
          artists: [
            {
              adamid: '7059075',
              alias: 'monsta-boy',
              id: '42',
            },
          ],
          heading: {
            subtitle: 'Monsta Boy',
            title: "Sorry (I Didn't Know) (Original Radio Edit)",
          },
          images: {
            blurred: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/af/d1/4bafd101-c173-f111-9489-54f91dc2b2e3/634904112523.png/400x400cc.jpg',
            default: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/af/d1/4bafd101-c173-f111-9489-54f91dc2b2e3/634904112523.png/400x400cc.jpg',
            play: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/af/d1/4bafd101-c173-f111-9489-54f91dc2b2e3/634904112523.png/400x400cc.jpg',
          },
          key: '384063',
          share: {
            href: 'https://www.shazam.com/track/384063/sorry-i-didnt-know-original-radio-edit',
            html: 'https://www.shazam.com/snippets/email-share/384063?lang=en-US&country=GB',
            image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/af/d1/4bafd101-c173-f111-9489-54f91dc2b2e3/634904112523.png/400x400cc.jpg',
            snapchat: 'https://www.shazam.com/partner/sc/track/384063',
            subject: "Sorry (I Didn't Know) (Original Radio Edit) - Monsta Boy",
            text: "Sorry (I Didn't Know) (Original Radio Edit) by Monsta Boy",
            twitter: "I used @Shazam to discover Sorry (I Didn't Know) (Original Radio Edit) by Monsta Boy.",
          },
          stores: {
            apple: {
              actions: [
                {
                  type: 'uri',
                  uri: 'https://music.apple.com/gb/album/sorry-i-didnt-know-original-radio-edit/7059082?i=7059073&app=music&itsct=Shazam_1',
                },
              ],
              coverarturl: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/4b/af/d1/4bafd101-c173-f111-9489-54f91dc2b2e3/634904112523.png/400x400cc.jpg',
              explicit: false,
              previewurl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/c4/10/52/c410526d-4db9-8e4c-2fea-fe6da1510c36/mzaf_8029613749569939598.plus.aac.ep.m4a',
              productid: '7059082',
              trackid: '7059073',
            },
          },
          streams: {},
          type: 'MUSIC',
          url: 'https://www.shazam.com/track/384063/sorry-i-didnt-know-original-radio-edit',
          urlparams: {
            '{trackartist}': 'Monsta+Boy',
            '{tracktitle}': 'Sorry+%28I+Didn%27t+Know%29+%28Original+Radio+Edit%29',
          },
        },
        {
          actions: [
            {
              id: '346225693',
              name: 'track:346225693',
              type: 'track',
            },
          ],
          alias: 'sorry',
          artists: [
            {
              adamid: '324916925',
              alias: 'halsey',
              id: '42',
            },
          ],
          heading: {
            subtitle: 'Halsey',
            title: 'Sorry',
          },
          images: {
            blurred: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/e4/ca/2f/e4ca2f6f-2ffb-e518-cb76-af68a5675be8/20UM1IM08054.rgb.jpg/400x400cc.jpg',
            default: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/e4/ca/2f/e4ca2f6f-2ffb-e518-cb76-af68a5675be8/20UM1IM08054.rgb.jpg/400x400cc.jpg',
            play: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/e4/ca/2f/e4ca2f6f-2ffb-e518-cb76-af68a5675be8/20UM1IM08054.rgb.jpg/400x400cc.jpg',
          },
          key: '346225693',
          share: {
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/b2/83/a2/b283a2b7-68e7-7dbc-99f4-3eecc3ff6674/pr_source.png/800x800cc.jpg',
            href: 'https://www.shazam.com/track/346225693/sorry',
            html: 'https://www.shazam.com/snippets/email-share/346225693?lang=en-US&country=GB',
            image: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/e4/ca/2f/e4ca2f6f-2ffb-e518-cb76-af68a5675be8/20UM1IM08054.rgb.jpg/400x400cc.jpg',
            snapchat: 'https://www.shazam.com/partner/sc/track/346225693',
            subject: 'Sorry - Halsey',
            text: 'Sorry by Halsey',
            twitter: 'I used @Shazam to discover Sorry by Halsey.',
          },
          stores: {
            apple: {
              actions: [
                {
                  type: 'uri',
                  uri: 'https://music.apple.com/gb/album/sorry/1543275887?i=1543276196&app=music&itsct=Shazam_1',
                },
              ],
              coverarturl: 'https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/e4/ca/2f/e4ca2f6f-2ffb-e518-cb76-af68a5675be8/20UM1IM08054.rgb.jpg/400x400cc.jpg',
              explicit: false,
              previewurl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/ca/5b/e8/ca5be828-2e86-755c-c9ff-f5bdbf730794/mzaf_12784042518921970290.plus.aac.ep.m4a',
              productid: '1543275887',
              trackid: '1543276196',
            },
          },
          streams: {},
          type: 'MUSIC',
          url: 'https://www.shazam.com/track/346225693/sorry',
          urlparams: {
            '{trackartist}': 'Halsey',
            '{tracktitle}': 'Sorry',
          },
        },
        {
          actions: [
            {
              id: '462751019',
              name: 'track:462751019',
              type: 'track',
            },
          ],
          alias: 'sorry',
          artists: [
            {
              adamid: '1001696240',
              alias: 'joel-corry',
              id: '42',
            },
          ],
          heading: {
            subtitle: 'Joel Corry',
            title: 'Sorry',
          },
          images: {
            blurred: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d0/50/7a/d0507abe-9948-47cf-8ed7-8b2ce24d3087/5054197826610.jpg/400x400cc.jpg',
            default: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d0/50/7a/d0507abe-9948-47cf-8ed7-8b2ce24d3087/5054197826610.jpg/400x400cc.jpg',
            play: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d0/50/7a/d0507abe-9948-47cf-8ed7-8b2ce24d3087/5054197826610.jpg/400x400cc.jpg',
          },
          key: '462751019',
          share: {
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/85/9d/f0/859df046-0eea-c194-6465-c07d7c629542/9a608782-33c7-4d4f-bbd7-b40427311774_ami-identity-65c8093992672f871b9644298163e35d-2023-08-27T11-10-34.850Z_cropped.png/800x800cc.jpg',
            href: 'https://www.shazam.com/track/462751019/sorry',
            html: 'https://www.shazam.com/snippets/email-share/462751019?lang=en-US&country=GB',
            image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d0/50/7a/d0507abe-9948-47cf-8ed7-8b2ce24d3087/5054197826610.jpg/400x400cc.jpg',
            snapchat: 'https://www.shazam.com/partner/sc/track/462751019',
            subject: 'Sorry - Joel Corry',
            text: 'Sorry by Joel Corry',
            twitter: 'I used @Shazam to discover Sorry by Joel Corry.',
          },
          stores: {
            apple: {
              actions: [
                {
                  type: 'uri',
                  uri: 'https://music.apple.com/gb/album/sorry/1709207454?i=1709208192&app=music&itsct=Shazam_1',
                },
              ],
              coverarturl: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/d0/50/7a/d0507abe-9948-47cf-8ed7-8b2ce24d3087/5054197826610.jpg/400x400cc.jpg',
              explicit: false,
              previewurl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/d8/c5/6d/d8c56de0-4ae5-3b19-94d3-7df9d3ed9173/mzaf_13775128472794762566.plus.aac.ep.m4a',
              productid: '1709207454',
              trackid: '1709208192',
            },
          },
          streams: {},
          type: 'MUSIC',
          url: 'https://www.shazam.com/track/462751019/sorry',
          urlparams: {
            '{trackartist}': 'Joel+Corry',
            '{tracktitle}': 'Sorry',
          },
        },
        {
          actions: [
            {
              id: '317443996',
              name: 'track:317443996',
              type: 'track',
            },
          ],
          alias: 'sorry',
          artists: [
            {
              adamid: '1419227',
              alias: 'beyonc%C3%A9',
              id: '42',
            },
          ],
          heading: {
            subtitle: 'Beyonc\u00e9',
            title: 'Sorry',
          },
          images: {
            blurred: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/db/25/a1/db25a1c0-8a4a-3b4d-226d-7c7704dc92da/886447680711.jpg/400x400cc.jpg',
            default: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/db/25/a1/db25a1c0-8a4a-3b4d-226d-7c7704dc92da/886447680711.jpg/400x400cc.jpg',
            play: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/db/25/a1/db25a1c0-8a4a-3b4d-226d-7c7704dc92da/886447680711.jpg/400x400cc.jpg',
          },
          key: '317443996',
          share: {
            avatar: 'https://is1-ssl.mzstatic.com/image/thumb/Features122/v4/e2/10/a7/e210a754-3409-4e42-8fd9-413c1289cbb9/mza_3319038547447377908.png/800x800cc.jpg',
            href: 'https://www.shazam.com/track/317443996/sorry',
            html: 'https://www.shazam.com/snippets/email-share/317443996?lang=en-US&country=GB',
            image: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/db/25/a1/db25a1c0-8a4a-3b4d-226d-7c7704dc92da/886447680711.jpg/400x400cc.jpg',
            snapchat: 'https://www.shazam.com/partner/sc/track/317443996',
            subject: 'Sorry - Beyonc\u00e9',
            text: 'Sorry by Beyonc\u00e9',
            twitter: 'I used @Shazam to discover Sorry by Beyonc\u00e9.',
          },
          stores: {
            apple: {
              actions: [
                {
                  type: 'uri',
                  uri: 'https://music.apple.com/gb/album/sorry/1460430561?i=1460430677&app=music&itsct=Shazam_1',
                },
              ],
              coverarturl: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/db/25/a1/db25a1c0-8a4a-3b4d-226d-7c7704dc92da/886447680711.jpg/400x400cc.jpg',
              explicit: true,
              previewurl: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/b1/9e/34/b19e3419-028a-d909-cbc2-8d527162467f/mzaf_14746061185807575183.plus.aac.ep.m4a',
              productid: '1460430561',
              trackid: '1460430677',
            },
          },
          streams: {},
          type: 'MUSIC',
          url: 'https://www.shazam.com/track/317443996/sorry',
          urlparams: {
            '{trackartist}': 'Beyonc%C3%A9',
            '{tracktitle}': 'Sorry',
          },
        },
      ],
    },
  };

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Show results for <span className='font-black'>{searchTerm}</span></h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.hits?.map((song, idx) => <SongCard key={song.key} song={song} isPlaying={isPlaying} idx={idx} activeSong={activeSong} data={data} />)}
      </div>
    </div>
  );
};

export default Search;
