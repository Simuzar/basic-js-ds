const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor(value) {
    this.rootNode = { value, left: null, right: null };
    this.count = 1;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.count++;
    const newNode = { value: data, left: null, right: null };

    function searchTree(node) {
      if (data < node.value) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (data > node.value) {
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
      if (data === currentNode.value) {
        return true;
      } else {
        if (data < currentNode.value) {
          currentNode = currentNode.left;
        } else if (data > currentNode.value) {
          currentNode = currentNode.right;
        }
      }
    }
    return false;
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.value) {
        return currentNode.value;
      } else {
        if (data < currentNode.value) {
          currentNode = currentNode.left;
        } else if (data > currentNode.value) {
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
      if (data === node.value) {
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
        node.value = tempNode.value;
        node.right = removeNode(node.right, tempNode.value);
        return node;
      } else if (data < node.value) {
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
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.value;
  }

  max() {
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.value;
  }
}

module.exports = {
  BinarySearchTree,
};
