/*
i=1,2 ,3            
j=1,2,3

X X X X X
_ X X X X
_ _ X X X
_ _ _ X X 
_ _ _ _ X

*/

function printRightDownTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= n; j++) {
            if (j < i) {
                row = row + "  ";
            }

            else {
                row = row + "X ";
            }
        }

        console.log(row);
    }

}

let size = 5;
printRightDownTriangle(size);