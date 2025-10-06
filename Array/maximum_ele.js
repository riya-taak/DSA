function maxEle(arr)
{
    let max=-Infinity;
    for(let i=0; i<arr.length;i++)
    {  
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }
    return max;

}
let arr=[-3,-6,-8,-2,-7,-4];
console.log(maxEle(arr));