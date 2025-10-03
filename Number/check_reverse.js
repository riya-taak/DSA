/*
Num = 786
output= false

num= 1234321
output=true

step1 : undestand the problem
step2 : think about solution (paper and pen)
step3 : think about corner/edge cases
step4 : start coding


 
         
*/
//even number
function countDigit(n) {
    let cout = 0;
    let b = n;
   while(n!=0)
   {
    let a=n%10;    //a= 7%10 = 7    ,a=7
    cout=cout*10+a;   // cout=68*10+7  = 680+7=687 , cout=687
    n=Math.floor(n/10);     //n=7/10=0.7  ,n=0
   }  
   console.log("n ", n);
   console.log("cout " , cout);
   console.log("b" , b);
//    if(b==cout)
//    {
//     return true;
//    }
//    else{
//    return false;
//    }
  return b==cout
}
let num = 1234321;
console.log(countDigit(num));