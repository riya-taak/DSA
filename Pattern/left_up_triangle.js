 /*

 
X
X X
X X X
X X X X
X X X X X

i=1,   2,    3,          4,
j=1,   1,2,  1, 2 ,3     1,2,3,4
 
i=1,           2,
j=1,2,3,4,5    1,2,3,4
s=0,           1                  
*/

 function printLeftUpTriangle(n)
 {
    for(let i=1; i<=n; i++)
    {
        let row = " ";
        for(let j=1; j<=i; j++)
        {
         row = row + "X ";
         
        }
            console.log(row);
    }

 }

let size=5;
printLeftUpTriangle(size);