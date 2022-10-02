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
  push(value) {
    let newNode = new Node(value);
    // case 1 : 原本沒有任何節點，現在插入一個新節點
    // this : linklist
    if (this.length === 0) {
      this.head = newNode;
    }
    //  case 2 : 已有節點，現在加入新節點
    else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  } // push
  // pop 掉最後一個節點
  pop() {
    // 沒有任何一個節點
    if (!this.head) {
      return;
    }
    // 只有一個節點
    else if (this.length === 1) {
      let temp = this.head;
      this.head = null;
      this.length = 0;
      return temp;
    } else {
      let currentNode = this.head;
      for (let i = 1; i <= this.length - 2; i++) {
        currentNode = currentNode.next;
      }
      let temp = currentNode.next;
      currentNode.next = null;
      this.length--;
      return temp;
    }
  } // pop
  shift() {
    if (!this.head) {
      return;
    } else if (this.length === 1) {
      // temp 表示 shift掉的值
      let temp = this.head;
      this.head = null;
      this.length--;
      return temp;
    } else {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }
  }
  unshift(value) {
    if (!this.head) {
      this.head = new Node(value);
    } else {
      let temp = this.head;
      let newNode = new Node(value);
      this.head = newNode;
      newNode.next = temp;
    }
    this.length++;
  }
  // 於指定index插入指定節點
  insertAt(index, value) {
    // case1 指定的index不存在
    if (index > this.length || index < 0) {
      return null;
    } else if (index === 0) {
      // case2 插到第一個節點
      this.unshift(value);
      return;
    } else if (index === this.length) {
      // case3 插到最後一個節點
      this.push(value);
      return;
    }
    // other case
    let currentNode = this.head;
    let newNode = new Node(value);
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return;
  }

  // Remove At (刪除指定節點)
  removeAt(index) {
    // 指定的節點不存在
    if (index > this.length || index < 0) {
      return null;
      // 指定節點為第一個節點
    } else if (index === 0) {
      let result = this.shift();
      return result;
      // 指定節點為最後一個節點
    } else if (index === this.length) {
      let result = this.pop();
      return result;
    }

    let currentNode = this.head;
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }
    let temp = currentNode.next;
    currentNode.next = currentNode.next.next;
    this.length--;
    return temp;
  }
  // 取得指定節點的值
  get(index) {
    if (index >= this.length || index < 0) {
      return null;
    }
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }
  printAll() {
    if (this.length == 0) {
      console.log(`nothing in the linklist`);
    } else {
      let currentNode = this.head;
      while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  }
}

let myLinklist = new Linklist();
myLinklist.push("Tim");
myLinklist.push("Mike");
myLinklist.push("Jame");
myLinklist.push("Jason");
// console.log(myLinklist.pop());
// console.log(myLinklist.shift());
// myLinklist.unshift("Kevin");
//myLinklist.insertAt(2, "kevin");
//myLinklist.removeAt(2);
console.log(myLinklist.get(3));
//myLinklist.printAll();
