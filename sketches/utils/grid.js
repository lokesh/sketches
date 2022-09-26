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
