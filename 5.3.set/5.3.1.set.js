// set doesn't have duplication ~ unique element + no concept of order
// example: set of prime number (has no divisors other than 1 and itself)

// basic operator | union, intersection, difference
/**
 * in ECMS2005 has function
 *  - add(element)
 *  - delete(element)
 *  - has(element)
 *  - clear(), size(), values()
 */

class Set {
  constructor() {
    this.items = {};
  }

  has(element) {
    return element in items;
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  union(otherSet) {
    // create a new empty set -> for loop for 2 sets
  }

  intersection(otherSet) {
    // for loop -> check has -> add to new Set
  }

  difference(otherSet) {
    // for loop otherSet -> if !has(element) we add into new Set
  }
}

const set = new Set();
set.add(1);
set.add(2);
