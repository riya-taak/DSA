/* 
        X
      X X X
    X X X X X
  X X X X X X X
X X X X X X X X X
  X X X X X X X
    X X X X X
      X X X
        X

*/
function Diamond_Triangle(n) {

  let row;
  for (let i = 1; i < n; i++) {
    row = " ";
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        row = row + "  ";
      }
      else {
        row = row + "X ";
      }
    }
    for (let j = 1; j < i; j++) {
      row = row + "X ";
    }
    console.log(row);
  }
  for (let i = 1; i <= n; i++) {
        let row = " ";
        for(let s=1; s<=i-1; s++)
        {
            row = row+ "  ";
        }
        for (let j = 1; j <= (n - i) * 2 + 1; j++) {
            row = row + "X ";
        }
        console.log(row);
    }
}

let size = 10;
Diamond_Triangle(size);
