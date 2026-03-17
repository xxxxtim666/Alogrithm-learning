/**
 * 滑動視窗 (Sliding Window) 技巧
 * 
 * 功能：在陣列中找出固定大小連續子陣列的最大和與最小和
 * 時間複雜度：O(n × k) - n 為陣列長度，k 為視窗大小
 * 空間複雜度：O(1) - 只使用常數額外空間
 * 
 * 注意：此版本可優化至 O(n)，見下方優化版本
 * 
 * 演算法：
 * 1. 檢查視窗大小是否有效
 * 2. 從陣列起始處開始滑動視窗
 * 3. 計算每個視窗內元素的總和
 * 4. 記錄最大和與最小和
 * 5. 視窗向右滑動一格，重複步驟 3-4
 * 
 * 應用場景：
 * - 找出連續 k 天的最高/最低銷售額
 * - 移動平均計算
 * - 子陣列問題
 * 
 * @param {number[]} arr - 數字陣列
 * @param {number} windowSize - 視窗大小
 * @returns {Object|number} 返回 {maxSum, minSum} 或 -1（視窗太大）
 */
const slidingWindow = (arr, windowSize) => {
  let maxSum = -Infinity;
  let minSum = Infinity;
  
  // 檢查視窗大小是否有效
  if (windowSize > arr.length) {
    console.log('視窗大小超過陣列長度');
    return -1;
  }
  
  // 滑動視窗：從索引 0 到 arr.length - windowSize
  for (let i = 0; i <= arr.length - windowSize; i++) {
    let currentSum = 0;
    
    // 計算當前視窗內的總和
    for (let j = i; j < i + windowSize; j++) {
      currentSum += arr[j];
    }
    
    // 更新最大和與最小和
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < minSum) {
      minSum = currentSum;
    }
  }
  
  console.log(`視窗大小 ${windowSize} 的最大和 = ${maxSum}`);
  console.log(`視窗大小 ${windowSize} 的最小和 = ${minSum}`);
  
  return { maxSum, minSum };
};

// 測試
console.log('=== 滑動視窗測試 ===');
slidingWindow([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);

/**
 * 優化版本：O(n) 時間複雜度
 * 重複利用前一個視窗的計算結果
 */
const slidingWindowOptimized = (arr, windowSize) => {
  if (windowSize > arr.length) {
    console.log('視窗大小超過陣列長度');
    return -1;
  }
  
  // 計算第一個視窗的總和
  let currentSum = 0;
  for (let i = 0; i < windowSize; i++) {
    currentSum += arr[i];
  }
  
  let maxSum = currentSum;
  let minSum = currentSum;
  
  // 滑動視窗：減去左邊元素，加上右邊新元素
  for (let i = windowSize; i < arr.length; i++) {
    currentSum = currentSum - arr[i - windowSize] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
    minSum = Math.min(minSum, currentSum);
  }
  
  console.log(`\n優化版本 - 視窗大小 ${windowSize}:`);
  console.log(`最大和 = ${maxSum}`);
  console.log(`最小和 = ${minSum}`);
  
  return { maxSum, minSum };
};

console.log('\n=== 優化版本測試（O(n)）===');
slidingWindowOptimized([2, 7, 3, 0, 6, 1, -5, -12, -11], 3);
