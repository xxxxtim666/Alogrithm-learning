const isSubsequence = (str1, str2) => {
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  let pointer_1 = 0;
  let pointer_2 = 0;

  // case1 : string1如果是空字串的話，一定是subsequence
  if (arr1.length == 0) {
    console.log(`str1 ${str1} and str2 ${str2} are subsequence`);
    return true;
  }
  while (pointer_2 < arr1.length) {
    if (arr1[pointer_1] === arr2[pointer_2]) {
      pointer_1++;
    } else if (pointer_1 >= arr1.length) {
      console.log(`str1 ${str1} and str2 ${str2} are subsequence`);
      return true;
    }
    pointer_2++;
  }
  console.log(`not subsequence`);
  return false;
};

// isSubsequence("hello", "hello Dear"); // true
// isSubsequence("book", "brooklyn"); // true
isSubsequence("abc", "bac"); // false (order matters)
isSubsequence("", "abc"); // true
