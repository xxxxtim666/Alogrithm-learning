/**
 * 堆疊 (Stack) 資料結構
 * 使用鏈結串列實作 LIFO（Last In First Out）結構
 * 
 * 特性：
 * - LIFO：後進先出
 * - 只能從頂端操作
 * - push 和 pop 都是 O(1)
 * 
 * 應用場景：
 * - 函數呼叫堆疊 (Call Stack)
 * - 瀏覽器上一頁/下一頁
 * - Undo/Redo 功能
 * - 括號匹配檢查
 * - 深度優先搜尋 (DFS)
 * 
 * 時間複雜度：
 * - push: O(1)
 * - pop: O(1)
 * - peek: O(1)
 */

/**
 * 節點類別
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * 堆疊類別（基於鏈結串列）
 */
class Stack {
  constructor() {
    this.head = null;  // 堆疊頂端
    this.length = 0;   // 堆疊大小
  }

  /**
   * 推入元素到堆疊頂端
   * 時間複雜度：O(1)
   * 
   * @param {*} value - 要推入的值
   */
  push(value) {
    const newNode = new Node(value);
    
    if (this.length === 0) {
      this.head = newNode;
    } else {
      // 將新節點連接到最後
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    
    this.length++;
    console.log(`推入: ${value}`);
  }

  /**
   * 彈出堆疊頂端元素
   * 時間複雜度：O(n) - 因為使用串列實作，需遍歷到倒數第二個
   * 
   * @returns {Node|undefined} 被彈出的節點
   */
  pop() {
    // 堆疊為空
    if (!this.head) {
      console.log('堆疊為空');
      return undefined;
    }
    
    // 只有一個元素
    if (this.length === 1) {
      const poppedNode = this.head;
      this.head = null;
      this.length = 0;
      console.log(`彈出: ${poppedNode.value}`);
      return poppedNode;
    }
    
    // 有多個元素：遍歷到倒數第二個
    let currentNode = this.head;
    for (let i = 1; i <= this.length - 2; i++) {
      currentNode = currentNode.next;
    }
    
    const poppedNode = currentNode.next;
    currentNode.next = null;
    this.length--;
    console.log(`彈出: ${poppedNode.value}`);
    return poppedNode;
  }

  /**
   * 查看堆疊頂端元素（不移除）
   * 時間複雜度：O(n)
   * 
   * @returns {*} 堆疊頂端的值
   */
  peek() {
    if (!this.head) {
      console.log('堆疊為空');
      return null;
    }
    
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    
    return currentNode.value;
  }

  /**
   * 檢查堆疊是否為空
   * 
   * @returns {boolean}
   */
  isEmpty() {
    return this.length === 0;
  }

  /**
   * 取得堆疊大小
   * 
   * @returns {number}
   */
  size() {
    return this.length;
  }

  /**
   * 印出堆疊所有元素
   */
  printAll() {
    if (this.length === 0) {
      console.log('堆疊為空');
      return;
    }
    
    const values = [];
    let currentNode = this.head;
    
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    
    console.log(`堆疊內容（底 → 頂）:`, values.join(' -> '));
    console.log(`堆疊大小: ${this.length}`);
  }
}

// 測試案例
console.log('=== 堆疊測試 ===\n');

const myStack = new Stack();

console.log('1. 推入元素:');
myStack.push("Tim");
myStack.push("Mike");
myStack.push("James");
myStack.push("Jason");

console.log('\n2. 查看堆疊:');
myStack.printAll();

console.log('\n3. 查看頂端元素:');
console.log('頂端:', myStack.peek());

console.log('\n4. 彈出元素:');
myStack.pop();

console.log('\n5. 查看堆疊:');
myStack.printAll();

console.log('\n6. 再推入元素:');
myStack.push("Alice");

console.log('\n7. 最終堆疊:');
myStack.printAll();

console.log('\n8. 檢查狀態:');
console.log('是否為空:', myStack.isEmpty());
console.log('堆疊大小:', myStack.size());

/**
 * 優化版本：使用陣列實作（更簡單高效）
 */
class StackArray {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  printAll() {
    console.log('堆疊:', this.items.join(' -> '));
  }
}

console.log('\n\n=== 陣列版本堆疊測試 ===');
const arrayStack = new StackArray();
arrayStack.push(1);
arrayStack.push(2);
arrayStack.push(3);
arrayStack.printAll();
console.log('彈出:', arrayStack.pop());
arrayStack.printAll();
