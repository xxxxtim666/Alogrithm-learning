const slidingWindow = (arr, maskSize) => {
  let maxSum = -Infinity;
  let minSum = Infinity;
  if (maskSize > arr.length) {
    return -1;
  } else {
    for (let i = 0; i <= arr.length - maskSize; i++) {
      let temp = 0;
      for (let j = i; j < i + maskSize; j++) {
        console.log(i, arr[j]);
        temp = temp + arr[j];
      }
      if (temp >= maxSum) {
        maxSum = temp;
      } else if (temp <= minSum) {
        minSum = temp;
      }
    }
    console.log(`maxSum = ${maxSum}`);
    console.log(`minSum = ${minSum}`);
  }
};

slidingWindow([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // 12
//minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3); // -28
