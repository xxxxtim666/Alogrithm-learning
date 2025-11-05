const arr1 = ["a", "u ", "f"];
const arr2 = ["z", "u", "s"];
// 判斷兩個矩陣中的元素,如果有一樣的話 回傳true / false

// use counterSkill to answer this question
// step1 : transform arr1 to object structure
function counterSkill(arr1, arr2) {
  let object1 = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!object1[arr1[i]]) {
      const item1 = arr1[i];
      object1[item1] = true;
    }
  }
  //   console.log(object1);
  // step2;
  for (let j = 0; j < arr2.length; j++) {
    if (object1[arr2[j]]) {
      return true;
    }
    return false;
  }
}
console.log(counterSkill(arr1, arr2));
