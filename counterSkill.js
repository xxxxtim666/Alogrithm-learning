// 判斷兩個陣列中是否有相同元素，有則回傳 true，否則回傳 false
// 使用 Hash Table 技巧來優化查找效率 O(n+m)

function hasCommonElement(arr1, arr2) {
  // 將第一個陣列轉換為 Set 來加速查找
  const set = new Set(arr1);
  
  // 檢查第二個陣列是否有任何元素存在於 Set 中
  for (const element of arr2) {
    if (set.has(element)) {
      return true;
    }
  }
  
  return false;
}

// 測試案例
const arr1 = ["a", "u ", "f"];
const arr2 = ["z", "u", "s"];

console.log(hasCommonElement(arr1, arr2)); // false (因為 "u " 和 "u" 不同)
