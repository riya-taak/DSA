/*


X X X X X
X X X X
X X X
X X
X
*/

function printLeftDownTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= (n - i) + 1; j++) {

            row = row + "X ";
        }

        console.log(row);
    }
}

 

let size = 5;
printLeftDownTriangle(size);


