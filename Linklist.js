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
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  } // push
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
myLinklist.printAll();
