const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    function searchTree(node) {
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    }
    searchTree(this.rootNode);
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      } else {
        if (data < currentNode.data) {
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          currentNode = currentNode.right;
        }
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else {
        if (data < currentNode.data) {
          currentNode = currentNode.left;
        } else if (data > currentNode.data) {
          currentNode = currentNode.right;
        }
      }
    }
    return null;
  }

  remove(data) {
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) return null;
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.rootNode) return null;
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
