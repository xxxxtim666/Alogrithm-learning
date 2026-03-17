/**
 * 費波納契數列 (Fibonacci Sequence)
 * 
 * 功能：計算費波納契數列的第 n 項
 * 時間複雜度：O(2^n) - 指數級，效率低（有大量重複計算）
 * 空間複雜度：O(n) - 遞迴呼叫堆疊深度
 * 
 * 數列規則：
 * F(0) = 0
 * F(1) = 1
 * F(n) = F(n-1) + F(n-2) for n >= 2
 * 
 * 數列：0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
 * 
 * 注意：此為遞迴實作，當 n 較大時效能較差
 * 建議使用記憶化 (Memoization) 或動態規劃 (Dynamic Programming) 來優化
 * 
 * @param {number} n - 要計算的項數（從 0 開始）
 * @returns {number} 返回第 n 項的費波納契數
 */
const fibonacci = (n) => {
  // 基礎情況：第 0 項為 0
  if (n === 0) {
    return 0;
  }
  // 基礎情況：第 1 項為 1
  else if (n === 1) {
    return 1;
  }
  // 遞迴情況：F(n) = F(n-1) + F(n-2)
  else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
};

// 測試：輸出前 31 項費波納契數列（0 到 30）
console.log('費波納契數列前 31 項：');
for (let i = 0; i <= 30; i++) {
  console.log(`F(${i}) = ${fibonacci(i)}`);
}

// 優化版本（使用記憶化）- 時間複雜度降至 O(n)
const fibonacciOptimized = (n, memo = {}) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memo[n]) return memo[n]; // 使用已計算過的結果
  
  memo[n] = fibonacciOptimized(n - 1, memo) + fibonacciOptimized(n - 2, memo);
  return memo[n];
};

console.log('\n優化版本測試：');
console.log(`F(50) = ${fibonacciOptimized(50)}`); // 可快速計算大數值
