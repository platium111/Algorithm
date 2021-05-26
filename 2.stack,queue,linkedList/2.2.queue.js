/**
 * FIFO -> when dequeue, imagine as first one will go firt -> delete first array item
 */
class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // get first item
  peek() {}

  // dequeue -> remove first
  // enqueue -> add last
}
