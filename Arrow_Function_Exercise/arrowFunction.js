// original

function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
// refactored
  const double = (arr) => arr.map((value) => value * 2)

  
//   original
  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

// refactored

const squareAndFindEvens = (numbers) => {
    var squares = numbers.map((num) =>  num ** 2)
    var evens = squares.filter((square) => square % 2 === 0)
    return evens;
  }