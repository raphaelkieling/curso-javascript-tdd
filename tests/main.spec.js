import { expect } from 'chai';
import { sub, sum, div, mult } from '../src/main';

describe('Calc', _ => {
  //smoke tests
  describe('Smoke testes', () => {

    it('should exits the method sum', () => {
      expect(sum).to.exist;
    });

    it('should exits the method sub', () => {
      expect(sub).to.exist;
    });

    it('should exits the method mult', () => {
      expect(mult).to.exist;
    });

    it('should exits the method div', () => {
      expect(div).to.exist;
    });

  });

  describe('Sum Method', () => {
    it('should return 4 when `sum(2,2)`', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });

    it('should return -4 when `sum(6,10)`', () => {
      expect(sum(6, 10)).to.be.not.equal(-4);
    });
  });

  describe('Sub Method', () => {
    it('should return 8 when `sub(18,10)`', () => {
      expect(sub(18, 10)).to.be.equal(8);
    });

    it('should return 4 when `sub(8,4)`', () => {
      expect(sub(8, 4)).to.be.equal(4);
    });
  });

  describe('Div Method', () => {
    it('should return 10 when `div(20,2)`', () => {
      expect(div(20, 2)).to.be.equal(10);
    });

    it('should return 4 when `div(8,4)`', () => {
      expect(div(8, 4)).to.be.equal(2);
    });
  });

  describe('Mult Method', () => {
    it('should return 36 when `mult(6,6)`', () => {
      expect(mult(6, 6)).to.be.equal(36);
    });

    it('should return 32 when `mult(8,4)`', () => {
      expect(mult(8, 4)).to.be.equal(32);
    });
  });

});
