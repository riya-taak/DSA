 /*


X X X X X
X X X X X
X X X X X
X X X X X
X X X X X

i=0,1,2,3,4
j=0,1,2,3,4

X X X X X 
X X X X X 
X X X X X 
X X X X X 
X X X X X 



*/
 


 function printRectangle(n)
 {
    for(let i=0; i<n; i++)
    {
        let row = " ";
        for(let j=0; j<n; j++)
        {
         row = row + "X ";
        }
        console.log(row);
    }

 }

let size=5;
printRectangle(size);