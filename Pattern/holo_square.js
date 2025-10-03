
/*

X X X X X X
X         X
X         X
X         X
X X X X X X        

*/

function holo_Square(n) {
    for(let i=1; i<=n; i++)
    {
        let row = " ";
        for(let j=1; j<=n; j++)
        {
            if(i==n||j==n||i+j==n+1||j>n-i)
            {
                row = row + "X ";
            }
            else
            {
                row = row + "  ";
            }
        }
        console.log(row);
    }
}

let size = 10;
holo_Square(size);