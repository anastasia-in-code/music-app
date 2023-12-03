import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';

import { useGetCountryChartQuery } from '../redux/services/shazamCore';

const AroundYou = () => {
//   const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  //   useEffect(() => {
  //     // at_TvZImtErHWT5TrGfmDHL0HKq1h4kH
  //     axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_TvZImtErHWT5TrGfmDHL0HKq1h4kH')
  //       .then((res) => setCountry(res?.data?.location?.country))
  //       .catch((err) => console.log(err))
  //       .finally(() => setLoading(false));
  //   }, []);
  const country = 'US';
  // const { data, isFetching, isError } = useGetCountryChartQuery({ country });
  // console.log(data)
  const data = { tracks: [
    {
      artists: [
        {
          adamid: '1552925732',
          alias: 'tyla',
          id: '42',
        },
      ],
      highlightsurls: {
        artisthighlightsurl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/1552925732/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1710629437',
        trackhighlighturl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1710629437?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web',
      },
      hub: {
        actions: [
          {
            id: '1717680248',
            name: 'apple',
            type: 'applemusicplay',
          },
          {
            name: 'apple',
            type: 'uri',
            uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/dc/b8/fd/dcb8fdbb-443b-6a81-1c2f-7aac554729db/mzaf_5989997406929877133.plus.aac.ep.m4a',
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
                uri: 'https://music.apple.com/gb/album/water/1717680174?i=1717680248&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
              },
              {
                name: 'hub:applemusic:deeplink',
                type: 'uri',
                uri: 'https://music.apple.com/gb/album/water/1717680174?i=1717680248&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
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
        background: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/d9/c7/de/d9c7de70-b4e0-0fbf-1a0a-f084b8190c69/e5013c73-0f79-4fca-99d3-56270bd90bb7_ami-identity-a66d9229f871152b4ff92342246646ef-2023-12-01T03-51-55.168Z_cropped.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/41/b4/85/41b48519-2084-2b45-d280-d24437051491/196871668248.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/41/b4/85/41b48519-2084-2b45-d280-d24437051491/196871668248.jpg/400x400cc.jpg',
        joecolor: 'b:361002p:ed9b7bs:df8166t:c87f63q:bd6a52',
      },
      key: '673104339',
      layout: '5',
      properties: {},
      share: {
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/d9/c7/de/d9c7de70-b4e0-0fbf-1a0a-f084b8190c69/e5013c73-0f79-4fca-99d3-56270bd90bb7_ami-identity-a66d9229f871152b4ff92342246646ef-2023-12-01T03-51-55.168Z_cropped.png/800x800cc.jpg',
        href: 'https://www.shazam.com/track/673104339/water',
        html: 'https://www.shazam.com/snippets/email-share/673104339?lang=en-US&country=GB',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/41/b4/85/41b48519-2084-2b45-d280-d24437051491/196871668248.jpg/400x400cc.jpg',
        snapchat: 'https://www.shazam.com/partner/sc/track/673104339',
        subject: 'Water - Tyla',
        text: 'Water by Tyla',
        twitter: 'I used @Shazam to discover Water by Tyla.',
      },
      subtitle: 'Tyla',
      title: 'Water',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/673104339/water',
    },
    {
      artists: [
        {
          adamid: '1462541757',
          alias: 'teddy-swims',
          id: '42',
        },
      ],
      highlightsurls: {
        artisthighlightsurl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/1462541757/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1694403743',
        trackhighlighturl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1694403743?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web',
      },
      hub: {
        actions: [
          {
            id: '1691699836',
            name: 'apple',
            type: 'applemusicplay',
          },
          {
            name: 'apple',
            type: 'uri',
            uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/73/df/40/73df40b0-997e-bff6-2738-bd22fcea788f/mzaf_14027507605037085841.plus.aac.ep.m4a',
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
                uri: 'https://music.apple.com/gb/album/lose-control/1691699589?i=1691699836&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
              },
              {
                name: 'hub:applemusic:deeplink',
                type: 'uri',
                uri: 'https://music.apple.com/gb/album/lose-control/1691699589?i=1691699836&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
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
        background: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/71/db/e4/71dbe424-71f4-95b5-34e6-768b2ebf8e10/5b1f9c52-c047-4424-b60a-a8fb4347c3db_ami-identity-6acfba2c102ce0d21662c3346bcf6aa8-2023-09-13T22-38-15.508Z_cropped.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/19/66/36196640-1561-dc5e-c6bc-1e5f4befa583/093624856771.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/19/66/36196640-1561-dc5e-c6bc-1e5f4befa583/093624856771.jpg/400x400cc.jpg',
        joecolor: 'b:902400p:f8e8c6s:ed965ct:e3c19eq:db7f49',
      },
      key: '668834911',
      layout: '5',
      properties: {},
      share: {
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages116/v4/71/db/e4/71dbe424-71f4-95b5-34e6-768b2ebf8e10/5b1f9c52-c047-4424-b60a-a8fb4347c3db_ami-identity-6acfba2c102ce0d21662c3346bcf6aa8-2023-09-13T22-38-15.508Z_cropped.png/800x800cc.jpg',
        href: 'https://www.shazam.com/track/668834911/lose-control',
        html: 'https://www.shazam.com/snippets/email-share/668834911?lang=en-US&country=GB',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/36/19/66/36196640-1561-dc5e-c6bc-1e5f4befa583/093624856771.jpg/400x400cc.jpg',
        snapchat: 'https://www.shazam.com/partner/sc/track/668834911',
        subject: 'Lose Control - Teddy Swims',
        text: 'Lose Control by Teddy Swims',
        twitter: 'I used @Shazam to discover Lose Control by Teddy Swims.',
      },
      subtitle: 'Teddy Swims',
      title: 'Lose Control',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/668834911/lose-control',
    },
    {
      artists: [
        {
          adamid: '1446365464',
          alias: 'tate-mcrae',
          id: '42',
        },
      ],
      highlightsurls: {
        artisthighlightsurl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/1446365464/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1707092755',
        trackhighlighturl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1707092755?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web',
      },
      hub: {
        actions: [
          {
            id: '1716103127',
            name: 'apple',
            type: 'applemusicplay',
          },
          {
            name: 'apple',
            type: 'uri',
            uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/a8/c0/a4/a8c0a46c-aabf-f654-9e79-842937767f75/mzaf_8859179919394255543.plus.aac.p.m4a',
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
                uri: 'https://music.apple.com/gb/album/greedy/1716102849?i=1716103127&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
              },
              {
                name: 'hub:applemusic:deeplink',
                type: 'uri',
                uri: 'https://music.apple.com/gb/album/greedy/1716102849?i=1716103127&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
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
        background: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/5e/79/cd/5e79cd67-d483-52ef-3270-8dca1f390616/d15092ad-9322-4af8-b80f-0159d6409689_ami-identity-11b6c33ddb521791b7ba1dd8c4dcf764-2023-11-17T01-24-42.921Z_cropped.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        joecolor: 'b:222423p:f1f0f6s:e49783t:c7c7ccq:bd8070',
      },
      key: '675031499',
      layout: '5',
      properties: {},
      share: {
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/5e/79/cd/5e79cd67-d483-52ef-3270-8dca1f390616/d15092ad-9322-4af8-b80f-0159d6409689_ami-identity-11b6c33ddb521791b7ba1dd8c4dcf764-2023-11-17T01-24-42.921Z_cropped.png/800x800cc.jpg',
        href: 'https://www.shazam.com/track/675031499/greedy',
        html: 'https://www.shazam.com/snippets/email-share/675031499?lang=en-US&country=GB',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/1b/9a/d3/1b9ad377-0346-7c99-bbdd-6dbbaf0d1107/196871542654.jpg/400x400cc.jpg',
        snapchat: 'https://www.shazam.com/partner/sc/track/675031499',
        subject: 'greedy - Tate McRae',
        text: 'greedy by Tate McRae',
        twitter: 'I used @Shazam to discover greedy by Tate McRae.',
      },
      subtitle: 'Tate McRae',
      title: 'greedy',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/675031499/greedy',
    },
    {
      artists: [
        {
          adamid: '1304377463',
          alias: 'paul-russell',
          id: '42',
        },
      ],
      highlightsurls: {
        artisthighlightsurl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/1304377463/highlights?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web&videoIdToFilter=1707907361',
        trackhighlighturl: 'https://cdn.shazam.com/video/v3/en-US/GB/web/highlights/1707907361?affiliate=mttnagencyid%3Ds2n%26mttnsiteid%3D125115%26mttn3pid%3DApple-Shazam%26mttnsub1%3DShazam_web%26mttnsub2%3D5348615A-616D-3235-3830-44754D6D5973%26itscg%3D30201%26app%3Dmusic%26itsct%3DShazam_web',
      },
      hub: {
        actions: [
          {
            id: '1702576701',
            name: 'apple',
            type: 'applemusicplay',
          },
          {
            name: 'apple',
            type: 'uri',
            uri: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/e3/76/0d/e3760d9a-714b-b1ba-df37-779294dba12f/mzaf_12464091131482397794.plus.aac.p.m4a',
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
                uri: 'https://music.apple.com/gb/album/lil-boo-thang/1702576699?i=1702576701&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
              },
              {
                name: 'hub:applemusic:deeplink',
                type: 'uri',
                uri: 'https://music.apple.com/gb/album/lil-boo-thang/1702576699?i=1702576701&mttnagencyid=s2n&mttnsiteid=125115&mttn3pid=Apple-Shazam&mttnsub1=Shazam_web&mttnsub2=5348615A-616D-3235-3830-44754D6D5973&itscg=30201&app=music&itsct=Shazam_web',
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
        background: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/9f/12/9a/9f129ae9-468e-3201-3649-0c782506f42f/6698a758-2fb5-46ed-9022-ec72487daff7_file_cropped.png/800x800cc.jpg',
        coverart: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/5d/dc/ea5ddcb8-66c6-c3ab-e268-41e2d8d675a0/196871378383.jpg/400x400cc.jpg',
        coverarthq: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/5d/dc/ea5ddcb8-66c6-c3ab-e268-41e2d8d675a0/196871378383.jpg/400x400cc.jpg',
        joecolor: 'b:dfddb7p:110621s:1e2211t:3a313fq:454732',
      },
      key: '675182763',
      layout: '5',
      properties: {},
      share: {
        avatar: 'https://is1-ssl.mzstatic.com/image/thumb/AMCArtistImages126/v4/9f/12/9a/9f129ae9-468e-3201-3649-0c782506f42f/6698a758-2fb5-46ed-9022-ec72487daff7_file_cropped.png/800x800cc.jpg',
        href: 'https://www.shazam.com/track/675182763/lil-boo-thang',
        html: 'https://www.shazam.com/snippets/email-share/675182763?lang=en-US&country=GB',
        image: 'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/ea/5d/dc/ea5ddcb8-66c6-c3ab-e268-41e2d8d675a0/196871378383.jpg/400x400cc.jpg',
        snapchat: 'https://www.shazam.com/partner/sc/track/675182763',
        subject: 'Lil Boo Thang - Paul Russell',
        text: 'Lil Boo Thang by Paul Russell',
        twitter: 'I used @Shazam to discover Lil Boo Thang by Paul Russell.',
      },
      subtitle: 'Paul Russell',
      title: 'Lil Boo Thang',
      type: 'MUSIC',
      url: 'https://www.shazam.com/track/675182763/lil-boo-thang',
    }] };
  //   if(isFetching && loading)  return <Loader title="Loading popular in your country" />
  //   if(isError && country) return <Error />
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">{'Around You '}
        <span className="font-black">{country}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.tracks?.map((song, idx) => <SongCard key={song.key} song={song} isPlaying={isPlaying} idx={idx} activeSong={activeSong} data={data} />)}
      </div>
    </div>
  );
};

export default AroundYou;
