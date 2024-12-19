const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

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
class Queue {

  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    let result = {};
    result.value = this.head.value;
    result.next = this.head.next;

    return result;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.head === null) {
      this.head = node;
    }
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  dequeue() {
    let value = this.head.value;
    this.head = this.head.next;
  
    return value;
  }
}

module.exports = {
  Queue
};
