class Hashtable {
  // m =hashtable size
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i <= this.size; i++) {
      this.table.push([]);
    }
  }
  // division method
  hash_1(key) {
    return key % this.size;
  }

  // multiplication method
  hash_2(key) {
    let parsedkey = typeof key !== "number" ? this.parse(key) : key;
    const A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((parsedkey * A) % 1));
  }

  // parse string to number
  parse(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i);
    }
    return result % this.size;
  }
  set(key, value) {
    // value: Mike key: 11545
    let index = this.hash_2(key);
    this.table[index].push({ key, value });
  }
  get(key) {
    const index = this.hash_2(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) {
        return this.table[index][i];
      }
    }
    return null;
  }
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
