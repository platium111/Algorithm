/**
 * push(el) | add new
 * insert(el, position)
 * getElementAt(index)
 * remove(el)
 * indexOf(el)
 * removeAt(position)
 * isEmpty()
 * size()
 *
 */
export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      // ! need to iterate by this way
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }
}

export class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}
