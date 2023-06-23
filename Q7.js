//Design a queue that supports `push` and `pop` operations in the front, middle, and back.
class ListNode {
    constructor(val) {
      this.val = val;
      this.prev = null;
      this.next = null;
    }
  }
  
  class FrontMiddleBackQueue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.middle = null;
      this.size = 0;
    }
  
    pushFront(val) {
      const newNode = new ListNode(val);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        this.middle = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        if (this.size % 2 === 0) {
          this.middle = this.middle.prev;
        }
      }
      this.size++;
    }
  
    pushMiddle(val) {
      const newNode = new ListNode(val);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        this.middle = newNode;
      } else if (this.size % 2 === 0) {
        newNode.prev = this.middle;
        newNode.next = this.middle.next;
        if (this.middle.next !== null) {
          this.middle.next.prev = newNode;
        }
        this.middle.next = newNode;
        this.middle = newNode;
      } else {
        newNode.next = this.middle;
        newNode.prev = this.middle.prev;
        if (this.middle.prev !== null) {
          this.middle.prev.next = newNode;
        }
        this.middle.prev = newNode;
        this.middle = newNode;
      }
      this.size++;
    }
  
    pushBack(val) {
      const newNode = new ListNode(val);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
        this.middle = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        if (this.size % 2 !== 0) {
          this.middle = this.middle.next;
        }
      }
      this.size++;
    }
  
    popFront() {
      if (this.head === null) {
        return 1;
      }
      const val = this.head.val;
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null;
        this.middle = null;
      } else {
        this.head.prev = null;
        if (this.size % 2 === 0) {
          this.middle = this.middle.next;
        }
      }
      this.size--;
      return val;
    }
  
    popMiddle() {
      if (this.head === null) {
        return 1;
      }
      const val = this.middle.val;
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
        this.middle = null;
      } else if (this.size % 2 === 0) {
        this.middle.prev.next = this.middle.next;
        this.middle.next.prev = this.middle.prev;
        this.middle = this.middle.next;
      } else {
        this.middle.prev.next = this.middle.next;
        this.middle.next.prev = this.middle.prev;
        this.middle = this.middle.prev;
      }
      this.size--;
      return val;
    }
  
    popBack() {
      if (this.head === null) {
        return 1;
      }
      const val = this.tail.val;
      this.tail = this.tail.prev;
      if (this.tail === null) {
        this.head = null;
        this.middle = null;
      } else {
        this.tail.next = null;
        if (this.size % 2 !== 0) {
          this.middle = this.middle.prev;
        }
      }
      this.size--;
      return val;
    }
  }
//You can create an instance of the FrontMiddleBackQueue class and call the methods on it as shown in the example:
const q = new FrontMiddleBackQueue();
q.pushFront(1);
q.pushBack(2);
q.pushMiddle(3);
q.pushMiddle(4);
console.log(q.popFront());    // Output: 1
console.log(q.popMiddle());   // Output: 3
console.log(q.popMiddle());   // Output: 4
console.log(q.popBack());     // Output: 2
console.log(q.popFront());    // Output: -1
