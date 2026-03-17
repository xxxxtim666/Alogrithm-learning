/**
 * 堆積排序 (Heap Sort)
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
 * - 父節點索引 i，左子節點為 2i+1，右子節點為 2i+2
 * - 子節點索引 i，父節點為 floor((i-1)/2)
 * 
 * 演算法步驟：
 * 1. 建立最大堆積 (buildMaxHeap)
 * 2. 將堆積頂端（最大值）與最後一個元素交換
 * 3. 減少堆積大小並重新調整堆積 (maxHeapify)
 * 4. 重複步驟 2-3 直到堆積大小為 1
 */

let heapSize; // 當前堆積大小
let arr = [10, 50, 30, 60, 15, 40, 33];

/**
 * 建立最大堆積
 * 從最後一個父節點開始，向上調整每個子樹為最大堆積
 */
const buildMaxHeap = () => {
  // 最後一個父節點的索引
  const lastParentIndex = Math.floor(arr.length / 2) - 1;
  heapSize = arr.length - 1;
  
  // 從下往上建立堆積
  for (let i = lastParentIndex; i >= 0; i--) {
    maxHeapify(i);
  }
};

/**
 * 調整堆積使其滿足最大堆積性質
 * 
 * @param {number} i - 要調整的節點索引
 */
const maxHeapify = (i) => {
  let largest; // 儲存父、左、右三個節點中的最大值索引
  const leftChildIndex = 2 * i + 1;   // 左子節點索引
  const rightChildIndex = 2 * i + 2;  // 右子節點索引
  
  // 比較父節點與左子節點
  if (leftChildIndex <= heapSize && arr[leftChildIndex] > arr[i]) {
    largest = leftChildIndex;
  } else {
    largest = i;
  }

  // 比較目前最大值與右子節點
  if (rightChildIndex <= heapSize && arr[rightChildIndex] > arr[largest]) {
    largest = rightChildIndex;
  }

  // 若最大值不是父節點，則交換並遞迴調整
  if (largest !== i) {
    // 交換 arr[i] 和 arr[largest]
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    
    // 遞迴調整受影響的子樹
    maxHeapify(largest);
  }
};

/**
 * 堆積排序主函數
 * 
 * @returns {number[]} 排序後的陣列
 */
const heapSort = () => {
  // 步驟 1：建立最大堆積
  buildMaxHeap();
  
  // 步驟 2：逐一取出最大值並調整堆積
  for (let i = arr.length - 1; i > 0; i--) {
    // 將堆積頂端（最大值）與最後一個元素交換
    [arr[0], arr[i]] = [arr[i], arr[0]];
    
    // 減少堆積大小
    heapSize--;
    
    // 重新調整堆積（從根節點開始）
    maxHeapify(0);
  }
  
  return arr;
};

// 測試
console.log('原始陣列:', [10, 50, 30, 60, 15, 40, 33]);
console.log('排序後:', heapSort());
