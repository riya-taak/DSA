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
  // for (let i = 1; i <= n; i++) {
  //   row = " ";
  //   for (let j = 1; j <= n; j++) {
  //     if (j <= n - i) {    if()
  //       row = row + "  ";
  //     }
  //     else {
  //       row = row + "X ";
  //     }
  //   }

  //   for (let j = 1; j < i; j++) {
  //     row = row + "X ";
  //   }
    

  //   console.log(row);
  // }


/*
  X X X X X X X 
    X X X X X
      X X X
        X
i=1
j=1,


*/




  for (let i = 1; i <= n; i++) {
    row = " ";
    for (let j = 1; j <= n; j++) {
      if (j <= n - i) {
        row = row + "X ";
      }
      else {
        row = row + "  ";
      }
    }

    for (let j = 1; j < i; j++) {
      row = row + "X ";
    }
    

    console.log(row);
  }
}

  let size = 5;
  Diamond_Triangle(size);
