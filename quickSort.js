/**
 * 快速排序 (Quick Sort)
 * 
 * 功能：使用分治法進行原地排序
 * 時間複雜度：
 * - 最佳/平均：O(n log n)
 * - 最差：O(n²) - 當陣列已排序或接近排序時
 * 空間複雜度：O(log n) - 遞迴呼叫堆疊
 * 
 * 演算法步驟：
 * 1. 選擇樞紐 (Pivot)：通常選擇最後一個元素
 * 2. 分割 (Partition)：
 *    - 將小於樞紐的元素移到左邊
 *    - 將大於樞紐的元素移到右邊
 * 3. 遞迴排序左右兩個子陣列
 * 
 * 優勢：
 * - 原地排序，不需額外大量記憶體
 * - 平均情況下效能優異
 * - 實務上最常用的排序演算法之一
 * 
 * 缺點：
 * - 不穩定排序
 * - 最差情況下效能較差
 */

let arr = [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666];

/**
 * 分割函數：將陣列分為小於和大於樞紐的兩部分
 * 
 * @param {number} left - 左邊界索引
 * @param {number} right - 右邊界索引
 * @returns {number} 樞紐元素的最終位置
 */
const partition = (left, right) => {
  // 選擇最後一個元素作為樞紐
  const pivot = arr[right];
  
  // i 追蹤小於樞紐的區域的最後一個位置
  let i = left - 1;
  
  // 遍歷 left 到 right-1 的元素
  for (let j = left; j <= right - 1; j++) {
    // 若當前元素小於或等於樞紐
    if (arr[j] <= pivot) {
      i++;
      // 交換 arr[i] 和 arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  
  // 將樞紐放到正確位置（i+1）
  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  
  // 返回樞紐的最終位置
  return i + 1;
};

/**
 * 快速排序主函數
 * 
 * @param {number} left - 左邊界索引
 * @param {number} right - 右邊界索引
 * @returns {number[]} 排序後的陣列
 */
const quickSort = (left, right) => {
  // 基礎情況：當左邊界小於右邊界時才需要排序
  if (left < right) {
    // 分割陣列並獲得樞紐位置
    const pivotIndex = partition(left, right);
    
    // 遞迴排序左邊子陣列
    quickSort(left, pivotIndex - 1);
    
    // 遞迴排序右邊子陣列
    quickSort(pivotIndex + 1, right);
  }
  
  return arr;
};

// 測試
console.log('=== 快速排序測試 ===');
console.log('原始陣列:', [15, 3, 17, -17, 3.1415, 18, 20, 2, 1, 666]);
console.log('排序後:', quickSort(0, arr.length - 1));

// 更多測試
console.log('\n=== 其他測試案例 ===');
arr = [5, 4, 3, 2, 1];
console.log('反向排序:', quickSort(0, arr.length - 1));

arr = [1, 2, 3, 4, 5];
console.log('已排序:', quickSort(0, arr.length - 1));

arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log('有重複值:', quickSort(0, arr.length - 1));
