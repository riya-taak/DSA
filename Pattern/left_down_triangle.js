/*


X X X X X
X X X X
X X X
X X
X

i=1,            2           3           4       5
j=1,2,3,4,5     1,2,3,4     1,2,3       1,2     1
n=5
              
i=1,2,3
j=1,2,3,4,5,6
6<=4

X X X X X
X X X X _
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