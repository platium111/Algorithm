/**
 * push | add element at top
 * pop | remove the top element
 * peek | return top
 * isEmpty()
 * clear()
 * size()
 */

class Stack {
  constructor() {
    this.count = 0;
    this.items = [];
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  isEmpty() {
    return this.count === 0;
  }

  // remove last element added(same as array)
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  print() {
    for (const element of this.items) {
      console.log(element);
    }
  }
}

const testPush = new Stack();
testPush.push(10);
testPush.push(11);
// testPush.print();

testPush.pop();
testPush.print();
