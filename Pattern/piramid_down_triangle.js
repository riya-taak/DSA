/*
X X X X X X X
  X X X X X
    X X X
      X

i= 1,                 2             3        4
j= 1,2,3,4,5,6,7      1,2,3,4,5     1,2,3    1
n=4
i=1, 2, 3
s=0  1  2

j<=(n-i)*2+1
*/



function piramid_down_triangle(n) {


    for (let i = 1; i <= n; i++) {
        let row = " ";
        for(let s=1; s<=i-1; s++)
        {
            row = row+ "  ";
        }
        for (let j = 1; j <= (n - i) * 2 + 1; j++) {
            row = row + " X";
        }
        console.log(row);
    }


}

let size = 4;
piramid_down_triangle(size);
