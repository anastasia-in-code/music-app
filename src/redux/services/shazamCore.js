import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreAPI = createApi({
  reducerPath: 'shazamCoreAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core7.p.rapidapi.com',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', 'a3a8275ad3msh24a67b74f47d903p164ebbjsne8e2365bfbb9');
      return headers;
    },

  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/get-top-songs-in_world_by_genre?genre=pop' }),
    getSongsByGenre: builder.query({ query: ({ genre }) => `/charts/get-top-songs-in_world_by_genre?genre=${genre}` }),
    getSongDetails: builder.query({ query: ({ songId }) => `/songs/get_details?id=${songId}` }),
    getRelatedSongs: builder.query({ query: ({ songId }) => `/songs/list-recommendations?id=${songId}&limit=10` }),
    getArtistDetails: builder.query({ query: ({ artistId }) => `/artist/get-details?id=${artistId}` }),
    getArtistSongs: builder.query({ query: ({ artistId }) => `/artist/get-top-songs?id=${artistId}` }),
    getCountryChart: builder.query({ query: ({ country }) => `/charts/get-top-songs-in_country_by_genre?country_code=${country}&genre=POP` }),
    getSongsBySearch: builder.query({ query: ({ searchTerm }) => `/search?term=${searchTerm}&limit=10` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongsByGenreQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetArtistSongsQuery,
  useGetCountryChartQuery,
  useGetSongsBySearchQuery,
} = shazamCoreAPI;
