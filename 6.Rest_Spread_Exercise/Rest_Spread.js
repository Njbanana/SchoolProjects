// Original

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

// Refactored

const filterOutOdds = (...arr) => {
    arr.filter((num) => num % 2 === 0)
}

const findMIn = (...arr) => Math.min(...arr)

const mergeObjects = (a,b) => ({...a,...b})

const doubleAndReturnArgs = (array,...args) => {
    args.map((val) => val * 2)
    return [...array,...args.map((val) => val * 2)]
 }

 /** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  let random = Math.floor(Math.random() * items.length)
  return items.map(function (value, index) {
    if(index !== random){
      return value
    }
  })
}
console.log(removeRandom([1,2,3,4]))

// const removeRandom = items => {
//   let idx = Math.floor(Math.random() * items.length);
//   return [...items.slice(0, idx), ...items.slice(idx + 1)];
// }


/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
return [...array1,...array2]
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val){
  let newObj = {...obj}
  newObj[key] = val
  return newObj
}


/** Return a new object with a key removed. */

function removeKey(obj, key){
  let newObj = {...obj}
  delete newObj[key]
  return newObj
}
// https://stackoverflow.com/questions/3455405/how-do-i-remove-a-key-from-a-javascript-object

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return {...obj1,...obj2}
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
let newObj = {...obj}
newObj[key] = val
return newObj
}