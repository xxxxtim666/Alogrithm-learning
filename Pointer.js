/**
 * 雙指針技巧 (Two Pointers) - 平均配對問題
 * 
 * 功能：在已排序的陣列中找出所有平均值等於目標值的數字配對
 * 時間複雜度：O(n log n) - 排序主導
 * 空間複雜度：O(k) - k 為配對數量
 * 
 * 雙指針技巧要點：
 * 1. 陣列必須先排序
 * 2. 使用左右兩個指針從兩端向中間移動
 * 3. 根據當前值與目標的比較決定移動方向
 * 
 * 適用場景：
 * - 在排序陣列中尋找配對
 * - 三數之和問題
 * - 容器盛水問題
 * - 移除重複元素
 * 
 * @param {number[]} arr - 輸入的數字陣列
 * @param {number} targetAvg - 目標平均值
 * @returns {Array<[number, number]>} 符合條件的配對陣列
 */
const averagePair = (arr, targetAvg) => {
  // 先將陣列排序（從小到大）
  arr.sort((a, b) => a - b);
  
  const result = [];
  let leftPointer = 0;              // 左指針：從頭開始
  let rightPointer = arr.length - 1; // 右指針：從尾開始
  
  // 當左指針小於右指針時繼續搜尋
  while (leftPointer < rightPointer) {
    // 計算當前兩數的平均值
    const currentAvg = (arr[leftPointer] + arr[rightPointer]) / 2;
    
    if (currentAvg > targetAvg) {
      // 平均值太大：右指針左移（減小較大的數）
      rightPointer--;
    } else if (currentAvg < targetAvg) {
      // 平均值太小：左指針右移（增大較小的數）
      leftPointer++;
    } else {
      // 找到符合的配對
      result.push([arr[leftPointer], arr[rightPointer]]);
      
      // 兩個指針同時移動，尋找下一組配對
      leftPointer++;
      rightPointer--;
    }
  }
  
  console.log(`目標平均值: ${targetAvg}`);
  console.log('找到的配對:', result);
  return result;
};

// 測試案例
console.log('=== 雙指針 - 平均配對測試 ===\n');

const testArray = [100, -11, 0, 1, 2, 3, 9, 14, 17, 21];
const targetAverage = 1.5;

console.log('輸入陣列:', testArray);
averagePair(testArray, targetAverage);

// 更多測試
console.log('\n=== 其他測試案例 ===');
averagePair([1, 2, 3, 4, 5], 3);    // [1,5], [2,4]
averagePair([-1, 0, 3, 4, 5, 6], 4.1); // 無配對
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // [3,13], [6,10], [7,9]

/**
 * 雙指針的其他應用範例
 */

/**
 * 兩數之和（返回索引）
 * LeetCode #1
 */
const twoSum = (arr, target) => {
  const sorted = arr.map((val, idx) => ({ val, idx }))
    .sort((a, b) => a.val - b.val);
  
  let left = 0;
  let right = sorted.length - 1;
  
  while (left < right) {
    const sum = sorted[left].val + sorted[right].val;
    
    if (sum === target) {
      return [sorted[left].idx, sorted[right].idx];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
  
  return null;
};

console.log('\n=== 兩數之和 ===');
console.log('索引:', twoSum([2, 7, 11, 15], 9)); // [0, 1]

/**
 * 移除重複元素（原地修改）
 * LeetCode #26
 */
const removeDuplicates = (arr) => {
  if (arr.length === 0) return 0;
  
  let slow = 0; // 慢指針：指向不重複元素的最後位置
  
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] !== arr[slow]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }
  
  return slow + 1;
};

console.log('\n=== 移除重複元素 ===');
const dupArray = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const uniqueLength = removeDuplicates(dupArray);
console.log('不重複長度:', uniqueLength);
console.log('修改後陣列:', dupArray.slice(0, uniqueLength));
