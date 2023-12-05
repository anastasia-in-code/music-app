import { songs, artists } from './repository';

const api = {
  getbyGenre(genre) {
    return new Promise((resolve) => {
      const result = songs.filter((song) => song.genre === genre);
      setTimeout(() => resolve(result), 1000);
    });
  },
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(songs), 1000);
    });
  },
  getArtists() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(artists), 1000);
    });
  },
  getArtist(id) {
    return artists.find((artist) => artist.artists[0].adamid === id);
  },
};

export default api;
