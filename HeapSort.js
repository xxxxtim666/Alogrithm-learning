const bulidMaxHeapSort = () => {
  heapSize = arr.length - 1;
  for (let i = Math.floor(heapSize / 2); i >= 0; i--) {
    maxHeapify(i);
  }
};
const maxHeapify = (i) => {
  //   let largest;
  //   let leftChildNodeIndex = i * 2 + 1;
  //   let rightChildNodeIndex = i * 2 + 2;
  //   if (leftChildNodeIndex <= heapSize && arr[leftChildNodeIndex] > arr[i]) {
  //     largest = leftChildNodeIndex;
  //   } else {
  //     largest = i;
  //   }
  //   if (
  //     rightChildNodeIndex <= heapSize &&
  //     arr[rightChildNodeIndex > arr[largest]]
  //   ) {
  //     largest = rightChildNodeIndex;
  //   }
  //   if (largest != i) {
  //     // note : 這邊不等於要用 != 而不行用！==
  //     // swap arr[i] and arr[largeat]
  //     let temp = arr[i];
  //     arr[i] = arr[largest];
  //     arr[largest] = temp;
  //     maxHeapify(largest);
  //   }
  //

  let largest;
  let leftChildNodeIndex = i * 2 + 1;
  let rightChildNodeIndex = i * 2 + 2;
  if (leftChildNodeIndex <= heapSize && arr[leftChildNodeIndex] > arr[i]) {
    largest = leftChildNodeIndex;
  } else {
    largest = i;
  }

  if (
    rightChildNodeIndex <= heapSize &&
    arr[rightChildNodeIndex] > arr[largest]
  ) {
    largest = rightChildNodeIndex;
  }

  if (largest !== i) {
    // swap A[i] with A[largest]
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeapify(largest);
  }
};
const heapSort = () => {
  bulidMaxHeapSort();
  for (let i = arr.length - 1; i >= 0; i--) {
    // exchange arr[0] and arr[i]
    // rootNode and lastChildNode change
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapSize = heapSize - 1;
    maxHeapify(0);
  }
  //console.log(arr);
  return arr;
};
let heapSize;
let arr = [15, 3, 17, 18, 20, 2, 1, 666];
console.log(heapSort(arr));
