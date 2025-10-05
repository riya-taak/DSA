/*
 row= [1,]
 i= 0,1,2
 cout= 3
 j=1,2,3,4,5,6,7,8,9

D==D
A==D
Y==D
A==D
W==D
A==D
N==D
T==D
I==D
row[0]=1

A==A
Y==A
A==A
W==A
A==A
N==A
T==A
I==A
row[1]=3


*/



function Count_string(n)
{
    let row={};
    for(let i=0;i<n.length;i++)
        {
        let cout=0;
        for(let j=i;j<n.length;j++)
        {
            if(n[j]==n[i])
            {
                cout++;
            }
        }
        n[i]:cout;
    }    

}
let size ="DAYAWANTI";
console.log(Count_string(size));
