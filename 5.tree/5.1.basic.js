// Tree is used to store non-sequencial data, diffirence with HashTable
/**
 * level = the depth
 *  root node is level 0, down the tree, the level increases
 * internal node, external node
 *  internal node has at least 1 child
 *  external node = leaf -> has zero child
 * ancestor
 *  is the parent or grandparent, great-grandparent
 * subtree
 *  consist a node and its descendant
 * height
 *  is the maximum of level
 *
 */

// 1. Binary tree
/**
 * have 2 children including left and right
 * why?
 *  it makes efficient algorithm for insert, search, delete a node from the tree because we know the DIFFERENCE in the left and right
 *    BINARY SEARCH TREE is the special of difference where the left is lesser value, right is the greater value
 *      create NODE -> we have left and right and key which defines the node
 *        need compare() to know how the child will be the left/right
 *          Think about BinarySearchTree class -> we need ROOT and bunch of functions
 *            insert(key)
 *              we need to do RECURSIVE + COMPARE + ASSIGN VALUE because how can we travel to the tree from top-down
 *            search(key)
 *            remove(key)
 *            inOrderTraverse() || preOrderTraverse()
 *            min() || max()
 *
 *
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    // function
    const insertNode = (node, key) => {
      if (node.key < key) {
        if (node.left === null) {
          node.left = new Node(key);
        } else {
          insertNode(node.left, key);
        }
      } else {
        if (node.right === null) {
          node.right = new Node(key);
        } else {
          insertNode(node.right, key);
        }
      }
    };

    // start function
    if (this.root === null) {
      this.root = new Node(key);
    } else {
      insertNode(this.root, key);
    }
  }

  /**
   * go from left, when we use node.left -> it runs function again in recursive way -> reach to the leaf -> go visit parent -> then go right
   *  shorcut = left -> parent -> right
   */
  inorderTraverse() {
    const inOrderTraverseNode = (node) => {
      if (node !== null) {
        inOrderTraverseNode(node.left);
        console.log("node", node);
        inOrderTraverseNode(node.right);
      }
    };
    inOrderTraverseNode(this.root);
  }

  // parent -> left -> right
  preorderTraverse() {
    const inOrderTraverseNode = (node) => {
      if (node !== null) {
        console.log("node", node);
        inOrderTraverseNode(node.left);
        inOrderTraverseNode(node.right);
      }
    };
    inOrderTraverseNode(this.root);
  }

  // left -> right -> parent
  postorderTraverse() {
    const inOrderTraverseNode = (node) => {
      if (node !== null) {
        inOrderTraverseNode(node.left);
        inOrderTraverseNode(node.right);
        console.log("node", node);
      }
    };
    inOrderTraverseNode(this.root);
  }

  // search min max values
  max() {
    let current = this.root;
    while (current !== null && current.left !== null) {
      current = current.left;
    }
    return current;
  }
  min() {
    let current = this.root;
    while (current !== null && current.right !== null) {
      current = current.right;
    }
    return current;
  }

  search(key) {
    const searchKey = (node, key) => {
      if (node === null) {
        console.log("not found");
        return false;
      }
      if (node.key < key) {
        return searchKey(node.left, key);
      } else if (node.key > key) {
        return searchKey(node.right, key);
      } else {
        console.log("Found ", key);
        return true;
      }
    };

    searchKey(this.root, key);
  }

  remove(key) {
    const minNode = (node) => {
      let current = node;
      while (current !== null && current.left !== null) {
        current = current.left;
      }
      return current;
    };

    const removeNode = (node, key) => {
      if (node === null) {
        return null;
      }

      if (node.key < key) {
        node.left = removeNode(node.left, key);
        return node;
      } else if (node.key > key) {
        node.right = removeNode(node.right, key);
        return node;
      } else {
        // case 1 without leaf
        if (node.left === null && node.right === null) {
          node = null;
        }
        // case 2 has leaf
        if (node.left === null) {
          node = node.right;
          return node;
        } else if (node.right === null) {
          node = node.left;
          return node;
        }
        // case 3 has subtree -> need to calculate min value for removed node
        const minNode = minNode(node);
      }
    };
  }
}

const myTree = new BinarySearchTree();
myTree.insert(12);
myTree.insert(14);
myTree.insert(11);
myTree.insert(16);
myTree.insert(9);
// console.log(myTree);
myTree.inorderTraverse();
console.log(myTree.min());

myTree.search(9);
