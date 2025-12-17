/**
 * @author Brayden Thistle
 * @version 1.0.0
 * @date 2025-12-17
 * @fileoverview this program displays a 10x10 grid of X's
 */

//output
console.log("10x10 Grid of X's:");

//loop 1
for (let RowVariable = 1; RowVariable <= 10; RowVariable++) {
  let letter = "";

  //loop 2
  for (let CollumnVariable = 1; CollumnVariable <= 10; CollumnVariable++) {
    letter += "X".padStart(4);
  }
  console.log(letter);
  }
//output
console.log("\nDone.")

