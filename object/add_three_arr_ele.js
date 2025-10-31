/*
add three array element


*/


function add_ele(n)
{
            let a =n[0];
            let b =Math.floor(n.length/2);
            let bb= n[b];
            let c =n[n.length-1];
            let add = a+bb+c;
            console.log(add);
}

let arr=[1,4,8,2,2];
add_ele(arr);