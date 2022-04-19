// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    //put the root in an array
    const arr = [this.root];
    //while there is an element in the array
    while (arr.length) {
      //remove te first element in the array and put into node
      const node = arr.shift();
      //then place the node's children at the end using spread operator
      arr.push(...node.children);
      //pass the node to the function
      fn(node);
    }
  }

  traverseDF(fn) {
    //put the roo in an array
    const arr = [this.root];
    //while there is an element in the array
    while (arr.length) {
      //remove the first element in the array and put into node
      const node = arr.shift();
      //then place the node's children at the start using spread operator
      arr.unshift(...node.children);
      //pass the node to the function
      fn(node);
    }
  }
}

module.exports = { Tree, Node };
