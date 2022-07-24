const arr = [-11, 0, 1, 2, 3, 9, 14, 17, 21];
const avg = 1.5;
const averagePair = (arr, avg) => {
  let temp = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i], arr[j]);
      if ((arr[i] + arr[j]) / 2 == avg) {
        temp.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(temp);
};

averagePair(arr, avg);
