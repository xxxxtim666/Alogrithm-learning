/**
 * 最小子陣列 (Minimum Subarray) - 使用滑動視窗技巧
 * 
 * 功能：找出和大於等於目標值的最短連續子陣列長度
 * 時間複雜度：O(n) - 每個元素最多被訪問兩次
 * 空間複雜度：O(1) - 只使用常數額外空間
 * 
 * 演算法（雙指針滑動視窗）：
 * 1. 使用開始和結束指針定義視窗
 * 2. 當總和小於目標，擴大視窗（移動結束指針）
 * 3. 當總和大於等於目標，記錄長度並縮小視窗（移動開始指針）
 * 4. 持續調整視窗直到找到最小長度
 * 
 * 應用場景：
 * - 找出達到目標銷售額的最少天數
 * - 最小化資源使用
 * - 優化問題
 * 
 * @param {number[]} arr - 正整數陣列
 * @param {number} targetSum - 目標和
 * @returns {number} 最短子陣列長度，找不到返回 -1
 */
function minSubArray(arr, targetSum) {
  let startPointer = 0;
  let endPointer = 0;
  let currentSum = 0;
  let minLength = Infinity;

  // 滑動視窗主迴圈
  while (startPointer < arr.length) {
    // 情況 1：當前和小於目標且還有元素可加入
    if (currentSum < targetSum && endPointer < arr.length) {
      // 擴大視窗：加入右邊元素
      currentSum += arr[endPointer];
      endPointer++;
    }
    // 情況 2：當前和達到或超過目標
    else if (currentSum >= targetSum) {
      // 計算當前視窗長度
      const currentLength = endPointer - startPointer;
      
      // 更新最小長度
      if (currentLength < minLength) {
        minLength = currentLength;
      }
      
      // 縮小視窗：移除左邊元素
      currentSum -= arr[startPointer];
      startPointer++;
    }
    // 情況 3：已到達陣列末端且和仍小於目標
    else {
      break;
    }
  }

  // 檢查是否找到符合條件的子陣列
  if (minLength === Infinity) {
    console.log(`找不到和大於等於 ${targetSum} 的子陣列`);
    return -1;
  }
  
  console.log(`最小子陣列長度 = ${minLength}`);
  return minLength;
}

// 測試案例
console.log('=== 最小子陣列測試 ===');
minSubArray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 70);
// 解釋：[16, 5, 7, 14, 30] 或 [30, 12, ...] 等

console.log('\n=== 更多測試 ===');
minSubArray([2, 3, 1, 2, 4, 3], 7);      // 2 (子陣列 [4,3])
minSubArray([1, 4, 4], 4);                // 1 (子陣列 [4])
minSubArray([1, 1, 1, 1, 1, 1], 11);     // -1 (找不到)
minSubArray([1, 2, 3, 4, 5], 15);        // 5 (整個陣列)

/**
 * 帶詳細輸出的版本
 */
function minSubArrayVerbose(arr, targetSum) {
  let start = 0;
  let end = 0;
  let sum = 0;
  let minLen = Infinity;
  let resultSubarray = [];

  while (start < arr.length) {
    if (sum < targetSum && end < arr.length) {
      sum += arr[end];
      end++;
    } else if (sum >= targetSum) {
      const currentLen = end - start;
      if (currentLen < minLen) {
        minLen = currentLen;
        resultSubarray = arr.slice(start, end);
      }
      sum -= arr[start];
      start++;
    } else {
      break;
    }
  }

  if (minLen === Infinity) {
    console.log(`找不到和 >= ${targetSum} 的子陣列`);
    return { length: -1, subarray: [] };
  }
  
  console.log(`最小子陣列: [${resultSubarray.join(', ')}], 長度: ${minLen}, 和: ${resultSubarray.reduce((a, b) => a + b, 0)}`);
  return { length: minLen, subarray: resultSubarray };
}

console.log('\n=== 詳細輸出版本 ===');
minSubArrayVerbose([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 70);
