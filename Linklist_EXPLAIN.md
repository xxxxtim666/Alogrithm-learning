# Linked List Implementation

## Overview
This file implements a **Singly Linked List** data structure in JavaScript, consisting of two classes: `Node` and `Linklist`.

## Data Structure Components

### Node Class
```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
```
- **Purpose**: Represents a single node in the linked list
- **Properties**:
  - `value`: Stores the data
  - `next`: Reference to the next node (null if it's the last node)

### Linklist Class
```javascript
class Linklist {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}
```
- **Purpose**: Manages the linked list structure
- **Properties**:
  - `head`: Reference to the first node
  - `length`: Total number of nodes in the list

---

## Methods

### 1. push(value)
**Purpose**: Adds a new node to the end of the list

**Time Complexity**: O(n) - must traverse to the end

**Logic**:
- **Case 1** (Empty list): Set the new node as head
- **Case 2** (Has nodes): Traverse to the last node and append the new node

```javascript
push(value) {
  let newNode = new Node(value);
  if (this.length === 0) {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
  this.length++;
}
```

---

### 2. pop()
**Purpose**: Removes and returns the last node

**Time Complexity**: O(n) - must traverse to second-to-last node

**Logic**:
- **Case 1** (Empty list): Return undefined
- **Case 2** (Single node): Remove head and return it
- **Case 3** (Multiple nodes): Traverse to second-to-last node, remove its next reference

```javascript
pop() {
  if (!this.head) {
    return;
  } else if (this.length === 1) {
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
}
```

---

### 3. shift()
**Purpose**: Removes and returns the first node (head)

**Time Complexity**: O(1) - direct access to head

**Logic**:
- **Case 1** (Empty list): Return undefined
- **Case 2** (Single node): Remove head
- **Case 3** (Multiple nodes): Move head to the next node

```javascript
shift() {
  if (!this.head) {
    return;
  } else if (this.length === 1) {
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
```

---

### 4. unshift(value)
**Purpose**: Adds a new node to the beginning of the list

**Time Complexity**: O(1) - direct insertion at head

**Logic**:
- Create new node
- Point new node's next to current head
- Update head to new node

```javascript
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
```

---

### 5. insertAt(index, value)
**Purpose**: Inserts a new node at a specific index

**Time Complexity**: O(n) - may need to traverse to index

**Logic**:
- **Case 1** (Invalid index): Return null
- **Case 2** (Index = 0): Use unshift()
- **Case 3** (Index = length): Use push()
- **Other cases**: Traverse to index-1, insert new node between current and next

```javascript
insertAt(index, value) {
  if (index > this.length || index < 0) {
    return null;
  } else if (index === 0) {
    this.unshift(value);
    return;
  } else if (index === this.length) {
    this.push(value);
    return;
  }
  let currentNode = this.head;
  let newNode = new Node(value);
  for (let i = 1; i <= index - 1; i++) {
    currentNode = currentNode.next;
  }
  newNode.next = currentNode.next;
  currentNode.next = newNode;
  this.length++;
}
```

**Visual Example**:
```
Before: A -> B -> D
insertAt(2, "C")
After:  A -> B -> C -> D
```

---

### 6. removeAt(index)
**Purpose**: Removes and returns the node at a specific index

**Time Complexity**: O(n) - may need to traverse to index

**Logic**:
- **Case 1** (Invalid index): Return null
- **Case 2** (Index = 0): Use shift()
- **Case 3** (Index = length): Use pop()
- **Other cases**: Traverse to index-1, skip over the target node

```javascript
removeAt(index) {
  if (index > this.length || index < 0) {
    return null;
  } else if (index === 0) {
    let result = this.shift();
    return result;
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
```

---

### 7. get(index)
**Purpose**: Returns the value at a specific index

**Time Complexity**: O(n) - must traverse to index

**Logic**:
- Validate index
- Traverse to the target node
- Return its value

```javascript
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
```

---

### 8. printAll()
**Purpose**: Prints all values in the linked list

**Time Complexity**: O(n) - visits each node

```javascript
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
```

---

## Usage Example

```javascript
let myLinklist = new Linklist();
myLinklist.push("Tim");    // List: Tim
myLinklist.push("Mike");   // List: Tim -> Mike
myLinklist.push("Jame");   // List: Tim -> Mike -> Jame
myLinklist.push("Jason");  // List: Tim -> Mike -> Jame -> Jason

console.log(myLinklist.get(3)); // Output: "Jason"
```

---

## Time Complexity Summary

| Operation | Time Complexity | Reason |
|-----------|----------------|--------|
| push() | O(n) | Must traverse to end |
| pop() | O(n) | Must traverse to second-to-last |
| shift() | O(1) | Direct access to head |
| unshift() | O(1) | Direct insertion at head |
| insertAt() | O(n) | May need to traverse |
| removeAt() | O(n) | May need to traverse |
| get() | O(n) | Must traverse to index |
| printAll() | O(n) | Visits each node |

---

## Key Concepts

### What is a Linked List?
A linked list is a linear data structure where elements are stored in nodes. Each node contains:
1. **Data** (value)
2. **Pointer** to the next node (next)

### Advantages
- Dynamic size (grows/shrinks as needed)
- Efficient insertion/deletion at beginning (O(1))
- No memory waste from pre-allocation

### Disadvantages
- No random access (must traverse from head)
- Extra memory for pointers
- Not cache-friendly

### Singly vs Doubly Linked List
This implementation is a **singly linked list** (only points forward). A doubly linked list would also have a `prev` pointer pointing to the previous node.

---

## Common Pitfalls

1. **Forgetting to update length**: Always increment/decrement length when adding/removing nodes
2. **Edge cases**: Handle empty list, single node, and boundary indices
3. **Losing references**: When removing nodes, ensure you don't lose access to remaining nodes
4. **Off-by-one errors**: Be careful with loop conditions when traversing

---

## Improvements for Production Code

1. **Add error handling**: Throw meaningful errors instead of returning null
2. **Add set() method**: To update value at specific index
3. **Add reverse() method**: To reverse the linked list
4. **Add search() method**: To find index of a value
5. **Optimize pop()**: Could maintain a tail pointer for O(1) access to last node
6. **Type checking**: Validate input types
