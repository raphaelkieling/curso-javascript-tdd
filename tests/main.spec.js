import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import {
  search,
  searchAlbuns,
  searchArtists,
  searchTracks,
  searchPlaylist
} from '../src/main';

describe('Spotify Wrapper', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    //search (generico)
    //searchAlbuns
    //searchTracls
    //searhArtist
    //searchPlaylis
    it('should exists the search method', () => {
      expect(search).to.exist;
    });

    it('should exists the searchAlbuns method', () => {
      expect(searchAlbuns).to.exist;
    });

    it('should exists the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exists the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exists the searchPlaylist method', () => {
      expect(searchPlaylist).to.exist;
    });
  });

  describe('Generic Search', () => {

    it('should call fetch function', () => {
      const artists = search();

      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct URL', () => {

      context('passing one type', () => {
        const artists = search('Incubus', 'artist');

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');

        const albuns = search('Incubus', 'album')
        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
      });

      context('passing more than one type', () => {
        const albuns = search('Incubus', 'album')
        const artistAndAlbuns = search('Incubus', ['artist', 'album']);

        expect(fetchedStub).to.have.been
          .calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist,album');
      });
    });

    it('should return the JSON data from the Promise', () => {
      promise.resolves({
        body: 'json'
      });

      const artists = search('Incubes', 'artist');
      expect(artists.resolveValue).to.been.eql({ body: 'json' })
    });

  });

  describe('searchArtists', () => {
    it('should call fetch function', () => {
      const artists = searchArtists();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = searchArtists('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist')

      const artists2 = searchArtists('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=artist')
    });
  });

  describe('searchAlbums', () => {
    it('should call fetch function', () => {
      const artists = searchAlbuns('');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = searchAlbuns('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album')

      const artists2 = searchAlbuns('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=album')
    });
  });

  describe('searchTracks', () => {
    it('should call fetch function', () => {
      const artists = searchTracks('');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = searchTracks('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track')

      const artists2 = searchTracks('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=track')
    });
  });

  describe('searchPlaylist', () => {
    it('should call fetch function', () => {
      const artists = searchPlaylist('');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct URL', () => {
      const artists = searchPlaylist('Incubus');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist')

      const artists2 = searchPlaylist('Muse');
      expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Muse&type=playlist')
    });
  });
});
