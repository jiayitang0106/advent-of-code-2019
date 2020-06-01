const countAsteroidII = function(input) {
  const occupied = '#';

  const grid = new Array();
  for (let elements of input.split('\n')) {
    grid.push(elements.split(''));
  }

  let AsterPosition = [0, 0];
  let mostCounts = 0;
  let ans = [];
  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (grid[y][x] !== occupied) continue;
      //same slope only caculated once
      let posSlopeSet = new Set();
      let negSlopeSet = new Set();
      for (let StartX = 0; StartX < grid[0].length; StartX++) {
        for (let StartY = 0; StartY< grid.length; StartY++) {
          if (grid[StartY][StartX] !== occupied || (StartY === y && StartX === x)) continue;

          const slope = (StartX - x) / (StartY - y);
          if (StartX > x) {
            posSlopeSet.add(slope);
          } else {
            negSlopeSet.add(slope);
          }
        }
      }

      const counts = posSlopeSet.size + negSlopeSet.size;
      if (counts > mostCounts) {
        mostCounts = counts;
        AsterPosition = [x, y];
      }
    }
  }

  const x = AsterPosition[0];
  const y = AsterPosition[1];
  //object's key is the slope, object's value is the coordinate with the same slope
  const posSlope = {};
  const negSlope = {};

  for (let tX = 0; tX < grid[0].length; tX++) {
    for (let tY = 0; tY < grid.length; tY++) {
      if (grid[tY][tX] !== occupied) continue;
      if (tY === y && tX === x) continue;

      const g = (tX - x) / (tY - y);
      if (tX > x || (tX === x && tY < y)) {
        posSlope[g] = posSlope[g] || [];
        posSlope[g].push([tX, tY]);
      } else {
        negSlope[g] = negSlope[g] || [];
        negSlope[g].push([tX, tY]);
      }
    }
  }
  //distance from staring aster
  function distance(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2));
  }

  //sort key value (slope) by slope
  function sortByGIncZero(keys) {
    const k = [...keys];
    const pos = k.filter(a => a >= 0).sort((a, b) => a - b);
    const neg = k.filter(a => a < 0).sort((a, b) => a - b);
    return [...pos, ...neg];
  }

  function sortByGExZero(keys) {
    const k = [...keys];
    const pos = k.filter(a => a > 0).sort((a, b) => a - b);
    const neg = k.filter(a => a <= 0).sort((a, b) => a - b);
    return [...pos, ...neg];
  }

  //sort key value (slope) by distance
  for (const key of Object.keys(posSlope)) {
    posSlope[key].sort((a, b) => distance([x, y], a) - distance([x, y], b));
  }
  for (const key of Object.keys(negSlope)) {
    negSlope[key].sort((a, b) => distance([x, y], a) - distance([x, y], b));
  }

  let vanished = 0;
  while (vanished < 200) {
    for (const g of sortByGIncZero(Object.keys(posSlope).map(a => parseFloat(a)))) {
      if (posSlope[g] && posSlope[g].length) {
        vanished++;
        if (vanished === 200) console.log(posSlope[g][0]);
        posSlope[g].shift();
      }
    }

    for (const g of sortByGExZero(Object.keys(negSlope).map(a => parseFloat(a))).reverse()) {
      if (negSlope[g] && negSlope[g].length) {
        vanished++;
        if (vanished === 200){
          ans = negSlope[g][0];
        }
      }
    }
  }
let output = 0;
output += ans[0] * 100;
output += ans[1];
return output;
}

module.exports = countAsteroidII;