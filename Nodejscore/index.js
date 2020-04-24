// const square = {
//     area: (a) => (a * a),
//     perimeter: (a) => (4 * a)
// }
const square = require("./square");

const calsquare = (a) => {
    console.log(`the vale of a is  ${a}  and the area is `
        + square.area(a));
    console.log(`the vale of a is  ${a}  and the parimeter is `
        + square.perimeter(a));

}
console.log(__filename);
console.log(__dirname);

calsquare(5);




















// console.log("hello world")


