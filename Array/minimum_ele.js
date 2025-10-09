/*
 minimum element ......

*/



function maxEle(arr)
{
    let min=Infinity;
    for(let i=0; i<arr.length;i++)
    {  
        if(arr[i]<min)
        {
            min=arr[i];
        }
    }
    return min;

}
let arr=[3,6,8,2,7,4];
console.log(maxEle(arr));