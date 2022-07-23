// 計算兩個陣列的交集
// 使用counter技巧
// 此種技巧很吃記憶體空間

// intersection([1,2,3,4,5,6],[5,6,7])
// Answer is [5,6]

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [5, 6, 7, 7, 8];

const intersection = (arr1, arr2) => {
  let arr1_uq = [...new Set(arr1)];
  let arr2_uq = [...new Set(arr2)];
  let arr3 = arr1_uq.concat(arr2_uq);
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
