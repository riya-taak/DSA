/*
      *
    * *
  * * *
* * * *
i=1,

i=1
j=1,2,3,4,5
row=" _ _ _ _" 

 _ _ _ *



*/

function PrintRight_up(n) {
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= n; j++) {
            if (j <= n - i) {
                row = row + "  ";
            }
            else {
                row = row + " X";
            }
        }
        console.log(row);
    }
}
let size = 4;
PrintRight_up(size);