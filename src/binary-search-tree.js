const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootElement = null;
  }

  root() {
    return this.rootElement === null ? null : this.rootElement;
  }

  add(data) {
    this.rootElement = addNode(this.rootElement, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (node.data < data) {
        node.right = addNode(node.right, data);
      } else {
        node.left = addNode(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    return searchInTree(this.rootElement, data);
    function searchInTree(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

      return data < node.data
        ? searchInTree(node.left, data)
        : searchInTree(node.right, data);
    }
  }

  find(data) {
    return searchNodeInTree(this.rootElement, data);

    function searchNodeInTree(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      return data < node.data
        ? searchNodeInTree(node.left, data)
        : searchNodeInTree(node.right, data);
    }
  }

  remove(data) {
    this.rootElement = removeNode(this.rootElement, data);
  
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
  
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
  
        if (!node.left) {
          return node.right;
        }
  
        if (!node.right) {
          return node.left;
        }
  
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootElement) {
      return null;
    }
    let node = this.rootElement;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootElement) {
      return null;
    }
    let node = this.rootElement;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
