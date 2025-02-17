// original 

function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }

//   refactored 

const createInstructor = (firstName, lastName) => {
    return {
      firstName,
      lastName
    }
  }
// original 
  var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

// refactored

const favoriteNumber = 42;

let instructor = {
  [firstName]: "Colt",
  [favoriteNumber]: "That is my favorite!"
}

instructor[favoriteNumber] = "That is my favorite!"

// original 

var instructor = {
  firstName: "Colt",
  sayHi: function(){
    return "Hi!";
  },
  sayBye: function(){
    return this.firstName + " says bye!";
  }
}

// refactored

var instructor = {
  firstName: "Colt",
  sayHi(){
    return "Hi!";
  },
  sayBye(){
    return this.firstName + " says bye!";
  }
}


const createAnimal = (species,verb,noise) => {
  return {
    species,
    [verb]: noise
  }
}