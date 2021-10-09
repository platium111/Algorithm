/**
 * Functions
 *  + pop() | nhạc pop sẽ đến cuối, xóa cuối và return giá trị xóa >< push(values) thêm cuối và return length
 *  + shift() | phím shift là ngồi, xóa đầu và sẽ return result array >< unshift(values) | thêm đầu
 *  + slice(start,end) | return new array, cắt array ra, [start, end)
 *    - ['ant', 'bison', 'camel', 'duck', 'elephant'].slice(2) -> ["camel", "duck", "elephant"]
 *    - ['ant', 'bison', 'camel', 'duck', 'elephant'].slice(2,4) -> ["camel", "duck"]
 *  + splice(start, deleteCount, element1, element2...) | xóa or thêm elements, sẽ return cái đã xóa và array gọi sẽ được xóa or thêm + thường dùng thêm element vào giữa array
 *    - thêm vào giữa -> ['angel', 'clown', 'mandarin', 'sturgeon'].splice(2, 0, 'drum') -> return [] nhưng array đc gọi sẽ có ["angel", "clown", "drum", "mandarin", "sturgeon"]
 *    - xóa vị trí start -> ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'].splice(3, 1) -> sẽ return ['mandarin'] và array đc gọi ["angel", "clown", "drum", "sturgeon"]
 *
 *  + map(current, index) | using combine with index -> so powerful for skip elements | remember using with filter(Boolean)
 *  + at(index) | at(-1) return last item = arrayX[length-1]
 *  + concat(arrat) | merge array, return new array
 *  + copyWithin(target, start, end) | remember target là nơi value sẽ đc copy vào, `(start, end) = [)` | length của array sẽ đc bảo toàn
 *    - [1, 2, 3, 4, 5].copyWithin(-2) -> bắt đầu từ vị trí index = -2 và lấy giá trị từ đầu copy ra -> [1, 2, 3, 1, 2]
 *    - [1, 2, 3, 4, 5].copyWithin(0, 3) -> sẽ thay thế từ index=0 và bắt đầu từ vị trí 3 -> // [4, 5, 3, 4, 5]
 *    - ['a', 'b', 'c', 'd', 'e', 'f', 'g'].copyWithin(0, 3, 5); // ["d", "e", "c", "d", "e", "f", "g"]
 *  + array.entries() | return iterator -> dùng iterator.next().value -> return Array [0, firstValue] là index,value
 *  + every(fn) | return boolean, kiểm tra every element có pass đc ko
 *  + fill(value, start, end) | fill giá trị từ bắt đầu (default=0), end(length)
 *    - [1, 2, 3, 4].fill(0, 2, 4) -> [1, 2, 0, 0]
 *    - fill(5, 1) -> [1, 5, 5, 5]
 *    - fill(6) -> [6, 6, 6, 6]
 *  + filter(fn)
 *  + find(fn) | find first satified item
 *  + findIndex(fn) | return index of first satisfied item
 *  + flat(depth?) | recursive flat nested array -> return new array
 *  + flatMap(fn) | map using function to transform, then flat it
 *    - example [1, 2, 3, 4].flatMap(x -> [x, x * 2]) -> [1, 2, 2, 4, 3, 6, 4, 8]
 *  + forEach(fn)
 *  + Array.from(arrayOrString, fn) | create or transform String, array or object or Map, NodeList.. with fn
 *    - Array.from([1, 2, 3], x => x + x) -> [2, 4, 6]
 *  + includes(value)
 *  + indexOf(value) | find index of values could be string or number from array
 *  + Array.isArray(smt)
 *  + join(value) | join các element trong array
 *  + keys() -> return iterator có thể dùng for of để lấy key, thực ra giá trị là index vì default values từ key là 0,1,2...
 *  + map(fn)
 *  + Array.of(value) | tạo array of value bất kể type of value, có thể là (1,2,3) or (1)
 *    - Array.of(7) -> tạo array với 7 elements
 *    - Array.of(1, 2, 3) -> [1,2,3]
 *  + some(fn) | có element nào thỏa mãn đk ko
 */
// 1.Replacing first
// 1.1. replacing in first
//  + concat return new array -> immutable. We can use [..., newElement] with the same function
// * C1 | using immutation then concat
const addFirstArr = [0, 1, 2, 3, 4];
const newValue = -1;
const newAddFirstArr = addFirstArr
  .map((_, index) => {
    return addFirstArr[index + 1];
  })
  .filter(Boolean);
const resultNewAddFirstArr = [newValue].concat(newAddFirstArr);
console.log("resultNewAddFirstArr", resultNewAddFirstArr);

// * C2 | we can't go from 0 -> length because it will erase value unless using new Array
let addFirstArr1 = [0, 1, 2, 3, 4];
for (let i = addFirstArr1.length; i >= 0; i--) {
  addFirstArr1[i] = addFirstArr1[i - 1];
  if (i === 0) addFirstArr1[0] = newValue;
}
console.log("addFirstArr1", addFirstArr1);

// * C3 | using new array -> new array with 0 is new Value -> then newArr[i] = arr[i-1]
let addFirstArr2 = [0, 1, 2, 3, 4];
let newAddFirstArr2 = [];
for (let i = 0; i <= addFirstArr2.length; i++) {
  if (i === 0) newAddFirstArr2[0] = -1;
  else newAddFirstArr2[i] = addFirstArr2[i - 1];
}
console.log("newAddFirstArr2", newAddFirstArr2);

// * C4: spreading
const [removed, ...remainingExp1] = addFirstArr;
const newExp1 = [newValue, ...remainingExp1];
console.log("new values exp1 ", newExp1);

//1.2. add in last -> using push() OR concat OR spreading
// *********************************
// 2.remove
// 2.1 remove in first -> using map() for immutable OR shift() for mutable
let removeInFirst = [0, 1, 2, 3, 4];
for (let i = 0; i < removeInFirst.length; i++) {
  if (i === removeInFirst.length) break;
  removeInFirst[i] = removeInFirst[i + 1];
}
console.log("removeInFirst", removeInFirst);

// * using shift()
let removeInFirst1 = [0, 1, 2, 3, 4];
removeInFirst1.shift(0);
console.log("removeInFirst1", removeInFirst1);
// 2.2. remove in last -> pop()

// *********************************
// 3.update -> arr[i] = new value
