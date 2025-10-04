function Count_string(n)
{
    let row;
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
        row[i] = cout;
    }    
    return cout;
}
let size ="DAYAWANTI";
console.log(Count_string(size));
