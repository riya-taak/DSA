
/*
1 0 1 0 1
0 1 0 1
0 1 0
1 0
1


*/

function printLeftDownTriangle(n) {
    let a = 1;
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= (n - i) + 1; j++) {

            row = row + a + " ";
            if (a == 0) {
                a = 1;
            }
            else {
                a = 0;
            }
        }
        console.log(row);
    }
}

let size = 5;
printLeftDownTriangle(size);