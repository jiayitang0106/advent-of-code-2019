const countAsteroidI = function(input) {
  const grid = [];
  for (const element of input.split('\n')) {
    grid.push(element.split(''));
  }
  let occupied = '#';
  let mostCount = 0;

  for (let x = 0; x < grid[0].length; x++) {
    for (let y = 0; y < grid.length; y++) {
      if (grid[y][x] !== occupied) continue;
      const posSlope = new Set();
      const negSlope = new Set();

      for (let tX = 0; tX < grid[0].length; tX++) {
        for (let tY = 0; tY < grid.length; tY++) {
          if (grid[tY][tX] !== occupied) continue;
          if (tY === y && tX === x) continue;

          const g = (tX - x) / (tY - y);
          if (tX > x || (tX === x && tY > y)) {
            posSlope.add(g);
          } else {
            negSlope.add(g);
          }
        }
      }
      const counts = posSlope.size + negSlope.size;
      mostCount = Math.max(counts, mostCount);
    }
  }
return mostCount;
};

module.exports = countAsteroidI;