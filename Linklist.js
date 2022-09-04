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
console.log(myLinklist.pop());
myLinklist.printAll();
