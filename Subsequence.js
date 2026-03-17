/**
 * 子序列檢查器 (Subsequence Checker) - 使用雙指針技巧
 * 
 * 功能：檢查 str1 是否為 str2 的子序列
 * 時間複雜度：O(n + m) - n 和 m 分別為兩字串長度
 * 空間複雜度：O(1) - 只使用常數額外空間（優化版）
 * 
 * 子序列定義：
 * - str1 的所有字元按順序出現在 str2 中
 * - 字元不需連續，但必須保持相對順序
 * 
 * 範例：
 * - "hello" 是 "hello Dear" 的子序列 ✓
 * - "book" 是 "brooklyn" 的子序列 ✓（b-o-o-k）
 * - "abc" 不是 "bac" 的子序列 ✗（順序不對）
 * 
 * 演算法：
 * 1. 使用兩個指針分別指向兩個字串
 * 2. 當字元匹配時，移動 str1 的指針
 * 3. 每次都移動 str2 的指針
 * 4. 若 str1 指針走到底，則為子序列
 * 
 * @param {string} str1 - 要檢查的子序列
 * @param {string} str2 - 主字串
 * @returns {boolean} str1 是否為 str2 的子序列
 */
const isSubsequence = (str1, str2) => {
  let pointer1 = 0; // str1 的指針
  let pointer2 = 0; // str2 的指針
  
  // 空字串是任何字串的子序列
  if (str1.length === 0) {
    console.log(`"${str1}" 是 "${str2}" 的子序列（空字串）`);
    return true;
  }
  
  // 遍歷 str2
  while (pointer2 < str2.length) {
    // 如果字元匹配，移動 str1 指針
    if (str1[pointer1] === str2[pointer2]) {
      pointer1++;
    }
    
    // 如果 str1 所有字元都找到了
    if (pointer1 >= str1.length) {
      console.log(`"${str1}" 是 "${str2}" 的子序列`);
      return true;
    }
    
    // 每次都移動 str2 指針
    pointer2++;
  }
  
  // str2 遍歷完但 str1 還沒找完
  console.log(`"${str1}" 不是 "${str2}" 的子序列`);
  return false;
};

// 測試案例
console.log('=== 子序列檢查測試 ===');
isSubsequence("hello", "hello Dear");     // true
isSubsequence("book", "brooklyn");        // true
isSubsequence("abc", "bac");              // false（順序很重要）
isSubsequence("", "abc");                 // true（空字串）
isSubsequence("axc", "ahbgdc");          // false
isSubsequence("ace", "abcde");           // true

// 遞迴版本
const isSubsequenceRecursive = (str1, str2, i = 0, j = 0) => {
  // str1 所有字元都找到了
  if (i >= str1.length) return true;
  
  // str2 遍歷完但 str1 還沒找完
  if (j >= str2.length) return false;
  
  // 字元匹配，移動雙指針
  if (str1[i] === str2[j]) {
    return isSubsequenceRecursive(str1, str2, i + 1, j + 1);
  }
  // 字元不匹配，只移動 str2 指針
  else {
    return isSubsequenceRecursive(str1, str2, i, j + 1);
  }
};

console.log('\n=== 遞迴版本測試 ===');
console.log('遞迴結果:', isSubsequenceRecursive("ace", "abcde"));
