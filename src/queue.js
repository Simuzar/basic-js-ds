const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = this.tail = null;
  }

  //show queue
  getUnderlyingList() {
    return this.head;
  }

  //add to the end
  enqueue(value) {
    const newNode = new Node(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    //change tail to the new node
    this.tail = newNode;
    //if thуre is no head at all, then the node becomes the head
    if (!this.head) {
      this.head = newNode;
    }
  }

  dequeue() {
    //if there is no head
    if (!this.head) {
      return null;
    }
    const removedHead = this.head.value;
    //move head to the next one
    this.head = this.head.next;
    //if no head is left, then the list is empty, so have to change tail to null
    if (!this.head) {
      this.tail = null;
    }
    return removedHead;
  }
}

module.exports = {
  Queue,
};
