// not same freq (a,b,b,c)=>1a2b1c (a,a,b,c)=>2a1b1c
// same freq (a,a,b,c,) / (a,b,a,c)

const sameFrequence = (str1, str2) => {
  // string to array
  let arr1 = str1.split("");
  let arr2 = str2.split("");
  if (arr1.length !== arr2.length) {
    console.log(`string1_${str1} and string2_${str2} is not same`);
    return -1;
  }
  // counter skill
  let counter1 = {};
  let counter2 = {};

  arr1.map((val, index) => {
    if (!counter1[val]) {
      counter1[val] = 1;
    } else {
      counter1[val]++;
    }
  });
  arr2.map((val, index) => {
    if (!counter2[val]) {
      counter2[val] = 1;
    } else {
      counter2[val]++;
    }
  });
  Object.keys(counter1).forEach((key) => {
    if (!counter2[key]) {
      console.log(`two frequence is not same`);
      return false;
    } else if (counter2[key] !== counter1[key]) {
      console.log(`two frequence is not same`);
      return false;
    }
    return true;
  });
  console.log(`string1_${str1} and string2_${str2} is same Freq`);
};

sameFrequence("abbc", "bbca");
sameFrequence("abbc", "bbcaa");
