const palindrome = (str) => {
  str = str.toLowerCase();
  let arr = str.split("");
  let left_point = 0;
  let right_point = arr.length - 1;

  while (left_point <= right_point) {
    if (arr[left_point] == arr[right_point]) {
      left_point++;
      right_point--;
    } else {
      console.log(`this case ${str}is not match`);
      return false;
    }
  }
  console.log(`this case ${str} is match`);
  return true;
};

palindrome("Tacocat"); // true
palindrome("amanaplanacanalpanama"); // true
palindrome("asdfsafeaw"); // false
