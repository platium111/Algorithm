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
 *        add directly in the hashtable by probing, if the position (hashCode value) is occupied, index = position + 1
 *           index    key-value   hash
 *            4           john      4
 *            5           clark     5
 *            6           kan       5 (here is empty before so we add here)
 *        problems | delete -> if we remove only element, then will have empty spot in the hash table. There are empty and still have hash-with-value  -> bug
 *        solutions
 *          (1) soft delete | have deleted value in value, then find next spot until found it
 *          (2) backward position | delete whole element, move the next same hash value to this postion by backward, do the same until get the last one, and backward the forward (not same hash value) 1 time
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
// using linkedlist
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

// backward position
class HashBackwardTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  // the same as separate chaining
  // example of key : Johhn, value : josh.han@gmail.com
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      if (this.table[position] == null) {
        this.table[position] = new ValuePair(key, value);
      } else {
        let index = position + 1;
        while (this.table[index] != null) {
          index++;
        }
        this.table[index] = new ValuePair(key, value);
      }
      return true;
    }
    return false;
  }

  get(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      if (this.table[position].key === key) {
        return this.table[position].value;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        return this.table[position].value;
      }
    }
    return undefined;
  }

  remove(key) {
    const position = this.hashCode(key);
    if (this.table[position] != null) {
      // after if condition, we need to iterate through because there are many rows have the same hash, it could be similar key or not
      if (this.table[position].key === key) {
        delete this.table[position];
        this.verifyRemoveSideEffect(key, position);
        return true;
      }
      let index = position + 1;
      while (this.table[index] != null && this.table[index].key !== key) {
        index++;
      }
      if (this.table[index] != null && this.table[index].key === key) {
        delete this.table[index];
        this.verifyRemoveSideEffect(key, index);
        return true;
      }
    }
    return false;
  }

  verifyRemoveSideEffect(key, removedPosition) {
    const hash = this.hashCode(key);
    let index = removedPosition + 1;
    while (this.table[index] != null) {
      const posHash = this.hashCode(this.table[index].key);
      if (posHash <= hash || posHash <= removedPosition) {
        this.table[removedPosition] = this.table[index];
        delete this.table[index];
        removedPosition = index;
      }
      index++;
    }
  }
}
