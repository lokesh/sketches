/**
 * Generate 2d array
**/
function make2dArray(rows, cols, defaultVal = 0) {  
  let arr = Array(rows).fill(0).map(x => Array(cols).fill(0));

  for (let row = 0; row < o.rows; row++) {
    for (let col = 0; col < o.cols; col++) {  
      if (typeof defaultVal === 'function') {
        arr[row][col] = defaultVal();
      } else {
        arr[row][col] = defaultVal;
      }
    }
  }
  return arr; 
}


const MOORE_NEIGHBORHOOD = 'moore';
const VON_NEUMANN_NEIGHBORHOOD = 'von neumann';

function getNeighbors(row, col, range, neighborhood) {
  let neighbors = [];

  if (neighborhood === MOORE_NEIGHBORHOOD) {
    for (let i = range * -1; i <= range; i++) {
      let rowIndex = (row + i);

      for (let j = range * -1; j <= range; j++) {
        if (i === 0 && j === 0) continue;

        let colIndex = (col + j);  

        if (o.wrap) {
          rowIndex = (rowIndex + o.rows) % o.rows; 
          colIndex = (colIndex + o.cols) % o.cols;
        }

        if (rowIndex < 0 || rowIndex >= o.rows
          || colIndex < 0 || colIndex >= o.cols){
          continue;
        }      
        neighbors.push(grid[rowIndex][colIndex]);
      }
    }
  } else {
    for (let i = range * -1; i <= range; i++) {
      if (i === 0) continue;
      let rowIndex = (row + i);
      let colIndex = (col + i);

      if (o.wrap) {
        rowIndex = (rowIndex + o.rows) % o.rows; 
        colIndex = (colIndex + o.cols) % o.cols; 
      }

      if (rowIndex >= 0 && rowIndex < o.rows) {
        neighbors.push(grid[rowIndex][col]);
      }
      if (colIndex >= 0 && colIndex < o.cols) {
        neighbors.push(grid[row][colIndex]);
      }
    }
    // console.log(neighbors.length);
  }


  return neighbors;
}