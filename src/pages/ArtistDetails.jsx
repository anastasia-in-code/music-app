import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { useGetArtistDetailsQuery, useGetArtistSongsQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
  const { id } = useParams();

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // const {data:artistData, isLoading, isError} = useGetArtistDetailsQuery({artistId: id})
  const artistData = [
    {
      attributes: {
        artwork: {
          bgColor: '01201a',
          hasP3: false,
          height: 1224,
          textColor1: 'fdfffc',
          textColor2: '00f8ee',
          textColor3: 'cad2ce',
          textColor4: '00cdc3',
          url: 'https://is1-ssl.mzstatic.com/image/thumb/Features125/v4/3a/c1/a3/3ac1a308-06fe-f693-ea95-09ca2b2c88a1/pr_source.png/{w}x{h}bb.jpg',
          width: 1224,
        },
        genreNames: [
          'Pop',
        ],
        name: 'Justin Bieber',
        url: 'https://music.apple.com/gb/artist/justin-bieber/320569549',
      },
      href: '/v1/catalog/gb/artists/320569549',
      id: '320569549',
      relationships: {
        albums: {
          data: [
            {
              href: '/v1/catalog/gb/albums/1556175419',
              id: '1556175419',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1496639180',
              id: '1496639180',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1561058084',
              id: '1561058084',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440829460',
              id: '1440829460',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440650852',
              id: '1440650852',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440825845',
              id: '1440825845',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440490460',
              id: '1440490460',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440861853',
              id: '1440861853',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440650036',
              id: '1440650036',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1556169567',
              id: '1556169567',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1443008825',
              id: '1443008825',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440857765',
              id: '1440857765',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1588043759',
              id: '1588043759',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1561535456',
              id: '1561535456',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440616467',
              id: '1440616467',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440802303',
              id: '1440802303',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1444330524',
              id: '1444330524',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440662143',
              id: '1440662143',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1446010606',
              id: '1446010606',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440667793',
              id: '1440667793',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1541887995',
              id: '1541887995',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1560255066',
              id: '1560255066',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1561541743',
              id: '1561541743',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1002769749',
              id: '1002769749',
              type: 'albums',
            },
            {
              href: '/v1/catalog/gb/albums/1440804754',
              id: '1440804754',
              type: 'albums',
            },
          ],
          href: '/v1/catalog/gb/artists/320569549/albums',
          next: '/v1/catalog/gb/artists/320569549/albums?offset=25',
        },
      },
      type: 'artists',
    },
  ];

  // const { data: songsData, isLoading } = useGetArtistSongsQuery({ artistId: id });
  const songsData = {
    data: [
      {
        attributes: {
          albumName: 'STAY - Single',
          artistName: 'The Kid LAROI & Justin Bieber',
          artwork: {
            bgColor: '121317',
            hasP3: false,
            height: 3000,
            textColor1: 'bcf1fc',
            textColor2: '9ae4f0',
            textColor3: '9ac4ce',
            textColor4: '7fbac4',
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/e8/eb/cc/e8ebcc8d-6293-6e7f-7cc5-defa2bdbd4bd/886449399895.jpg/{w}x{h}bb.jpg',
            width: 3000,
          },
          audioLocale: 'en-US',
          audioTraits: [
            'atmos',
            'lossless',
            'lossy-stereo',
            'spatial',
          ],
          composerName: 'Justin Bieber, Charlton Howard, Blake Slatkin, Omer Fedi, Charlie Puth, Magnus August H\u00f8iberg, Michael Mule, Isaac DeBoni & Subhaan Rahmaan',
          contentRating: 'explicit',
          discNumber: 1,
          durationInMillis: 141806,
          genreNames: [
            'Pop',
            'M\u00fasica',
          ],
          hasCredits: false,
          hasLyrics: true,
          hasTimeSyncedLyrics: true,
          isAppleDigitalMaster: false,
          isMasteredForItunes: false,
          isVocalAttenuationAllowed: true,
          isrc: 'USSM12103949',
          name: 'STAY',
          playParams: {
            id: '1574378625',
            kind: 'song',
          },
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/37/f0/54/37f054c2-bd6e-1db2-2e22-c0094f9a7271/mzaf_1532106700925966880.plus.aac.p.m4a',
            },
          ],
          releaseDate: '2021-07-09',
          trackNumber: 1,
          url: 'https://music.apple.com/es/album/stay/1574378620?i=1574378625',
        },
        href: '/v1/catalog/es/songs/1574378625',
        id: '1574378625',
        type: 'songs',
      },
      {
        attributes: {
          albumName: 'No.6 Collaborations Project',
          artistName: 'Ed Sheeran & Justin Bieber',
          artwork: {
            bgColor: 'fafafa',
            hasP3: false,
            height: 4000,
            textColor1: '000000',
            textColor2: '232323',
            textColor3: '323232',
            textColor4: '4e4e4e',
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/ba/e2/2a/bae22a5e-c878-da64-0ecc-4a3584a1a139/190295411411.jpg/{w}x{h}bb.jpg',
            width: 4000,
          },
          audioLocale: 'en-US',
          audioTraits: [
            'atmos',
            'lossless',
            'lossy-stereo',
            'spatial',
          ],
          composerName: 'Ed Sheeran, Fred Gibson, Jason Boyd, Justin Bieber, Max Martin & Shellback',
          discNumber: 1,
          durationInMillis: 219947,
          genreNames: [
            'Pop',
            'M\u00fasica',
          ],
          hasCredits: false,
          hasLyrics: true,
          hasTimeSyncedLyrics: true,
          isAppleDigitalMaster: true,
          isMasteredForItunes: true,
          isVocalAttenuationAllowed: true,
          isrc: 'GBAHS1900673',
          name: "I Don't Care",
          playParams: {
            id: '1464549844',
            kind: 'song',
          },
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/23/7b/dc/237bdc85-3861-b05d-fe5a-76bef7286735/mzaf_13853697387946642320.plus.aac.ep.m4a',
            },
          ],
          releaseDate: '2019-05-10',
          trackNumber: 6,
          url: 'https://music.apple.com/es/album/i-dont-care/1464549183?i=1464549844',
        },
        href: '/v1/catalog/es/songs/1464549844',
        id: '1464549844',
        type: 'songs',
      },
      {
        attributes: {
          albumName: 'Encore',
          artistName: 'DJ Snake',
          artwork: {
            bgColor: 'f0f0f2',
            hasP3: false,
            height: 3000,
            textColor1: '000000',
            textColor2: '2b251b',
            textColor3: '303030',
            textColor4: '524e46',
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/38/6d/64/386d64d2-c311-4ea5-0841-99658f6f7253/16UMGIM39232.rgb.jpg/{w}x{h}bb.jpg',
            width: 3000,
          },
          audioLocale: 'en-US',
          audioTraits: [
            'atmos',
            'lossless',
            'lossy-stereo',
            'spatial',
          ],
          composerName: 'Justin Bieber, William Grigahcine, Andrew Watt, Ali Tamposi, Louis Bell, Carl Rosen, Lumidee, Steven Marsden, Teddy Mendez, Edwin Perez & Brian Lee',
          discNumber: 1,
          durationInMillis: 205950,
          genreNames: [
            'Dance',
            'M\u00fasica',
          ],
          hasCredits: false,
          hasLyrics: true,
          hasTimeSyncedLyrics: true,
          isAppleDigitalMaster: true,
          isMasteredForItunes: true,
          isVocalAttenuationAllowed: true,
          isrc: 'QMZSY1600015',
          name: 'Let Me Love You (feat. Justin Bieber)',
          playParams: {
            id: '1440867817',
            kind: 'song',
          },
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/72/2a/30/722a30f5-88b3-98ce-a875-ecd9c0b74380/mzaf_12066608607528177542.plus.aac.ep.m4a',
            },
          ],
          releaseDate: '2016-08-05',
          trackNumber: 13,
          url: 'https://music.apple.com/es/album/let-me-love-you-feat-justin-bieber/1440867448?i=1440867817',
        },
        href: '/v1/catalog/es/songs/1440867817',
        id: '1440867817',
        meta: {
          formerIds: [
            '1130537444',
            '1132415077',
          ],
        },
        type: 'songs',
      },
      {
        attributes: {
          albumName: 'VIDA',
          artistName: 'Luis Fonsi & Daddy Yankee',
          artwork: {
            bgColor: 'dddfda',
            hasP3: false,
            height: 3000,
            textColor1: '000001',
            textColor2: '412d1f',
            textColor3: '2c2d2d',
            textColor4: '605044',
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/8f/3b/a7/8f3ba76c-1aa8-6409-db57-23210eb1ee1e/18UMGIM85289.rgb.jpg/{w}x{h}bb.jpg',
            width: 3000,
          },
          audioLocale: 'es-ES',
          audioTraits: [
            'atmos',
            'lossless',
            'lossy-stereo',
            'spatial',
          ],
          composerName: 'Luis Fonsi, Daddy Yankee, Justin Bieber, Erika Ender, Jason Boyd & Marty James Garton Jr',
          discNumber: 1,
          durationInMillis: 230435,
          genreNames: [
            'Pop',
            'M\u00fasica',
          ],
          hasCredits: false,
          hasLyrics: true,
          hasTimeSyncedLyrics: true,
          isAppleDigitalMaster: true,
          isMasteredForItunes: true,
          isVocalAttenuationAllowed: true,
          isrc: 'USUM71703825',
          name: 'Despacito (feat. Justin Bieber) [Remix]',
          playParams: {
            id: '1447401626',
            kind: 'song',
          },
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/9c/75/65/9c75654b-81d8-d992-6612-25c60ce6dbe7/mzaf_6515546949239711248.plus.aac.ep.m4a',
            },
          ],
          releaseDate: '2017-04-17',
          trackNumber: 13,
          url: 'https://music.apple.com/es/album/despacito-feat-justin-bieber-remix/1447401519?i=1447401626',
        },
        href: '/v1/catalog/es/songs/1447401626',
        id: '1447401626',
        type: 'songs',
      },
      {
        attributes: {
          albumName: '2U (feat. Justin Bieber) - Single',
          artistName: 'David Guetta',
          artwork: {
            bgColor: '513994',
            hasP3: false,
            height: 3000,
            textColor1: 'ffffff',
            textColor2: 'edebf4',
            textColor3: 'dcd7e9',
            textColor4: 'cec7e1',
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a3/1c/39/a31c39e7-abba-77df-0bb2-3585f0227a67/190295783419.jpg/{w}x{h}bb.jpg',
            width: 3000,
          },
          audioLocale: 'en-US',
          audioTraits: [
            'lossless',
            'lossy-stereo',
          ],
          composerName: 'Daniel F Tuparia, David Guetta, Giorgio Tuinfort, Jason Boyd & Justin Bieber',
          discNumber: 1,
          durationInMillis: 194897,
          genreNames: [
            'Dance',
            'M\u00fasica',
          ],
          hasCredits: false,
          hasLyrics: true,
          hasTimeSyncedLyrics: true,
          isAppleDigitalMaster: true,
          isMasteredForItunes: true,
          isVocalAttenuationAllowed: true,
          isrc: 'GB28K1700020',
          name: '2U (feat. Justin Bieber)',
          playParams: {
            id: '1244117134',
            kind: 'song',
          },
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/7c/06/78/7c0678f5-24bc-4163-71e9-a1e394615fce/mzaf_11877266132702029906.plus.aac.ep.m4a',
            },
          ],
          releaseDate: '2017-06-09',
          trackNumber: 1,
          url: 'https://music.apple.com/es/album/2u-feat-justin-bieber/1244115954?i=1244117134',
        },
        href: '/v1/catalog/es/songs/1244117134',
        id: '1244117134',
        type: 'songs',
      },
      {
        attributes: {
          albumName: 'Justice',
          artistName: 'Justin Bieber',
          artwork: {
            bgColor: '1b190d',
            hasP3: false,
            height: 3000,
            textColor1: '97e8d9',
            textColor2: '7be9cf',
            textColor3: '7ebfb0',
            textColor4: '68c0a8',
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/f5/7a/9e/f57a9e6a-31c8-0784-dfbd-4a0120bfd4af/21UMGIM17517.rgb.jpg/{w}x{h}bb.jpg',
            width: 3000,
          },
          audioLocale: 'en-US',
          audioTraits: [
            'atmos',
            'lossless',
            'lossy-stereo',
            'spatial',
          ],
          composerName: 'Justin Bieber, Andrew Watt, Daniel Caesar, Giveon Evans, HARV, Luis Manuel Martinez Jr., Louis Bell, Felisha King, Matthew Sean Leon, Keavan Yazdani & Aaron Simmonds',
          contentRating: 'explicit',
          discNumber: 1,
          durationInMillis: 198082,
          genreNames: [
            'Pop',
            'M\u00fasica',
          ],
          hasCredits: false,
          hasLyrics: true,
          hasTimeSyncedLyrics: true,
          isAppleDigitalMaster: true,
          isMasteredForItunes: true,
          isVocalAttenuationAllowed: true,
          isrc: 'USUM72102636',
          name: 'Peaches (feat. Daniel Caesar & GIV\u0112ON)',
          playParams: {
            id: '1556175857',
            kind: 'song',
          },
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/8f/a3/65/8fa365ea-51e6-71af-7afa-835745d139ad/mzaf_4979626867108862672.plus.aac.ep.m4a',
            },
          ],
          releaseDate: '2021-03-19',
          trackNumber: 12,
          url: 'https://music.apple.com/es/album/peaches-feat-daniel-caesar-giv%C4%93on/1556175419?i=1556175857',
        },
        href: '/v1/catalog/es/songs/1556175857',
        id: '1556175857',
        type: 'songs',
      },
      {
        attributes: {
          albumName: 'Changes',
          artistName: 'Justin Bieber',
          artwork: {
            bgColor: 'f15335',
            hasP3: false,
            height: 3000,
            textColor1: '1a0002',
            textColor2: '2e0806',
            textColor3: '45110c',
            textColor4: '551710',
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/d2/21/4e/d2214ea9-97ff-46ef-ac45-7fca6fb73839/20UMGIM03126.rgb.jpg/{w}x{h}bb.jpg',
            width: 3000,
          },
          audioLocale: 'en-US',
          audioTraits: [
            'atmos',
            'lossless',
            'lossy-stereo',
            'spatial',
          ],
          composerName: 'Justin Bieber, Jason Boyd, Dominic Jordan, Jimmy Giannos & Quavious Marshall',
          discNumber: 1,
          durationInMillis: 212869,
          genreNames: [
            'Pop',
            'M\u00fasica',
          ],
          hasCredits: false,
          hasLyrics: true,
          hasTimeSyncedLyrics: true,
          isAppleDigitalMaster: true,
          isMasteredForItunes: true,
          isVocalAttenuationAllowed: true,
          isrc: 'USUM72001302',
          name: 'Intentions (feat. Quavo)',
          playParams: {
            id: '1496639586',
            kind: 'song',
          },
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/e0/70/a1/e070a18f-f595-f784-1156-1ec33ebbb7f5/mzaf_5303511052893541975.plus.aac.ep.m4a',
            },
          ],
          releaseDate: '2020-02-07',
          trackNumber: 4,
          url: 'https://music.apple.com/es/album/intentions-feat-quavo/1496639180?i=1496639586',
        },
        href: '/v1/catalog/es/songs/1496639586',
        id: '1496639586',
        type: 'songs',
      },
      {
        attributes: {
          albumName: 'Purpose (Deluxe)',
          artistName: 'Justin Bieber',
          artwork: {
            bgColor: '1f1f1f',
            hasP3: false,
            height: 1500,
            textColor1: 'f2f1ef',
            textColor2: 'cfcec8',
            textColor3: 'c8c7c5',
            textColor4: 'acaba6',
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/75/11/84/751184b0-77df-1eff-bb20-dac03247425d/15UMGIM59808.rgb.jpg/{w}x{h}bb.jpg',
            width: 1500,
          },
          audioLocale: 'en-US',
          audioTraits: [
            'atmos',
            'lossless',
            'lossy-stereo',
            'spatial',
          ],
          composerName: 'Justin Bieber, Ed Sheeran & benny blanco',
          discNumber: 1,
          durationInMillis: 233719,
          genreNames: [
            'Pop',
            'M\u00fasica',
          ],
          hasCredits: false,
          hasLyrics: true,
          hasTimeSyncedLyrics: true,
          isAppleDigitalMaster: true,
          isMasteredForItunes: true,
          isVocalAttenuationAllowed: true,
          isrc: 'USUM71516761',
          name: 'Love Yourself',
          playParams: {
            id: '1440829613',
            kind: 'song',
          },
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e0/ef/a2/e0efa29d-320e-7af9-68e6-071894694ca6/mzaf_3244737370636449167.plus.aac.ep.m4a',
            },
          ],
          releaseDate: '2015-01-01',
          trackNumber: 5,
          url: 'https://music.apple.com/es/album/love-yourself/1440829460?i=1440829613',
        },
        href: '/v1/catalog/es/songs/1440829613',
        id: '1440829613',
        meta: {
          formerIds: [
            '1049359406',
            '1049605634',
          ],
        },
        type: 'songs',
      },
      {
        attributes: {
          albumName: 'Purpose (Deluxe)',
          artistName: 'Justin Bieber',
          artwork: {
            bgColor: '1f1f1f',
            hasP3: false,
            height: 1500,
            textColor1: 'f2f1ef',
            textColor2: 'cfcec8',
            textColor3: 'c8c7c5',
            textColor4: 'acaba6',
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/75/11/84/751184b0-77df-1eff-bb20-dac03247425d/15UMGIM59808.rgb.jpg/{w}x{h}bb.jpg',
            width: 1500,
          },
          audioLocale: 'en-US',
          audioTraits: [
            'atmos',
            'lossless',
            'lossy-stereo',
            'spatial',
          ],
          composerName: 'Justin Bieber, Blood, Skrillex, Julia Michaels & Justin Tranter',
          discNumber: 1,
          durationInMillis: 200790,
          genreNames: [
            'Pop',
            'M\u00fasica',
          ],
          hasCredits: false,
          hasLyrics: true,
          hasTimeSyncedLyrics: true,
          isAppleDigitalMaster: true,
          isMasteredForItunes: true,
          isVocalAttenuationAllowed: true,
          isrc: 'USUM71516760',
          name: 'Sorry',
          playParams: {
            id: '1440829610',
            kind: 'song',
          },
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview122/v4/44/d2/37/44d237ef-277d-011e-8936-4e30a8aad7ee/mzaf_12330456180557930128.plus.aac.ep.m4a',
            },
          ],
          releaseDate: '2015-10-23',
          trackNumber: 4,
          url: 'https://music.apple.com/es/album/sorry/1440829460?i=1440829610',
        },
        href: '/v1/catalog/es/songs/1440829610',
        id: '1440829610',
        meta: {
          formerIds: [
            '1049359405',
            '1049605633',
          ],
        },
        type: 'songs',
      },
      {
        attributes: {
          albumName: 'Cold Water (feat. Justin Bieber & M\u00d8) [Don Omar Remix] - Single',
          artistName: 'Major Lazer',
          artwork: {
            bgColor: '000000',
            hasP3: false,
            height: 3200,
            textColor1: 'ffffff',
            textColor2: '3f7df7',
            textColor3: 'cbcbcb',
            textColor4: '3264c6',
            url: 'https://is1-ssl.mzstatic.com/image/thumb/Music62/v4/76/9b/8a/769b8a3b-c082-ce9e-1917-1f025f75570e/5060421567181_cover.jpg/{w}x{h}bb.jpg',
            width: 3200,
          },
          audioLocale: 'es-ES',
          audioTraits: [
            'lossless',
            'lossy-stereo',
          ],
          composerName: 'Diplo, Benny Blanco for Matza Ball Productions, Inc, Jr. Blender & King Henry',
          discNumber: 1,
          durationInMillis: 180933,
          genreNames: [
            'Pop',
            'M\u00fasica',
            'Electr\u00f3nica',
          ],
          hasCredits: false,
          hasLyrics: true,
          hasTimeSyncedLyrics: true,
          isAppleDigitalMaster: false,
          isMasteredForItunes: false,
          isVocalAttenuationAllowed: true,
          isrc: 'QMUY41600071',
          name: 'Cold Water (feat. Justin Bieber & M\u00d8) [Don Omar Remix]',
          playParams: {
            id: '1162904334',
            kind: 'song',
          },
          previews: [
            {
              url: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/32/89/2a/32892ab1-6ce0-6374-c0c4-25bf08b378ad/mzaf_1859045392715520356.plus.aac.ep.m4a',
            },
          ],
          releaseDate: '2016-10-14',
          trackNumber: 1,
          url: 'https://music.apple.com/es/album/cold-water-feat-justin-bieber-m%C3%B8-don-omar-remix/1162903698?i=1162904334',
        },
        href: '/v1/catalog/es/songs/1162904334',
        id: '1162904334',
        type: 'songs',
      },
    ],
    next: '/v1/catalog/es/artists/320569549/view/top-songs?offset=10',
  };

  // if (isLoading) return <Loader title="Loading artist details" />;
  // if (isError) return <Error />;

  return (
    <div className="flex flex-col">
      <DetailsHeader artistId={id} artistData={artistData[0]} />

      <RelatedSongs data={songsData.data} isPlaying={isPlaying} activeSong={activeSong} artistId={id} />
    </div>
  );
};

export default ArtistDetails;
