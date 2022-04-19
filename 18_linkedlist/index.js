// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  //Node constructor function, null if no next argument
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  //create a new linked list
  constructor() {
    this.head = null;
  }
  //create a new node head with the given data, then reference the old head
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    //set counter
    let counter = 0;
    //set the first node to head
    let node = this.head;
    //while not null, add to counter, the go to next
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    //just return the head
    return this.head;
  }
  getLast() {
    //if there is no head, return the null
    if (!this.head) return null;
    let node = this.head;
    //while there is a node, go to the next until...
    while (node) {
      //if node.next is null, return the current node
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  //just point the head to null
  clear() {
    this.head = null;
  }
  removeFirst() {
    this.head = this.head.next;
  }
  removeLast() {
    //if there is no head, return null
    if (!this.head) return null;
    //if there is only one node, just set the head to null
    if (!this.head.next) {
      this.head = null;
      return;
    }
    //set the first node to head
    let node = this.head;
    //while there is a node, go to the next until...
    while (node.next) {
      //if node.next is null, set the next to null
      if (!node.next.next) {
        node.next = null;
        return;
      }
      node = node.next;
    }
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    //while there is a node
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    //if there is no node, return null
    return null;
  }

  removeAt(index) {
    //if there is no head, return null
    if (!this.head) return null;
    //if index is zero, remove the head
    if (index === 0) this.head = this.head.next;
    //set previous to the node before the one we want to remove
    const previous = this.getAt(index - 1);
    //if there is no previous or the next node is null, return null
    if (!previous || !previous.next) return null;
    //otherwise, set the next to the next next node, skipping the node we want to remove
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    //if there is no head, set the head to the new node
    if (!this.head) return (this.head = new Node(data));
    //if index is zero, this is the same as insertFirst
    if (index === 0) return this.insertFirst(data);
    //if previous is null or overbound
    const previous = this.getAt(index - 1) || this.getLast();
    //set the previous.next to the new node and the next of the new node to the next of the previous
    previous.next = new Node(data, previous.next);
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
