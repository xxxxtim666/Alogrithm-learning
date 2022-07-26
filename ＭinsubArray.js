function minSubArray(arr, sum) {
  let start_point = 0;
  let end_point = 0;
  let totalSum = 0;
  let minLength = Infinity;

  while (start_point < arr.length) {
    if (totalSum < sum && end_point < arr.length) {
      totalSum = totalSum + arr[end_point];
      end_point++;
    } else if (totalSum >= sum) {
      let currentLength = end_point - start_point;
      if (minLength > currentLength) {
        minLength = currentLength;
      }
      totalSum = totalSum - arr[start_point];
      start_point++;
    } else if (end_point >= arr.length) {
      break;
    }
  }

  if (minLength === Infinity) {
    console.log("Cannot find subarray that can sum up to the given number");
    return -1;
  } else {
    console.log(minLength);
    return minLength;
  }
}

minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 70);
