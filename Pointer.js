// use pointer skills
// input array must be sorted
const arr = [100, -11, 0, 1, 2, 3, 9, 14, 17, 21];
const avg = 1.5;

const averagePair = (arr, avg) => {
  // array must be sorted
  arr = arr.sort((a, b) => a - b);
  let result = [];
  let left_point = 0;
  let right_point = arr.length - 1;
  while (left_point < right_point) {
    if ((arr[left_point] + arr[right_point]) / 2 > avg) {
      right_point--;
    } else if ((arr[left_point] + arr[right_point]) / 2 < avg) {
      left_point++;
    } else if ((arr[left_point] + arr[right_point]) / 2 == avg) {
      result.push([arr[left_point], arr[right_point]]);
      left_point++;
      right_point--;
    }
  }
  console.log(result);
};

averagePair(arr, avg);
