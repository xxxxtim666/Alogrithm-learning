const arr = [10, 50, 30, 60, 15, 40];
let size = arr.length;
// step1 buildMaxHeap
// 取得最後一個父節點索引位置。
// 從最後一個父節開始執行最大堆積調整操作至根節點。

const buildMaxHeap = (arr) => {
  let parentNode = Math.floor(size / 2) - 1;
  // console.log(parentNode);
  // parentNode =2 指的是陣列arr中 index=2 value =30 這個節點
  for (let i = parentNode; i >= 0; i--) {
    maxHeapify(arr, i, size);
  }
  //   console.log(arr);
};

// step2 maxHeapify
const maxHeapify = (arr, i, size) => {
  let leftChildNodeIndex = i * 2 + 1;
  //   console.log(arr[leftChildNodeIndex]);
  let rightChildNodeIndex = i + 2 + 2;
  let iMax = i;
  if (leftChildNodeIndex < size && arr[iMax] < arr[leftChildNodeIndex]) {
    iMax = leftChildNodeIndex;
  }
  if (rightChildNodeIndex < size && arr[iMax] < arr[rightChildNodeIndex]) {
    iMax = rightChildNodeIndex;
  }
  if (iMax !== i) {
    swap(arr, i, iMax);
    maxHeapify(arr, i, size);
  }
};

const swap = (arr, i, iMax) => {
  let temp = arr[iMax];
  arr[iMax] = arr[i];
  arr[i] = temp;
  console.log(arr);
};

// step3 heapSort
const heapSort = () => {
  buildMaxHeap(arr);
  for (let j = arr.size - 1; j > 0; j--) {
    swap(arr, 0, j);
    maxHeapify(arr, 0, j);
  }
  console.log(arr);
};

