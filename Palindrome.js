/**
 * 回文檢查器 (Palindrome Checker) - 使用雙指針技巧
 * 
 * 功能：檢查字串是否為回文（正讀反讀都相同）
 * 時間複雜度：O(n) - n 為字串長度
 * 空間複雜度：O(n) - 需要將字串轉換為陣列
 * 
 * 回文範例：
 * - "racecar" ✓
 * - "tacocat" ✓
 * - "amanaplanacanalpanama" ✓
 * - "hello" ✗
 * 
 * 演算法：
 * 1. 將字串轉為小寫（統一大小寫）
 * 2. 使用左右雙指針從兩端向中間移動
 * 3. 比較左右指針指向的字元
 * 4. 若不同則非回文，若相同則繼續移動指針
 * 5. 直到指針相遇或交錯
 * 
 * @param {string} str - 要檢查的字串
 * @returns {boolean} 是否為回文
 */
const isPalindrome = (str) => {
  // 轉換為小寫並分割成字元陣列
  str = str.toLowerCase();
  const charArray = str.split("");
  
  let leftPointer = 0;
  let rightPointer = charArray.length - 1;
  
  // 雙指針從兩端向中間移動
  while (leftPointer <= rightPointer) {
    if (charArray[leftPointer] === charArray[rightPointer]) {
      // 字元相同，繼續移動指針
      leftPointer++;
      rightPointer--;
    } else {
      // 字元不同，不是回文
      console.log(`"${str}" 不是回文`);
      return false;
    }
  }
  
  // 所有字元都匹配，是回文
  console.log(`"${str}" 是回文`);
  return true;
};

// 測試案例
console.log('=== 回文檢查測試 ===');
isPalindrome("Tacocat");                 // true
isPalindrome("amanaplanacanalpanama");   // true
isPalindrome("asdfsafeaw");              // false
isPalindrome("racecar");                 // true
isPalindrome("hello");                   // false

// 優化版本：不需要轉換為陣列
const isPalindromeOptimized = (str) => {
  str = str.toLowerCase();
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) {
      console.log(`"${str}" 不是回文（優化版）`);
      return false;
    }
    left++;
    right--;
  }
  
  console.log(`"${str}" 是回文（優化版）`);
  return true;
};

console.log('\n=== 優化版本測試 ===');
isPalindromeOptimized("Tacocat");
