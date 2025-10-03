/*
_ _ _ _ X
_ _ _ X X
_ _ X X X
_ X X X X 
X X X X X
 i=1,2,3,4,5
 j=1,2,3,4,5,6
 n=5-3
  
 _ _ _ _ X
 _ _ _ X X
 _ _ X X X
 _ X X X X
 X X X X X 

 O(n^2)


*/
function printRightUpTriangle(n) {


    for (let i = 1; i <= n; i++) {
        let row = " ";
        for (let j = 1; j <= n; j++) {
            if(j<=n-i)
            {
                row =row + "  ";
            }
            else
            {
                row = row + "X ";
            }
        }
        console.log(row);
    }
}





let size = 5;
printRightUpTriangle(size);