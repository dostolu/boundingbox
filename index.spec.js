/* eslint-disable no-undef */
const { expect } = require('chai');
const sq2po = require('./index.js');

const polygonFixture = [[
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8]
], [
  [5, 6],
  [7, 8],
  [9, 10]
], [
  [2, 4],
  [1, 3],
  [5, 8]
]];
const expectedSquare = {
  left: '1',
  top: '10',
  right: '9',
  bottom: '2'
};

describe('Polygon to square', () => {
  it('should return proper values for square within the random polygon', () => {
    expect(expectedSquare).to.be.deep.equal(sq2po(polygonFixture, 0));
  });
});

