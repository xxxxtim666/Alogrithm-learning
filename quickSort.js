const arr = [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666];
const partition = (p, r) => {
  // r=array.length-1
  let x = arr[r]; // pivot
  let i = p - 1;
  for (let j = i; j <= r - 1; j++) {
    if (arr[j] <= x) {
      i = i + 1;
      // swap arr[j] and arr[i]
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  // swap arr[i+1] and arr[r]
  let temp = arr[i + 1];
  arr[i + 1] = arr[r];
  arr[r] = temp;
  return i + 1;
};
const quickSort = (p, r) => {
  if (p < r) {
    let q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
  return arr;
};

console.log(quickSort(0, arr.length - 1));
