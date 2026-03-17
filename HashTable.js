/**
 * 雜湊表 (Hash Table) 資料結構
 * 
 * 功能：實作基於雜湊函數的鍵值對儲存結構
 * 時間複雜度：
 * - set: O(1) 平均，O(n) 最差（碰撞多時）
 * - get: O(1) 平均，O(n) 最差
 * 空間複雜度：O(n)
 * 
 * 雜湊函數：
 * 1. Division Method (除法取餘法): hash = key % size
 * 2. Multiplication Method (乘法法): hash = floor(size * ((key * A) mod 1))
 *    其中 A = (√5 - 1) / 2 ≈ 0.618 (黃金比例)
 * 
 * 碰撞處理：使用 Chaining（鏈結法）
 * - 每個索引位置存放一個陣列
 * - 碰撞時將新元素加入該陣列
 */

class Hashtable {
  /**
   * 建構子
   * @param {number} size - 雜湊表的大小
   */
  constructor(size) {
    this.size = size;
    this.table = [];
    
    // 初始化雜湊表，每個位置是一個空陣列（用於處理碰撞）
    for (let i = 0; i < this.size; i++) {
      this.table.push([]);
    }
  }
  
  /**
   * 雜湊函數 1：除法取餘法 (Division Method)
   * 優點：簡單快速
   * 缺點：對 size 的選擇敏感
   * 
   * @param {number} key - 要雜湊的鍵
   * @returns {number} 雜湊值（索引位置）
   */
  hash1(key) {
    return key % this.size;
  }
  
  /**
   * 雜湊函數 2：乘法法 (Multiplication Method)
   * 使用黃金比例常數 A = (√5 - 1) / 2
   * 優點：對 size 的選擇不敏感
   * 
   * @param {number|string} key - 要雜湊的鍵
   * @returns {number} 雜湊值（索引位置）
   */
  hash2(key) {
    // 若鍵為字串，先轉換為數字
    const parsedKey = typeof key !== "number" ? this.parseString(key) : key;
    
    // 黃金比例常數
    const A = (Math.sqrt(5) - 1) / 2;
    
    // 乘法法公式：floor(m * ((key * A) mod 1))
    return Math.floor(this.size * ((parsedKey * A) % 1));
  }

  /**
   * 將字串轉換為數字（用於雜湊）
   * 方法：累加所有字元的 ASCII 碼
   * 
   * @param {string} str - 要解析的字串
   * @returns {number} 解析後的數字
   */
  parseString(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i);
    }
    return result % this.size;
  }
  
  /**
   * 設定鍵值對
   * 
   * @param {string|number} key - 鍵
   * @param {any} value - 值
   */
  set(key, value) {
    // 計算雜湊索引
    const index = this.hash2(key);
    
    // 將鍵值對加入對應位置的陣列（處理碰撞）
    this.table[index].push({ key, value });
  }
  
  /**
   * 根據鍵取得值
   * 
   * @param {string|number} key - 要查詢的鍵
   * @returns {Object|null} 返回 {key, value} 物件，找不到返回 null
   */
  get(key) {
    const index = this.hash2(key);
    
    // 在該索引的陣列中尋找對應的鍵
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        return this.table[index][i];
      }
    }
    
    // 找不到
    return null;
  }
  
  /**
   * 印出整個雜湊表的內容
   */
  printAll() {
    console.log('=== 雜湊表內容 ===');
    this.table.forEach((bucket, index) => {
      if (bucket.length > 0) {
        console.log(`索引 ${index}:`, bucket);
      }
    });
  }
}

// 測試範例：建立 CSS 顏色代碼的雜湊表
console.log('=== 建立雜湊表並儲存 CSS 顏色 ===');
const myHashTable = new Hashtable(6);

myHashTable.set("white", "#FFFFFF");
myHashTable.set("magenta", "#FF00FF");
myHashTable.set("red", "#FF0000");
myHashTable.set("blue", "#0000FF");
myHashTable.set("green", "#00FF00");

myHashTable.printAll();

console.log('\n=== 查詢顏色 ===');
console.log('red:', myHashTable.get("red"));
console.log('blue:', myHashTable.get("blue"));
console.log('yellow:', myHashTable.get("yellow")); // null
