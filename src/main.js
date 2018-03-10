export const search = (query, type) =>
  fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(res => res.json())

export const searchAlbuns = (query) =>
  search(query, 'album');

export const searchArtists = (query) =>
  search(query, 'artist');

export const searchTracks = (query) =>
  search(query, 'track');

export const searchPlaylist = (query) =>
  search(query, 'playlist');
