/**
 * purpose | called HashTable ~ HashMap -> focus finding a value in short time
 * differences | SET store [key,key] DICTIONARY has {key-value} key is single value but HASH could be multiple values
 * use cases
 *  - index for database (fast way to find the record)
 *  - represent object in JS
 *
 * UNDERSTANDING -> same as Dictionary, just have hashCode function
 *  name/key   hash function          hashValue             Hash table
 *  John        12 + 24 + 45 + 105      186                 186  ->   clark.tran@gmail.com
 *  Clark       22 + 46 + 11 + 66      145                 145  ->   hang.nga@gmail.com
 *
 * functions
 *  put(key,value)
 *  remove(key)
 *  get(key)
 *
 * More about Hash Set
 *  it is the same as hash table but because it is Set -> Set contains hash value by using hashCode(), not key-pair -> [hashValue, hashValue]
 *
 * PROBLEMS
 *  handling collision because even we use hashCode(), it still returns the same value
 *    -> Solution 1: Separate chaining
 *        using linkedlist and add more into key if it's the same hashCode value
 *        problems -> more memory
 *    -> Solution 2: Linear probing
 *        add directly in the hashtable by probing, if the position (hashCode value) is occupied, using key = position + 1
 *    -> Solution 3: double hashing
 */

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }

    const keyStr = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < keyStr.length; i++) {
      hash += keyStr.charCodeAt(i);
    }

    return hash % 39; // reduce big number
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

export function defaultToString(item) {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

// ----------------------------------------
class HashTableSeparateChaining {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new LinkedList();
      }
      this.table[position].push(new ValuePair(key, value));
      return true;
    }
    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          return current.element.value;
        }
        current = current.next;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (linkedList != null && !linkedList.isEmpty()) {
      let current = linkedList.getHead();
      while (current != null) {
        if (current.element.key === key) {
          linkedList.remove(current.element);
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return true;
        }
        current = current.next;
      }
    }
    return false;
  }
}
