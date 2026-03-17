/**
 * 平均配對問題 (Average Pair) - 使用雙指針技巧
 * 
 * 功能：在已排序的陣列中找出所有平均值等於目標值的數字配對
 * 時間複雜度：O(n log n) - 排序主導
 * 空間複雜度：O(n) - 儲存結果
 * 
 * 演算法：
 * 1. 先將陣列排序（從小到大）
 * 2. 使用左右雙指針從兩端向中間移動
 * 3. 計算當前平均值並與目標比較
 * 4. 若平均值大於目標，右指針左移
 * 5. 若平均值小於目標，左指針右移
 * 6. 若相等則記錄配對並移動雙指針
 * 
 * @param {number[]} arr - 輸入的數字陣列
 * @param {number} avg - 目標平均值
 * @returns {Array<[number, number]>} 返回符合條件的配對陣列
 */
const averagePair = (arr, avg) => {
  // 先將陣列排序
  arr.sort((a, b) => a - b);
  
  let result = [];
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  
  // 雙指針從兩端向中間移動
  while (leftPointer < rightPointer) {
    const currentAvg = (arr[leftPointer] + arr[rightPointer]) / 2;
    
    if (currentAvg > avg) {
      // 平均值太大，右指針左移
      rightPointer--;
    } else if (currentAvg < avg) {
      // 平均值太小，左指針右移
      leftPointer++;
    } else {
      // 找到符合的配對
      result.push([arr[leftPointer], arr[rightPointer]]);
      leftPointer++;
      rightPointer--;
    }
  }
  
  console.log(`找到的配對：`, result);
  return result;
};

// 測試案例
const arr = [-11, 0, 1, 2, 3, 9, 14, 17, 21];
const avg = 1.5;
averagePair(arr, avg); // 應該找到 [0, 3], [1, 2]


