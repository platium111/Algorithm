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
class LinkedList {
  constructor() {
    this.count = 0;
    this.head = undefined;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      // ! need to iterate by this way
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  insert(element, position) {
    const node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      let index = 0;
      while (current.next) {
        if (position === index) {
          let temporaryNextNode = current.next;
          current.next = node;
          node.next = temporaryNextNode;
        }
        current = current.next;
        index++;
      }
    }
    this.count++;
  }

  getElementAt(position) {
    if (this.count - 1 < position) {
      return null;
    }
    let current = this.head;

    let index = 0;
    while (current.next) {
      if (index === position) {
        return current;
      }

      index++;
      current = current.next;
    }
    return null;
  }

  removeAt(position) {
    if (this.count - 1 < position) {
      return null;
    }

    let current = this.head;
    let index = 0;
    while (current.next) {
      if (index === position - 1) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
      index++;
    }
  }

  remove(element) {
    if (!this.head) {
      return null;
    }
    let current = this.head;

    if (current.element === element) {
      this.head = current.next;
    }
    while (current.next) {
      if (current.next?.element === element) {
        current.next = current.next.next;
        break;
      }
      current = current.next;
    }
  }
}
class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

const testLinkedList = new LinkedList();
const aNode = new Node(1);
const aNode1 = new Node(2);
const aNode2 = new Node(3);
const aNode3 = new Node(4);
testLinkedList.push(1);
testLinkedList.push(2);
testLinkedList.push(3);
testLinkedList.insert(4, 1);

console.log("getElementAt 2,", testLinkedList.getElementAt(2));
console.log("print out initialization ", JSON.stringify(testLinkedList));
// testLinkedList.removeAt(1);
testLinkedList.remove(2);
console.log(JSON.stringify(testLinkedList)); // {"count":3,"head":{"element":1,"next":{"element":2,"next":{"element":3}}}}
