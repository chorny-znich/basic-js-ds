const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (this.root() === null) {
      this.rootNode = new Node(data);
    }
    else {
      let current = this.root();
      while (current) {
        if (current.left === null && current.right === null) {
          if (data < current.data) current.left = new Node(data);
          else current.right = new Node(data);
          break;
        }
        else if (data < current.data && current.left === null) {
          current.left = new Node(data);
          break;
        } 
        else if (data > current.data && current.right === null) {
          current.right = new Node(data);
          break;
        } 
        else if (data < current.data && current.left != null) current = current.left;
        else if (data > current.data && current.right != null) current = current.right;
      }
    }
  }

  has(data) {
    return this.find(data) != null;
  }

  find(data) {
    let current = this.root();
    while (current) {
      if (current.data === data) return current;
      else {
        current = (data < current.data) ? current.left : current.right;
      }
    }
    return null;
  }

  remove(data) {
    let current = this.root();
    let parent = null;
    while (current) {
      if (current.data === data) {
        if (current.left != null && current.right != null) {
          let deletedNode = current;
          parent = current;
          current = current.right;
          while (current) {
            if (current.left != null) {
              parent = current;
              current = current.left;
            }
            else {
              if (deletedNode.data === this.rootNode.date) this.rootNode.data = current.data;
              else deletedNode.data = current.data;
              break;
            }
          }
        }
        if (current.left === null && current.right === null) {
          if (parent.left === current) parent.left = null;
          else parent.right = null;
        }
        if (current.left != null) {
          if (parent.left === current) parent.left = current.left;
          else parent.right = current.left;
        }
        else if (current.right != null) {
          if (parent.left === current) parent.left = current.right;
          else parent.right = current.right;
        }    
        return;     
      } 
      else {
        parent = current;
        current = (data < current.data) ? current.left : current.right;
      }
    }
    return;
  }

  min() {
    if (this.root() === null) return null;
    let current = this.root();
    while (current) {
      if (current.left === null) return current.data;
      else current = current.left;
    }
  }

  max() {
    if (this.root() === null) return null;
    let current = this.root();
    while (current) {
      if (current.right === null) return current.data;
      else current = current.right;
    }
  }
}

module.exports = {
  BinarySearchTree
};