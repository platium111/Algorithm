/**
 * TWO DIMENSION ARRAY | How to represent?
 *  2 array a[0...n] and b[0...n]
 *  array of array a[0][0] a[0][1] b[0][0] b[0][1]
 *  -> not want to manual -> using 2 for
 *  -> the same for 2 DIMENSION ARRAY
 */

// day 1
let averageTemp = []; // set to avoid error in next line
averageTemp[0] = []; // need to set like this
averageTemp[0][0] = 72;
averageTemp[0][1] = 75;
averageTemp[0][2] = 79;
averageTemp[0][3] = 79;
averageTemp[0][4] = 81;
averageTemp[0][5] = 81;
// day 2
averageTemp[1] = [];
averageTemp[1][0] = 81;
averageTemp[1][1] = 79;
averageTemp[1][2] = 75;
averageTemp[1][3] = 75;
averageTemp[1][4] = 73;
averageTemp[1][5] = 73;

function print2DimensionMaxtrix(myMatrix) {
  for (let i = 0; i < myMatrix.length; i++) {
    let eachRow = ""; // set this string to avoid undefined display
    // ! most important is matrix[i].length
    for (let j = 0; j < myMatrix[i].length; j++) {
      eachRow = `${eachRow} ${myMatrix[i][j]}`;
    }
    console.log(eachRow);
  }
}

print2DimensionMaxtrix(averageTemp);
