/**
 * 合併排序 (Merge Sort)
 * 
 * 功能：使用分治法進行排序
 * 時間複雜度：O(n log n) - 所有情況（最佳、平均、最差）
 * 空間複雜度：O(n) - 需要額外空間來儲存合併結果
 * 
 * 演算法步驟（分治法）：
 * 1. 分割 (Divide)：將陣列分成兩半
 * 2. 遞迴 (Conquer)：遞迴地對兩半進行排序
 * 3. 合併 (Combine)：將兩個已排序的子陣列合併成一個排序陣列
 * 
 * 優勢：
 * - 穩定排序（相同元素的相對位置不變）
 * - 時間複雜度保證 O(n log n)
 * - 適合大型資料集
 * 
 * 缺點：
 * - 需要額外的記憶體空間
 * - 對小型陣列，效能不如插入排序
 */

/**
 * 合併兩個已排序的陣列
 * 
 * @param {number[]} arr1 - 第一個已排序陣列
 * @param {number[]} arr2 - 第二個已排序陣列
 * @returns {number[]} 返回合併後的排序陣列
 */
const merge = (arr1, arr2) => {
  const result = [];
  let i = 0; // arr1 的指針
  let j = 0; // arr2 的指針
  
  // 比較兩個陣列的元素，將較小的加入結果
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  
  // 將剩餘的元素加入結果（兩個 while 只會執行其中一個）
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  
  return result;
};

/**
 * 合併排序主函數
 * 
 * @param {number[]} arr - 要排序的陣列
 * @returns {number[]} 返回排序後的陣列
 */
const mergeSort = (arr) => {
  // 基礎情況：陣列只有一個元素時，已經是排序好的
  if (arr.length === 1) {
    return arr;
  }
  
  // 分割：找到中間點，將陣列分成兩半
  const middle = Math.floor(arr.length / 2);
  const leftArray = arr.slice(0, middle);
  const rightArray = arr.slice(middle);
  
  // 遞迴：分別對左右兩半進行排序，然後合併
  return merge(mergeSort(leftArray), mergeSort(rightArray));
};

// 測試案例
console.log('=== 合併排序測試 ===');
const testArray = [15, 3, 17, 18, 35, 11, 0, 36, -336, 1054];
console.log('原始陣列:', testArray);
console.log('排序後:', mergeSort(testArray));

// 更多測試
console.log('\n=== 其他測試案例 ===');
console.log('空陣列:', mergeSort([1]));
console.log('已排序:', mergeSort([1, 2, 3, 4, 5]));
console.log('反向排序:', mergeSort([5, 4, 3, 2, 1]));
console.log('有重複值:', mergeSort([3, 1, 4, 1, 5, 9, 2, 6]));
