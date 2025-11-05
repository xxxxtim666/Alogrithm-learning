// 哈希表類別
class Hashtable {
  // m = 哈希表大小
  constructor(size) {
    this.size = size;
    this.table = [];
    // 初始化哈希表，每個位置是一個陣列
    for (let i = 0; i <= this.size; i++) {
      this.table.push([]);
    }
  }
  // 除法取餘法計算雜湊值
  hash_1(key) {
    return key % this.size;
  }
  // 乘法法計算雜湊值
  hash_2(key) {
    let parsedkey = typeof key !== "number" ? this.parse(key) : key;
    const A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((parsedkey * A) % 1));
  }

  // 將字串轉換為數字
  parse(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i);
    }
    return result % this.size;
  }
  // 設定鍵值對
  set(key, value) {
    // value: Mike key: 11545
    let index = this.hash_2(key);
    this.table[index].push({ key, value });
  }
  // 根據鍵取得值
  get(key) {
    const index = this.hash_2(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        return this.table[index][i];
      }
    }
    return null;
  }
  // 印出整個哈希表
  printAll() {
    console.log(this.table);
  }
}

let myHashTable = new Hashtable(6);
// myHashTable.set(11424, "mike");
// myHashTable.set(14, "tim");
// myHashTable.set(113, "Jason");

// css
myHashTable.set("white", "#FFFFFF");
myHashTable.set("magenta", "#FF00FF");
myHashTable.set("red", "#FF0000");

myHashTable.printAll();

console.log(myHashTable.get("red"));
