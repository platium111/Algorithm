// differences with Set and Map are not having entries, keys, values methods -> don't have iterator method -> so only access if know key
//  why? because performance -> they use OBJECT as KEY -> garbage collector can clean it

// methods
// - set(key, value)
// - get(key)
// - delete(key)

const map = new WeakMap();

const obj1 = { name: "clark", age: 29 };
const obj2 = { name: "jane", age: 32 };
const obj3 = { name: "May", age: 22 };

map.set(obj1, "clark.trinh@gmail.com");
map.set(obj2, "jane.tran@gmail.com");
map.set(obj3, "may.trinh@gmail.com");

map.get(obj1); // will return clark.trinh@gmail.com
