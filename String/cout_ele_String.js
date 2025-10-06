/*
 row= {p:2,r:1,o:1,e:1}
 i=0,1,2,3,4

*/



function Count_string(n) {
    let row = {};
    for (let i = 0; i < n.length; i++) {
        // if (n[i] in row) {
        if(row[n[i]])
        {
            row[n[i]]++;
        }
        else {
            row[n[i]] = 1;
        }
    }
    return row;
}
let size = "propertiees";
console.log(Count_string(size));
