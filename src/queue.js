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
    this.queue = [];
  }

  getUnderlyingList() {
    if (this.queue.length === 0) {
      return null;
    }
  
    let head = new ListNode(this.queue[this.queue.length - 1].value);
    let currentNode = head;
  
    for (let i = this.queue.length - 2; i >= 0; i--) {
      let newNode = new ListNode(this.queue[i].value);
      currentNode.next = newNode;
      currentNode = newNode;
    }
  
    return head;
    // remove line with error and write your code here
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this.queue.length === 0) {
        this.queue.push(node);
        return;
    }
    node.next = this.queue[this.queue.length - 1].value;
    this.queue.unshift(node);
    // remove line with error and write your code here
  }

  dequeue() {
    const elementForRemove = this.queue[this.queue.length - 1];
    if(this.queue.length === 0) {
      return undefined;
    }
    if(this.queue.length === 1) {
      return this.queue.pop();
    }
    this.queue[this.queue.length - 2].next = null;
    this.queue.pop();
    return elementForRemove.value;
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
