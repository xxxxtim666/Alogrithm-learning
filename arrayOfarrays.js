/**
 * 陣列扁平化 (Array Flattening) - 使用遞迴
 * 
 * 功能：將多維嵌套陣列扁平化為一維陣列
 * 時間複雜度：O(n) - n 為所有元素總數
 * 空間複雜度：O(d) - d 為最大嵌套深度（遞迴呼叫堆疊）
 * 
 * 演算法：
 * 1. 遍歷陣列中的每個元素
 * 2. 若元素是陣列，遞迴處理該陣列
 * 3. 若元素不是陣列，加入結果陣列
 * 4. 重複直到所有元素都處理完畢
 * 
 * 範例：
 * [1, [2, [3, 4]], 5] → [1, 2, 3, 4, 5]
 * [[[["a"]]]] → ["a"]
 * 
 * 注意：現代 JavaScript 可使用 Array.prototype.flat(Infinity)
 */

// 儲存扁平化結果的陣列
let result = [];

/**
 * 遞迴扁平化陣列
 * 
 * @param {Array} arrays - 要扁平化的嵌套陣列
 */
const flattenArray = (arrays) => {
  arrays.forEach((element) => {
    // 檢查元素是否為陣列
    if (Array.isArray(element)) {
      // 若是陣列，遞迴處理
      flattenArray(element);
    } else {
      // 若不是陣列，加入結果
      result.push(element);
    }
  });
};

// 測試案例：深度嵌套的陣列
const nestedArray = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];

console.log('=== 陣列扁平化測試 ===');
console.log('原始陣列:', JSON.stringify(nestedArray));

flattenArray(nestedArray);
console.log('扁平化後:', result);

// 重置結果並測試其他案例
result = [];
const testArray2 = [1, [2, [3, 4]], 5, [6, [7, [8, 9]]]];
console.log('\n原始陣列:', JSON.stringify(testArray2));
flattenArray(testArray2);
console.log('扁平化後:', result);

/**
 * 優化版本：不使用外部變數，返回新陣列
 * 
 * @param {Array} arrays - 要扁平化的嵌套陣列
 * @returns {Array} 扁平化後的陣列
 */
const flattenArrayPure = (arrays) => {
  const result = [];
  
  const flatten = (arr) => {
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        flatten(element);
      } else {
        result.push(element);
      }
    });
  };
  
  flatten(arrays);
  return result;
};

console.log('\n=== 純函數版本測試 ===');
const testArray3 = [1, [2, [3, [4, [5]]]]];
console.log('原始陣列:', JSON.stringify(testArray3));
console.log('扁平化後:', flattenArrayPure(testArray3));

/**
 * 使用 ES6 原生方法
 */
console.log('\n=== ES6 原生方法 ===');
console.log('使用 flat(Infinity):', testArray3.flat(Infinity));

/**
 * 使用 reduce 的函數式寫法
 */
const flattenArrayReduce = (arr) => {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenArrayReduce(val) : val);
  }, []);
};

console.log('\n=== Reduce 版本測試 ===');
console.log('使用 reduce:', flattenArrayReduce(testArray3));
