const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.array = [];
  }

  push(element) {
    this.array.push(element);
    // remove line with error and write your code here
  }

  pop() {
    if (this.array.length === 0) {
      return undefined;
    }
    let lastElement = this.array[this.array.length - 1];
    this.array = this.array.slice(0, this.array.length - 1);
    return lastElement;
    // remove line with error and write your code here
  }

  peek() {
    if (this.array.length === 0) {
      return undefined;
    }
    return this.array[this.array.length - 1];
    // remove line with error and write your code here
  }
}

module.exports = {
  Stack,
};
