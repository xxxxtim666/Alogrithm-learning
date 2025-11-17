# Algorithm & Data Structure Collection

A comprehensive collection of fundamental algorithms and data structures implemented in JavaScript.

## 📚 Table of Contents

- [Data Structures](#data-structures)
  - [Linked List](#linked-list)
  - [Stack](#stack)
  - [Hash Table](#hash-table)
- [Sorting Algorithms](#sorting-algorithms)
  - [Binary Search](#binary-search)
  - [Merge Sort](#merge-sort)
  - [Quick Sort](#quick-sort)
  - [Heap Sort](#heap-sort)
- [Algorithm Techniques](#algorithm-techniques)
  - [Two Pointer Technique](#two-pointer-technique)
  - [Sliding Window](#sliding-window)
  - [Counter Pattern](#counter-pattern)
  - [Recursion](#recursion)
- [Problem Solutions](#problem-solutions)

---

## Data Structures

### Linked List

**File**: `Linklist.js` | [Detailed Explanation](./Linklist_EXPLAIN.md)

A **Singly Linked List** implementation with comprehensive operations.

#### Structure
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linklist {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}
```

#### Key Methods

| Method | Time Complexity | Description |
|--------|----------------|-------------|
| `push(value)` | O(n) | Add node to end |
| `pop()` | O(n) | Remove last node |
| `shift()` | O(1) | Remove first node |
| `unshift(value)` | O(1) | Add node to beginning |
| `insertAt(index, value)` | O(n) | Insert at specific index |
| `removeAt(index)` | O(n) | Remove at specific index |
| `get(index)` | O(n) | Get value at index |
| `printAll()` | O(n) | Print all values |

#### Usage Example
```javascript
let myLinklist = new Linklist();
myLinklist.push("Tim");
myLinklist.push("Mike");
myLinklist.push("Jame");
console.log(myLinklist.get(1)); // "Mike"
```

#### Key Concepts
- **Advantages**: Dynamic size, efficient O(1) insertion/deletion at beginning
- **Disadvantages**: No random access, requires O(n) traversal
- Each node contains data and pointer to next node

---

### Stack

**File**: `Stack.js`

Stack implementation using Linked List (LIFO - Last In First Out).

#### Features
- Uses the Linked List structure internally
- Only `push()` and `pop()` operations are used
- Perfect for LIFO scenarios

#### Usage Example
```javascript
let myStack = new Linklist();
myStack.push("Tim");
myStack.push("Mike");
myStack.pop();        // Removes "Mike"
myStack.push("Jame");
```

---

### Hash Table

**File**: `HashTable.js`

Hash Table implementation with collision handling.

#### Features
- **Division Method**: `hash_1(key) = key % size`
- **Multiplication Method**: `hash_2(key) = floor(m * ((key * A) mod 1))`
  - Where A = (√5 - 1) / 2 (golden ratio)
- String parsing support
- Collision resolution using chaining (arrays)

#### Key Methods
```javascript
set(key, value)    // Store key-value pair
get(key)           // Retrieve value by key
printAll()         // Display entire table
```

#### Usage Example
```javascript
let myHashTable = new Hashtable(6);
myHashTable.set("white", "#FFFFFF");
myHashTable.set("red", "#FF0000");
console.log(myHashTable.get("red")); // { key: "red", value: "#FF0000" }
```

---

## Sorting Algorithms

### Binary Search

**File**: `BinarySearch.js`

Efficient search algorithm for sorted arrays.

#### Algorithm
1. Find middle element
2. If target > middle, search right half
3. If target < middle, search left half
4. Repeat until found or exhausted

#### Time Complexity
- **Best**: O(1)
- **Average/Worst**: O(log n)

#### Code Example
```javascript
const binarySearch = (arr, n) => {
  let min = 0;
  let max = arr.length - 1;
  arr = arr.sort((a, b) => a - b);
  
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (n > arr[middle]) {
      min = middle + 1;
    } else if (n < arr[middle]) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
```

---

### Merge Sort

**File**: `MergeSort.js`

Divide-and-conquer sorting algorithm.

#### Algorithm Steps
1. **Divide**: Split array into two halves
2. **Conquer**: Recursively sort both halves
3. **Combine**: Merge sorted halves

#### Time Complexity
- **All cases**: O(n log n)
- **Space**: O(n)

#### Code Structure
```javascript
const merge = (a1, a2) => {
  // Merge two sorted arrays
  let result = [];
  let i = 0, j = 0;
  
  while (i < a1.length && j < a2.length) {
    if (a1[i] < a2[j]) {
      result.push(a1[i++]);
    } else {
      result.push(a2[j++]);
    }
  }
  // Add remaining elements
  return result.concat(a1.slice(i)).concat(a2.slice(j));
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  
  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);
  
  return merge(mergeSort(left), mergeSort(right));
};
```

---

### Quick Sort

**File**: `quickSort.js`

Efficient in-place sorting algorithm.

#### Algorithm
1. Choose pivot (last element)
2. Partition: elements < pivot go left, > pivot go right
3. Recursively sort left and right partitions

#### Time Complexity
- **Best/Average**: O(n log n)
- **Worst**: O(n²) - when array already sorted
- **Space**: O(log n) - call stack

#### Code Structure
```javascript
const partition = (p, r) => {
  let x = arr[r]; // pivot
  let i = p - 1;
  
  for (let j = p; j <= r - 1; j++) {
    if (arr[j] <= x) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
  }
  [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]];
  return i + 1;
};

const quickSort = (p, r) => {
  if (p < r) {
    let q = partition(p, r);
    quickSort(p, q - 1);
    quickSort(q + 1, r);
  }
  return arr;
};
```

---

### Heap Sort

**File**: `HeapSort.js`, `HeapSort2.js`

Sorts using heap data structure (complete binary tree).

#### Algorithm Steps
1. Build max heap from array
2. Swap root (max) with last element
3. Reduce heap size and heapify
4. Repeat until sorted

#### Time Complexity
- **All cases**: O(n log n)
- **Space**: O(1) - in-place

#### Key Concepts
- **Max Heap**: Parent ≥ children
- **Heap Property**: Maintained by `maxHeapify()`
- Left child index: `2i + 1`
- Right child index: `2i + 2`

---

## Algorithm Techniques

### Two Pointer Technique

Multiple files use this powerful technique for O(n) solutions.

#### Average Pair (`AveragePair.js`)
Find pairs in sorted array with specific average.

```javascript
const averagePair = (arr, avg) => {
  arr.sort((a, b) => a - b);
  let left = 0, right = arr.length - 1;
  let result = [];
  
  while (left < right) {
    let currentAvg = (arr[left] + arr[right]) / 2;
    if (currentAvg > avg) right--;
    else if (currentAvg < avg) left++;
    else {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    }
  }
  return result;
};
```

**Time Complexity**: O(n log n) - sorting dominates

---

#### Palindrome (`Palindrome.js`)
Check if string reads same forwards and backwards.

```javascript
const palindrome = (str) => {
  str = str.toLowerCase();
  let arr = str.split("");
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    if (arr[left] !== arr[right]) return false;
    left++;
    right--;
  }
  return true;
};
```

**Time Complexity**: O(n)

---

#### Subsequence (`Subsequence.js`)
Check if str1 is subsequence of str2 (order matters).

```javascript
const isSubsequence = (str1, str2) => {
  let i = 0, j = 0;
  
  if (str1.length === 0) return true;
  
  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    if (i >= str1.length) return true;
    j++;
  }
  return false;
};
```

**Examples**:
- `isSubsequence("hello", "hello Dear")` → true
- `isSubsequence("book", "brooklyn")` → true
- `isSubsequence("abc", "bac")` → false (order matters)

**Time Complexity**: O(n + m)

---

### Sliding Window

**File**: `SlindingWindow.js`

Find maximum/minimum sum of consecutive elements.

#### Technique
Instead of recalculating sum for each window, slide the window and update sum.

```javascript
const slidingWindow = (arr, maskSize) => {
  let maxSum = -Infinity;
  let minSum = Infinity;
  
  if (maskSize > arr.length) return -1;
  
  for (let i = 0; i <= arr.length - maskSize; i++) {
    let temp = 0;
    for (let j = i; j < i + maskSize; j++) {
      temp += arr[j];
    }
    maxSum = Math.max(maxSum, temp);
    minSum = Math.min(minSum, temp);
  }
  
  return { maxSum, minSum };
};
```

**Time Complexity**: O(n × k) where k is window size
- Can be optimized to O(n) by reusing previous sum

---

### Counter Pattern

Efficient technique for comparing frequencies using objects.

#### Frequency Comparison (`Frequence.js`)
Check if two strings have same character frequencies.

```javascript
const sameFrequence = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  
  let counter1 = {};
  let counter2 = {};
  
  // Build frequency maps
  for (let char of str1) {
    counter1[char] = (counter1[char] || 0) + 1;
  }
  for (let char of str2) {
    counter2[char] = (counter2[char] || 0) + 1;
  }
  
  // Compare frequencies
  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) return false;
  }
  return true;
};
```

**Examples**:
- `sameFrequence("abbc", "bbca")` → true
- `sameFrequence("abbc", "bbcaa")` → false

**Time Complexity**: O(n)

---

#### Common Elements (`counterSkill.js`)
Check if two arrays share any common elements.

```javascript
function hasCommonElement(arr1, arr2) {
  const set = new Set(arr1);
  
  for (const element of arr2) {
    if (set.has(element)) return true;
  }
  return false;
}
```

**Time Complexity**: O(n + m)
- Uses Set for O(1) lookup instead of O(n) array search

---

### Recursion

#### Fibonacci Sequence (`FibonacciSequence.js`)
Classic recursive implementation.

```javascript
const fs = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fs(n - 1) + fs(n - 2);
};
```

**Formula**: F(n) = F(n-1) + F(n-2)
**Sequence**: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...

**Time Complexity**: O(2ⁿ) - exponential (inefficient)
- **Optimization**: Use memoization or dynamic programming for O(n)

---

#### Array Flattening (`arrayOfarrays.js`)

**File**: `arrayOfarrays.js` | [Detailed Explanation](./arrayOfarrays_EXPLAIN.md)

Recursively flatten deeply nested arrays into single-level array.

##### Algorithm
```javascript
let result = [];

const collection = (arrs) => {
  arrs.map((val) => {
    if (Array.isArray(val)) {
      collection(val);  // Recursive call
    } else {
      result.push(val); // Base case
    }
  });
};
```

##### Execution Flow
For input: `[1, [2, [3, 4]], 5]`

1. Process `1` → push to result: `[1]`
2. Process `[2, [3, 4]]` → recurse
   - Process `2` → push: `[1, 2]`
   - Process `[3, 4]` → recurse
     - Process `3` → push: `[1, 2, 3]`
     - Process `4` → push: `[1, 2, 3, 4]`
3. Process `5` → push: `[1, 2, 3, 4, 5]`

##### Example
```javascript
let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];
collection(arrs);
console.log(result); // ["a", "b", "c", "d", "e", "f", "g", "h"]
```

**Time Complexity**: O(n) - visits each element once
**Space Complexity**: O(d) - where d is max nesting depth

**Modern Alternative**: `array.flat(Infinity)`

---

## Problem Solutions

### Intersection (`Intersection.js`)
Find intersection of two arrays.

### Largest Product (`LargestProduct.js`)
Find maximum product of subarray.

### Linear Search (`LinearSearch.js`)
Basic sequential search implementation.

### Min Sub Array (`ＭinsubArray.js`)
Find minimum length subarray with sum ≥ target.

### Pointer (`Pointer.js`)
General pointer technique examples.

### Unique Letter String (`UniqLetterString.js`)
Find longest substring with unique characters.

---

## 🎯 Algorithm Complexity Quick Reference

| Algorithm | Best | Average | Worst | Space |
|-----------|------|---------|-------|-------|
| Binary Search | O(1) | O(log n) | O(log n) | O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) |
| Linear Search | O(1) | O(n) | O(n) | O(1) |

---

## 💡 Key Patterns & Techniques

1. **Two Pointers**: Palindrome, Average Pair, Subsequence
2. **Sliding Window**: Max/Min sum of consecutive elements
3. **Counter/Hash**: Frequency comparison, common elements
4. **Divide & Conquer**: Merge Sort, Quick Sort, Binary Search
5. **Recursion**: Fibonacci, Array Flattening, Tree/Graph traversal

---

## 🚀 Usage

All files are standalone JavaScript implementations. Run any file with:

```bash
node <filename>.js
```

Example:
```bash
node BinarySearch.js
node MergeSort.js
node Linklist.js
```

---

## 📖 Learning Resources

Each implementation includes:
- Clear comments explaining logic
- Test cases with sample inputs/outputs
- Time and space complexity analysis
- Common use cases and applications

For detailed explanations of specific implementations:
- [Linked List Deep Dive](./Linklist_EXPLAIN.md)
- [Array Flattening Explained](./arrayOfarrays_EXPLAIN.md)

---

## 🔍 When to Use Each Algorithm

### Sorting
- **Merge Sort**: When stable sort needed, guaranteed O(n log n)
- **Quick Sort**: Best average performance, in-place sorting
- **Heap Sort**: When O(1) space required, guaranteed O(n log n)

### Searching
- **Binary Search**: Sorted array, need O(log n) search
- **Linear Search**: Unsorted array, small datasets

### Data Structures
- **Linked List**: Dynamic size, frequent insertions/deletions at ends
- **Hash Table**: Fast O(1) lookups, key-value storage
- **Stack**: LIFO operations, undo/redo, expression evaluation

### Techniques
- **Two Pointers**: Sorted arrays, palindromes, pairs/triplets
- **Sliding Window**: Consecutive elements, subarrays
- **Counter Pattern**: Frequency comparison, anagrams

---

## 📝 Notes

- All implementations prioritize clarity over optimization
- Code includes Chinese comments in some files for learning purposes
- Some files contain multiple solution approaches (commented)
- Test cases included in most files

---

## 🤝 Contributing

Feel free to:
- Add more algorithm implementations
- Improve existing code
- Add more detailed explanations
- Fix bugs or optimize performance

---

## 📄 License

This is a personal learning collection. Use freely for educational purposes.

---

**Happy Coding! 🎉**
