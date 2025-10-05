let obj = {
    fruit: "apple",
    veg: "tomato",
    "color": "Red",
    23: "odd",
    Age: 21,
    "status": true,
    false: "okk",
    even: [34, 56, 78, 32],
    cout() {
        console.log("This is cout");
    },
    getName: function () {
        console.log("My name is Riya");
    }
}
console.log(obj.false);
console.log(obj[23]);
obj.cout();
obj.getName();