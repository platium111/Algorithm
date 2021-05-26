/**
 * has unique values but different with set is KEY-VALUE PAIR
 * SET store [key,key] DICTIONARY has {key-value} key is single value but HASH could be multiple values
 * ECMA2015 -> Map, WeakMap, WeakSet
 *
 * function
 *  set(key,value)
 *  remove(key)
 *  hasKey(key) -> important because we used it in other functions
 *  get(key) -> just return value in ValuePair
 *  clear(), size(), isEmpty()
 *  keys() -> return array
 *  values() -> return array
 *  keyValues() -> array of key-value
 */

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn; // this Dictionary has function toStrFn()
    this.table = {}; // key - value is ValuePair is object key-value
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  get(key) {
    if (this.hasKey(this.toStrFn(key))) {
      return this.table[this.toStrFn(key)]?.value;
    }
  }

  keyValues() {
    return Object.values(this.table);
  }

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
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
