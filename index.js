/**
 * Get the bounding square around the polygon
 * @param {Object} polygon
 * @param {Number} fixed - numbers after decimal
 * @returns {{left: Number, top: Number, right: Number, bottom: Number}}
 */
module.exports = (polygon, fixed = 4) => {
  const sq = {
    left: undefined,
    top: undefined,
    right: undefined,
    bottom: undefined
  };
  polygon.map(parts => parts.map(coords => {
    const x = coords[0];
    const y = coords[1];

    if (x < sq.left || undefined === sq.left) sq.left = x;
    else if (x > sq.right || undefined === sq.right) sq.right = x;

    if (y < sq.bottom || undefined === sq.bottom) sq.bottom = y;
    else if (y > sq.top || undefined === sq.top) sq.top = y;
  }));
  sq.left = sq.left.toFixed(fixed);
  sq.top = sq.top.toFixed(fixed);
  sq.right = sq.right.toFixed(fixed);
  sq.bottom = sq.bottom.toFixed(fixed);
  return sq;
};
