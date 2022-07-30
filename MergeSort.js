let arr = [15, 3, 17, 18, 35, 11, 0, 36, -336, 1054];

const merge = (a1, a2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      result.push(a1[i]);
      i++;
    } else {
      result.push(a2[j]);
      j++;
    }
  } //while
  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }
  return result;
};

const mergeSort = (arr) => {
  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left_array = arr.slice(0, middle);
    let right_array = arr.slice(middle, arr.length);
    return merge(mergeSort(left_array), mergeSort(right_array));
  }
};

console.log(mergeSort(arr));
//console.log(merge([1, 3, 4], [2, 5, 8]));
