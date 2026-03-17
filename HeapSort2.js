/**
 * 堆積排序 (Heap Sort) - 版本 2
 * 
 * 功能：使用最大堆積 (Max Heap) 進行排序
 * 時間複雜度：O(n log n) - 所有情況
 * 空間複雜度：O(1) - 原地排序
 * 
 * 堆積性質：
 * - 完全二元樹 (Complete Binary Tree)
 * - 父節點的值 >= 子節點的值（最大堆積）
 * 
 * 陣列索引對應：
 * - 對於索引 i 的節點：
 *   - 左子節點：2i + 1
 *   - 右子節點：2i + 2
 *   - 父節點：floor((i-1)/2)
 * 
 * 演算法步驟：
 * 1. 建立最大堆積
 * 2. 將堆積頂端（最大值）與最後元素交換
 * 3. 減少堆積大小並重新調整
 * 4. 重複步驟 2-3 直到完成排序
 */

let arr = [10, 50, 30, 60, 15, 40];
let heapSize = arr.length;

/**
 * 交換陣列中兩個元素的位置
 * 
 * @param {number[]} array - 陣列
 * @param {number} i - 第一個索引
 * @param {number} j - 第二個索引
 */
const swap = (array, i, j) => {
  [array[i], array[j]] = [array[j], array[i]];
};

/**
 * 調整堆積使其滿足最大堆積性質
 * 
 * @param {number[]} array - 陣列
 * @param {number} i - 要調整的節點索引
 * @param {number} size - 堆積大小
 */
const maxHeapify = (array, i, size) => {
  const leftChildIndex = 2 * i + 1;   // 左子節點索引
  const rightChildIndex = 2 * i + 2;  // 右子節點索引
  let largest = i;                     // 假設當前節點最大
  
  // 比較左子節點
  if (leftChildIndex < size && array[leftChildIndex] > array[largest]) {
    largest = leftChildIndex;
  }
  
  // 比較右子節點
  if (rightChildIndex < size && array[rightChildIndex] > array[largest]) {
    largest = rightChildIndex;
  }
  
  // 若最大值不是當前節點，交換並遞迴調整
  if (largest !== i) {
    swap(array, i, largest);
    maxHeapify(array, largest, size);
  }
};

/**
 * 建立最大堆積
 * 從最後一個父節點開始，向上調整每個子樹
 * 
 * @param {number[]} array - 陣列
 */
const buildMaxHeap = (array) => {
  // 最後一個父節點的索引
  const lastParentIndex = Math.floor(heapSize / 2) - 1;
  
  // 從下往上建立堆積
  for (let i = lastParentIndex; i >= 0; i--) {
    maxHeapify(array, i, heapSize);
  }
};

/**
 * 堆積排序主函數
 * 
 * @returns {number[]} 排序後的陣列
 */
const heapSort = () => {
  // 步驟 1：建立最大堆積
  buildMaxHeap(arr);
  
  // 步驟 2：逐一取出最大值並調整堆積
  for (let i = heapSize - 1; i > 0; i--) {
    // 將堆積頂端（最大值）與最後元素交換
    swap(arr, 0, i);
    
    // 減少堆積大小並重新調整
    maxHeapify(arr, 0, i);
  }
  
  return arr;
};

// 測試
console.log('=== 堆積排序測試（版本 2）===');
console.log('原始陣列:', [10, 50, 30, 60, 15, 40]);
console.log('排序後:', heapSort());

// 更多測試
console.log('\n=== 其他測試案例 ===');

// 測試 2
arr = [64, 34, 25, 12, 22, 11, 90];
heapSize = arr.length;
console.log('測試 2 - 原始:', [64, 34, 25, 12, 22, 11, 90]);
console.log('排序後:', heapSort());

// 測試 3：包含負數
arr = [3, -1, 4, -1, 5, 9, -2, 6];
heapSize = arr.length;
console.log('\n測試 3 - 原始:', [3, -1, 4, -1, 5, 9, -2, 6]);
console.log('排序後:', heapSort());

/**
 * 堆積排序的視覺化輔助函數
 */
const visualizeHeap = (array, size) => {
  console.log('\n堆積視覺化（陣列表示）:');
  console.log(array.slice(0, size));
  
  // 顯示樹狀結構（簡化版）
  let level = 0;
  let index = 0;
  
  console.log('\n樹狀結構:');
  while (index < size) {
    const levelSize = Math.pow(2, level);
    const levelElements = [];
    
    for (let i = 0; i < levelSize && index < size; i++) {
      levelElements.push(array[index]);
      index++;
    }
    
    console.log(`第 ${level} 層:`, levelElements.join(' '));
    level++;
  }
};

// 視覺化測試
console.log('\n=== 堆積建立過程視覺化 ===');
arr = [10, 50, 30, 60, 15, 40];
heapSize = arr.length;
console.log('原始陣列:');
visualizeHeap(arr, heapSize);

buildMaxHeap(arr);
console.log('\n建立最大堆積後:');
visualizeHeap(arr, heapSize);
