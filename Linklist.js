/**
 * 鏈結串列 (Linked List) 資料結構
 * 
 * 功能：實作單向鏈結串列及其基本操作
 * 
 * 特性：
 * - 動態大小：不需預先分配記憶體
 * - 插入/刪除效率高：O(1) 在頭部操作
 * - 無法隨機存取：需 O(n) 遍歷到指定位置
 * 
 * 應用場景：
 * - 實作 Stack、Queue
 * - 瀏覽器歷史記錄
 * - 音樂播放清單
 * - Undo/Redo 功能
 */

/**
 * 節點類別：鏈結串列的基本單位
 */
class Node {
  /**
   * @param {*} value - 節點儲存的值
   */
  constructor(value) {
    this.value = value;  // 節點的資料
    this.next = null;    // 指向下一個節點的指標
  }
}

/**
 * 鏈結串列類別
 */
class LinkedList {
  constructor() {
    this.head = null;  // 串列頭節點
    this.length = 0;   // 串列長度
  }

  /**
   * 在串列尾端新增節點
   * 時間複雜度：O(n) - 需遍歷到最後一個節點
   * 
   * @param {*} value - 要新增的值
   */
  push(value) {
    const newNode = new Node(value);
    
    // 情況 1：串列為空
    if (this.length === 0) {
      this.head = newNode;
    }
    // 情況 2：串列已有節點
    else {
      let currentNode = this.head;
      // 遍歷到最後一個節點
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      // 將新節點連接到最後
      currentNode.next = newNode;
    }
    
    this.length++;
  }

  /**
   * 移除並返回串列尾端的節點
   * 時間複雜度：O(n) - 需遍歷到倒數第二個節點
   * 
   * @returns {Node|undefined} 被移除的節點
   */
  pop() {
    // 情況 1：串列為空
    if (!this.head) {
      return undefined;
    }
    
    // 情況 2：只有一個節點
    if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.length = 0;
      return removedNode;
    }
    
    // 情況 3：有多個節點
    let currentNode = this.head;
    // 遍歷到倒數第二個節點
    for (let i = 1; i <= this.length - 2; i++) {
      currentNode = currentNode.next;
    }
    
    const removedNode = currentNode.next;
    currentNode.next = null;
    this.length--;
    return removedNode;
  }

  /**
   * 移除並返回串列頭部的節點
   * 時間複雜度：O(1)
   * 
   * @returns {Node|undefined} 被移除的節點
   */
  shift() {
    // 情況 1：串列為空
    if (!this.head) {
      return undefined;
    }
    
    // 情況 2：只有一個節點
    if (this.length === 1) {
      const removedNode = this.head;
      this.head = null;
      this.length = 0;
      return removedNode;
    }
    
    // 情況 3：有多個節點
    const removedNode = this.head;
    this.head = this.head.next;
    this.length--;
    return removedNode;
  }

  /**
   * 在串列頭部新增節點
   * 時間複雜度：O(1)
   * 
   * @param {*} value - 要新增的值
   */
  unshift(value) {
    const newNode = new Node(value);
    
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    
    this.length++;
  }

  /**
   * 在指定位置插入節點
   * 時間複雜度：O(n)
   * 
   * @param {number} index - 插入位置（0-based）
   * @param {*} value - 要插入的值
   * @returns {boolean} 是否成功插入
   */
  insertAt(index, value) {
    // 檢查索引是否有效
    if (index > this.length || index < 0) {
      console.log('索引超出範圍');
      return false;
    }
    
    // 在頭部插入
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    
    // 在尾部插入
    if (index === this.length) {
      this.push(value);
      return true;
    }
    
    // 在中間插入
    const newNode = new Node(value);
    let currentNode = this.head;
    
    // 遍歷到插入位置的前一個節點
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }
    
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return true;
  }

  /**
   * 移除指定位置的節點
   * 時間複雜度：O(n)
   * 
   * @param {number} index - 要移除的位置（0-based）
   * @returns {Node|null} 被移除的節點
   */
  removeAt(index) {
    // 檢查索引是否有效
    if (index >= this.length || index < 0) {
      console.log('索引超出範圍');
      return null;
    }
    
    // 移除頭部節點
    if (index === 0) {
      return this.shift();
    }
    
    // 移除尾部節點
    if (index === this.length - 1) {
      return this.pop();
    }
    
    // 移除中間節點
    let currentNode = this.head;
    
    // 遍歷到要移除位置的前一個節點
    for (let i = 1; i <= index - 1; i++) {
      currentNode = currentNode.next;
    }
    
    const removedNode = currentNode.next;
    currentNode.next = currentNode.next.next;
    this.length--;
    return removedNode;
  }

  /**
   * 取得指定位置的值
   * 時間複雜度：O(n)
   * 
   * @param {number} index - 位置（0-based）
   * @returns {*} 該位置的值，無效索引返回 null
   */
  get(index) {
    if (index >= this.length || index < 0) {
      console.log('索引超出範圍');
      return null;
    }
    
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    
    return currentNode.value;
  }

  /**
   * 印出串列所有元素
   */
  printAll() {
    if (this.length === 0) {
      console.log('串列為空');
      return;
    }
    
    const values = [];
    let currentNode = this.head;
    
    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    
    console.log(`串列內容（長度 ${this.length}）:`, values.join(' -> '));
  }
}

// 測試案例
console.log('=== 鏈結串列測試 ===');
const myLinkedList = new LinkedList();

console.log('\n1. 測試 push:');
myLinkedList.push("Tim");
myLinkedList.push("Mike");
myLinkedList.push("James");
myLinkedList.push("Jason");
myLinkedList.printAll();

console.log('\n2. 測試 get:');
console.log('索引 3 的值:', myLinkedList.get(3));

console.log('\n3. 測試 insertAt:');
myLinkedList.insertAt(2, "Kevin");
myLinkedList.printAll();

console.log('\n4. 測試 removeAt:');
myLinkedList.removeAt(2);
myLinkedList.printAll();

console.log('\n5. 測試 pop:');
myLinkedList.pop();
myLinkedList.printAll();

console.log('\n6. 測試 shift:');
myLinkedList.shift();
myLinkedList.printAll();

console.log('\n7. 測試 unshift:');
myLinkedList.unshift("Alice");
myLinkedList.printAll();
