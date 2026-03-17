/**
 * 頻率比較 (Frequency Comparison) - 使用 Counter 技巧
 * 
 * 功能：檢查兩個字串是否具有相同的字元頻率（字母重組）
 * 時間複雜度：O(n + m) - n 和 m 為兩字串長度
 * 空間複雜度：O(n + m) - 儲存兩個計數器物件
 * 
 * 應用場景：
 * - 判斷兩個字串是否為 Anagram（字母重組）
 * - 檢查字串組成是否相同但順序不同
 * 
 * 演算法：
 * 1. 先檢查長度是否相同（不同則直接返回 false）
 * 2. 建立兩個計數器物件，統計每個字元出現次數
 * 3. 比較兩個計數器是否完全相同
 * 
 * @param {string} str1 - 第一個字串
 * @param {string} str2 - 第二個字串
 * @returns {boolean} 返回兩字串頻率是否相同
 */
const sameFrequency = (str1, str2) => {
  // 長度不同，直接返回 false
  if (str1.length !== str2.length) {
    console.log(`字串 "${str1}" 和 "${str2}" 長度不同，頻率不可能相同`);
    return false;
  }
  
  // 建立計數器物件
  const counter1 = {};
  const counter2 = {};
  
  // 統計第一個字串的字元頻率
  for (const char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }
  
  // 統計第二個字串的字元頻率
  for (const char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }
  
  // 比較兩個計數器
  for (const key in counter1) {
    // 檢查字元是否存在於第二個計數器
    if (!counter2[key]) {
      console.log(`字串 "${str1}" 和 "${str2}" 頻率不相同`);
      return false;
    }
    // 檢查字元出現次數是否相同
    if (counter1[key] !== counter2[key]) {
      console.log(`字串 "${str1}" 和 "${str2}" 頻率不相同`);
      return false;
    }
  }
  
  console.log(`字串 "${str1}" 和 "${str2}" 頻率相同`);
  return true;
};

// 測試案例
console.log('=== 測試案例 ===');
sameFrequency("abbc", "bbca");   // true - "a":1, "b":2, "c":1
sameFrequency("abbc", "bbcaa");  // false - 長度不同
sameFrequency("listen", "silent"); // true - Anagram
sameFrequency("hello", "world");   // false - 字元組成不同
