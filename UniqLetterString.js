// string = 'abcdefghijklmn'
// string[2]=c

const uniqLetterString = (str) => {
  let start_point = 0;
  let end_point = 0;
  let counter = {};
  let maxLength = -Infinity;
  while (end_point < str.length) {
    if (counter[str[end_point]]) {
      counter[str[start_point]]--;
      start_point++;
    } else {
      counter[str[end_point]] = 1;
      end_point++;
      if (end_point - start_point > maxLength) {
        maxLength = end_point - start_point;
      }
    }
  }
  if (maxLength === -Infinity) {
    console.log(`can not find the uqLetters`);
    return null;
  }
  console.log(maxLength);
  return maxLength;
};

uniqLetterString("thisishowwedoit"); // 6
uniqLetterString(""); // not found
