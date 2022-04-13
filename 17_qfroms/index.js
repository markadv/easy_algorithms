// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.stacka = new Stack();
    this.stackb = new Stack();
  }

  add(record) {
    this.stacka.push(record);
  }

  remove() {
    while (this.stacka.peek()) {
      this.stackb.push(this.stacka.pop());
    }
    const element = this.stackb.pop();
    while (this.stacka.peek()) {
      this.stackb.push(this.stacka.pop());
    }
    return element;
  }

  peek() {
    while (this.stacka.peek()) {
      this.stackb.push(this.stacka.pop());
    }
    const element = this.stackb.peek();
    while (this.stacka.peek()) {
      this.stackb.push(this.stacka.pop());
    }
    return element;
  }
}

module.exports = Queue;
