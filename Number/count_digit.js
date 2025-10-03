/*
Num = 786
output = 3


*/
//even number
function countDigit(n) {
    let cout = 0;
    while (n > 0) {
        if (n % 2!== 0) {
            cout++;
        }
        n = Math.floor(n / 10);
    }
    console.log(cout);
}
let num = 783457;
countDigit(num);