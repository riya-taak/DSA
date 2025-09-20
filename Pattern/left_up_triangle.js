/*

 
X
X X
X X X
 
X
X X
X X X

X
X X
X X X

=============

X
X X
X X X
X X X X
 
X
X X
X X X
X X X X

X
X X
X X X
X X X X

i=1,   2,    3,          4,
j=1,   1,2,  1, 2 ,3     1,2,3,4
 
i=1,           2,
j=1,2,3,4,5    1,2,3,4
s=0,           1                  
*/

function printLeftUpTriangle(n) {
    for (let x = 1; x < 3; x++) { // print group of triangle

        for (let a = 1; a <= 3; a++) { // print triangle

            for (let i = 1; i <= (n+x)-1; i++) { // print line
                let row = " ";
                for (let j = 1; j <= i; j++) { // print star
                    row = row + "X ";

                }
                console.log(row);
            }
            console.log(" ");
        }
        if(x==1)
        {
            console.log("=============");
        }

    }

}


let size = 3;
printLeftUpTriangle(size);