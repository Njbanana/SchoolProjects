// Quick Question #1
// What does the following code return?

new Set([1,1,2,2,3,4]) // {1,2,3,4}

// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("") // "ref"


// Quick Questions #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false); // {Array(3) => true, Array(3) => false}


// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

const hasDuplicate = (arr) => {
    new Set(arr).size !== arr.length
} 

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false


// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

const vowelCount = (str) => {
    let newMap = new Map()
    let vowels = [...'aeiou']
    for(let char of str){
        let lowerCased = char.toLowerCase()
        if(vowels.indexOf(lowerCased) !== -1){
            if(newMap.has(lowerCased)){
                newMap.set(lowerCased,newMap.get(lowerCased) + 1)
            }else {
                newMap.set(lowerCased, 1)
            }
        }
    }
    return newMap
}


vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }