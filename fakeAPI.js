import songs from './repository';

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
  }
};

export default api;
