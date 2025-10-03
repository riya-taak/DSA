
/*

0 X X X X 0
X 0 X X 0 X
X X 0 0 X X
X X 0 0 X X
X 0 X X 0 X
0 X X X X 0




*/

function printLeftDownTriangle(n) {
    let a = 1;
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <=n; j++) {

            if (i==j || i+j==n+1) {
                a = 0;
            }
            else {
                a = "X";
            }
            row = row + a + " ";

        }
        console.log(row);
    }
}

let size = 3;
printLeftDownTriangle(size);