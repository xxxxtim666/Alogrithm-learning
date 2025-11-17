# Array Flattening Algorithm - arrayOfarrays.js

## Overview
This code implements a **recursive array flattening algorithm** that converts a deeply nested array into a flat, one-dimensional array.

## Algorithm Explanation

### Problem
Given a multi-dimensional nested array like:
```javascript
[[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]]]
```
Flatten it to: `["a", "b", "c", "d", "e", "f", "g", "h"]`

### Solution Approach

**Recursive Traversal:**
1. Iterate through each element in the array
2. Check if the element is itself an array using `Array.isArray()`
3. If it's an array → recursively call the function on that nested array
4. If it's not an array → push the value to the result array

### Code Walkthrough

```javascript
let result = [];  // Global array to store flattened values

const collection = (arrs) => {
  arrs.map((val) => {
    if (Array.isArray(val)) {
      collection(val);        // Recursive call for nested arrays
    } else {
      result.push(val);       // Base case: add non-array values
    }
  });
};
```

### Execution Flow Example
For input: `[1, [2, [3, 4]], 5]`

1. Process `1` → not array → push to result: `[1]`
2. Process `[2, [3, 4]]` → is array → recurse
   - Process `2` → not array → push: `[1, 2]`
   - Process `[3, 4]` → is array → recurse
     - Process `3` → push: `[1, 2, 3]`
     - Process `4` → push: `[1, 2, 3, 4]`
3. Process `5` → not array → push: `[1, 2, 3, 4, 5]`

## Time & Space Complexity

- **Time Complexity:** O(n) - where n is the total number of elements (including nested)
- **Space Complexity:** O(d) - where d is the maximum depth of nesting (call stack)

## Output
```javascript
// Input: [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]]]
// Output: ["a", "b", "c", "d", "e", "f", "g", "h"]
```

## Notes
- Uses a global `result` array to collect values across recursive calls
- The function mutates the external `result` array rather than returning a value
- Modern JavaScript alternative: `array.flat(Infinity)` achieves the same result
