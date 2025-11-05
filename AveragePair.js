const arr = [-11, 0, 1, 2, 3, 9, 14, 17, 21];
const avg = 1.5;
/**
 * Finds all pairs of numbers in the given array whose average is equal to the specified value.
 *
 * @param {number[]} arr - The array of numbers to search through.
 * @param {number} avg - The target average value.
 * @returns {void} This function does not return a value, but logs the pairs to the console.
 */
const averagePair = (arr, avg) => {
  let temp = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) / 2 === avg) {

      }
    }
  }
  console.log(temp);
};
averagePair(arr, avg);


