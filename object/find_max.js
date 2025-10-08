
function findMax(obj) {
    let max ={
        k:"",
        v:-Infinity
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];
            if (value > max.v) {
                max.v = value;
                max.k = key;
            }
        }
    }
    return max.k;

}

let obj = {
    a: 34,
    b: 89,
    c: 100,
    d: 56,
    e: 48
}
console.log(findMax(obj));