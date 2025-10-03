 function string(n , ch)
 {
    
    
    let cout=0;
    for(let i=0; i<n.length;i++)
    {
        if(n[i]==ch)
        {
             cout++;
        }
        // console.log(a[i]);
    
    }
    return cout;
 }
 
 let str ="Apple";
 console.log(string(str,"p"));
 