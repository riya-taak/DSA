
/*

1 0 1 0 1
0 1 0 1
1 0 1
0 1
1


*/

function printLeftDownTriangle(n) {
    let a = 1;
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= (n - i) + 1; j++) {

            if ((i % 2 == 0 && j % 2 == 0) || (j % 2 !== 0 && i % 2 !== 0)) {
                a = 1;
            }
            else {
                a = 0;
            }
            row = row + a + " ";

        }
        console.log(row);
    }
}

let size = 10;
printLeftDownTriangle(size);