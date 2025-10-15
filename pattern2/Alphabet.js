/*
* * * * *
    * 
    * 
    *
* * * * *
i=1,2
j=1
row="  * * * * * *"

 * * * * * 


alphabet program
*/

function Alphabat(n)
{
    for(let i=1;i<=n;i++)
        {
        let row =" ";
        for(let j=1;j<=n;j++)
        {
            if(i==1||i==n||j==Math.ceil(n/2))
            {
                row = row + " *";
            }
            else
            {
                row = row + "  ";
            }

        }
        console.log(row);
    }
}
let size = 15;
Alphabat(size);