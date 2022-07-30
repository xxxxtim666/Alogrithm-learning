let result = [];
const collection = (arrs) => {
  arrs.map((val) => {
    if (Array.isArray(val)) {
      collection(val);
    } else {
      result.push(val);
    }
  });
};
let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

collection(arrs);
console.log(result);
//console.log(result);
