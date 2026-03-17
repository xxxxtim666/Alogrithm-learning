/**
 * 陣列交集 (Array Intersection) - 使用 Counter 技巧
 * 
 * 功能：找出兩個陣列的交集（共同元素）
 * 時間複雜度：O(n + m) - n 和 m 為兩陣列長度
 * 空間複雜度：O(n + m) - 儲存去重陣列和計數器
 * 
 * 演算法：
 * 1. 先將兩個陣列去重（使用 Set）
 * 2. 合併去重後的陣列
 * 3. 使用計數器統計每個元素出現次數
 * 4. 出現次數 >= 2 的元素即為交集
 * 
 * 注意：
 * - 此方法較耗記憶體
 * - 結果會自動去重
 * 
 * @param {Array} arr1 - 第一個陣列
 * @param {Array} arr2 - 第二個陣列
 * @returns {Array} 返回交集陣列
 */
const intersection = (arr1, arr2) => {
  // 步驟 1：去除重複元素
  const arr1Unique = [...new Set(arr1)];
  const arr2Unique = [...new Set(arr2)];
  
  // 步驟 2：合併兩個去重後的陣列
  const combined = arr1Unique.concat(arr2Unique);
  
  // 步驟 3：建立計數器，統計每個元素出現次數
  const counter = {};
  combined.forEach(value => {
    counter[value] = (counter[value] || 0) + 1;
  });
  
  // 步驟 4：找出出現次數 >= 2 的元素（即交集）
  const result = [];
  Object.keys(counter).forEach(key => {
    if (counter[key] >= 2) {
      result.push(Number(key)); // 轉回數字
    }
  });
  
  console.log('交集結果:', result);
  return result;
};

// 測試案例
console.log('=== 測試案例 ===');
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [5, 6, 7, 7, 8];

intersection(arr1, arr2); // [5, 6]

// 更多測試
console.log('\n=== 更多測試 ===');
intersection([1, 2, 2, 1], [2, 2]); // [2]
intersection([4, 9, 5], [9, 4, 9, 8, 4]); // [9, 4]

// 優化版本：使用 Set 的交集運算（更簡潔高效）
const intersectionOptimized = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  
  const result = [...set1].filter(item => set2.has(item));
  
  console.log('交集結果（優化版）:', result);
  return result;
};

console.log('\n=== 優化版本測試 ===');
intersectionOptimized([1, 2, 3, 4, 5, 6], [5, 6, 7, 7, 8]);
