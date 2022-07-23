// 計算兩個陣列的交集
// 使用counter技巧
// 此種技巧很吃記憶體空間

// intersection([1,2,3,4,5,6],[5,6,7])
// Answer is [5,6]

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [5, 6, 7, 7, 8];

const intersection = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2);
  //console.table(arr3);
  let counter = {};
  let answer = [];
  arr3.map((val, index) => {
    if (!counter[val]) {
      counter[val] = 1;
    } else {
      counter[val]++;
    }
  });
  //console.table(counter);

  // counter.map((val, index) => {
  //   if (val >= 2) {
  //     answer.push(index);
  //   }
  // });

  Object.keys(counter).forEach((key) => {
    if (counter[key] >= 2) {
      answer.push(key);
    }
  });
  console.table(answer);
};

intersection(arr1, arr2);
