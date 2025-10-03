/*
Num = 786
output = 687

786%10=6
786/10=78

6*10=60+8=68*10=680+7=687
10 | 70 | 7
    -70
     0

10 | 70 | .7
     70
     0

 10 |0.7| 

 cout =687
 n=7
 a=8

 
         
*/
//even number
function countDigit(n) {
    let cout = 0;
   while(n!=0)
   {
    let a=n%10;    //a= 7%10 = 7    ,a=7
    cout=cout*10+a;   // cout=68*10+7  = 680+7=687 , cout=687
    n=Math.floor(n/10);     //n=7/10=0.7  ,n=0
   }
    console.log(cout);
}
let num = 786;
countDigit(num);