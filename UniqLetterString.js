/**
 * 最長不重複子字串 (Longest Substring with Unique Characters)
 * 
 * 功能：找出字串中最長的不含重複字元的子字串長度
 * 時間複雜度：O(n) - n 為字串長度
 * 空間複雜度：O(k) - k 為字元集大小
 * 
 * 使用技巧：
 * - 滑動視窗 (Sliding Window)
 * - 計數器 (Counter) / 雜湊表
 * 
 * 演算法：
 * 1. 使用開始和結束指針定義視窗
 * 2. 使用計數器物件記錄視窗內的字元
 * 3. 若遇到重複字元，縮小視窗（移動開始指針）
 * 4. 若字元不重複，擴大視窗（移動結束指針）
 * 5. 持續記錄最長長度
 * 
 * 範例：
 * - "thisishowwedoit" → 6 ("wedoit")
 * - "abcabcbb" → 3 ("abc")
 * - "bbbbb" → 1 ("b")
 * 
 * @param {string} str - 輸入字串
 * @returns {number|null} 最長不重複子字串的長度，空字串返回 null
 */
const longestUniqueSubstring = (str) => {
  // 處理空字串情況
  if (str.length === 0) {
    console.log('字串為空，找不到不重複子字串');
    return null;
  }
  
  let startPointer = 0;
  let endPointer = 0;
  const counter = {}; // 記錄視窗內字元出現次數
  let maxLength = -Infinity;
  
  // 滑動視窗：結束指針向右移動
  while (endPointer < str.length) {
    const currentChar = str[endPointer];
    
    // 如果當前字元已存在於視窗中（重複）
    if (counter[currentChar]) {
      // 縮小視窗：移除左邊字元並移動開始指針
      counter[str[startPointer]]--;
      startPointer++;
    } else {
      // 字元不重複：加入視窗並移動結束指針
      counter[currentChar] = 1;
      endPointer++;
      
      // 更新最長長度
      const currentLength = endPointer - startPointer;
      if (currentLength > maxLength) {
        maxLength = currentLength;
      }
    }
  }
  
  console.log(`最長不重複子字串長度 = ${maxLength}`);
  return maxLength;
};

// 測試案例
console.log('=== 最長不重複子字串測試 ===');
longestUniqueSubstring("thisishowwedoit");  // 6 ("wedoit")
longestUniqueSubstring("");                  // null
longestUniqueSubstring("abcabcbb");         // 3 ("abc")
longestUniqueSubstring("bbbbb");            // 1 ("b")
longestUniqueSubstring("pwwkew");           // 3 ("wke")

/**
 * 優化版本：使用 Set 和更清晰的邏輯
 */
const longestUniqueSubstringOptimized = (str) => {
  if (str.length === 0) {
    console.log('\n字串為空（優化版）');
    return 0;
  }
  
  let start = 0;
  let maxLength = 0;
  const charSet = new Set();
  
  for (let end = 0; end < str.length; end++) {
    // 若字元重複，持續移除左邊字元直到不重複
    while (charSet.has(str[end])) {
      charSet.delete(str[start]);
      start++;
    }
    
    // 加入當前字元
    charSet.add(str[end]);
    
    // 更新最大長度
    maxLength = Math.max(maxLength, end - start + 1);
  }
  
  console.log(`\n優化版本 - 最長不重複子字串長度 = ${maxLength}`);
  return maxLength;
};

console.log('\n=== 優化版本測試 ===');
longestUniqueSubstringOptimized("thisishowwedoit");
