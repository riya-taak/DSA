/*
kantadevi=[k,n,a,e,i]
           0,2,4,6,8  = even number

*/

function Word_String(n) {
  let arr=[];
  let cout = 0;
  for (let i = 0; i <= n.length; i++) {
    if (i % 2 == 0) {
    //  arr.push(n[i]);
    arr[cout]=n[i];
    cout++;
    }
  }
  return arr;

}
let size = "Kantadevi";
console.log(Word_String(size));