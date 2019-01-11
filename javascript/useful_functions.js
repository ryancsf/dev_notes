// Time conversion challenge
// convert 12 hour time format into 24 hour format.
// input = 07:05:45 PM. Output = 19:30:35
function convertTo24Hours(input) {
  let isPM = input.indexOf('PM') > -1; // check if it's PM
  const arr = input.slice(0,8).split(':');
  const hour = arr[0];
  const is12Hour = hour === '12';
  // '00:00:00AM' => ['00', '00', '00']

  // if isPM and is12Hour, do nothing, else add 12
  if (isPM && !is12Hour) {
    arr[0] = Number(hour) + 12;
  } else if(is12Hour ) {
    // if is AM and 12 hour, make it 00. else, do nothing.
    arr[0] = '00';
  }

  // concat and convert to string
  return arr.join(':');
}

// Min-Max Sum challenge.
// Given 5 positive integers, find the minimum and maximum values that can be calculated by summing exacatly 4 of 5 integers. Then, print the respective min and max values as a single line of 2 space separated long integers.
function calcMinMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((sum, currentValue) => {
    return sum += currentValue;
  }, 0);

  return `${sum - max}, ${sum - min}`;
}

// Birthday Chocolate challenge
// n = number of bars
// s = array
// d = birthday = sumOfWeights
// m = month = numberOfBars
function (arr, numberOfBars, sumOfWeights) {
  return arr.reduce((total, value) => {
    let sum = 0;

    // iterate bars months/numberOfBars times
    for (let j = i; j < numberOfBars; j+=1) {
      //count sum of weight month time
      sum += arr[j]
    }

    // if counted sum is equal to amount of days, then it's +1 to possible ways
    if (sum === sumOfWeights) {
      return total + 1;
    }

    return answer;
  }, 0)
}

// Left Rotation
function leftRotation(n, d, a) {
  for (let i = 0; i < d; i++) {
      a.push(a.shift());
  }
  return a;
}

// sort ascending object
function compare(a, b){
  if(a.title < b.title) return -1;
  if(a.title > b.title) return 1;
  return 0;
}

function sortLibrary(arr) {
  // var library is defined, use it in your code
  // use console.log(library) to output the sorted library data
  arr.sort(compare);
  console.log(arr);
}


function countStreaks(input:string) {
  const inputArr = input.split(',');
  let highestStreak = 0;
  inputArr.forEach(i => {
    highestStreak = (highestStreak < 0) ? 0 : highestStreak + Number(i);
  })
  return highestStreak;
}

// First Question : Celebrated Earnings
// Another example:
// 1,3,-2,1,2
// This user's highest earnings streak is $5, which started on the 1st day and ended on the 5th day. Even though the user spent $2 on the 3rd day, her subsequent earnings are enough to continue the streak.

// Some requirements and edge cases you should consider:
// 1. If the user did not do anything for the whole month (i.e. 0,0,0,0...) or only bought things without selling anything (i.e. -1,-2,-5,-2...), then your program should output 0.
// 2. Your program should be able to handle a comma-separated string consisting of any number of values, not just 30 for the number of days in a typical month.
// 3. Your program should also be able to handle invalid inputs. If an invalid input is given, your program should output 0. Some examples of invalid input:
// asdf
// ,,2,,3
// ,,,,,
// ,,a,1,3
// Inputs with whitespace padded are okay and should be treated as valid input, e.g. 0,2 , 3,0,1.

function countStreaks(input) {
  const inputArr = input.split(',');
  let highestStreak = 0;
  // loop array, use for because behaviour is more predictable
  for (let i = 0; i< inputArr.length; i++) {
    // if input is empty or invalid, return 0.
    const input = inputArr[i];
	  if (!input) {
      return 0;
    }
    // else chcek
    highestStreak = (highestStreak < 0) ? Number(input) : highestStreak + Number(input);
  }
  return highestStreak < 0 || isNaN(highestStreak) ? 0 : highestStreak;
}



// # Log Analysis
// Example input:
// 1:errA,6:errB,10:errC
// 3:errB,7:errA,9:errA
// 3

// Expected output:
// 7:errA

function findLog(input1, input2, k) {
  let arr = input1.split(',').concat(input2.split(','));
  // sort ascending order
  // To compare numbers instead of strings, the compare function can simply subtract b from a. The following function will sort the array ascending (if it doesn't contain Infinity and NaN):
  arr.sort((a,b) => a.slice(0, a.indexOf(':')) - b.slice(0, b.indexOf(':')));
  return arr[k];
}

// findLog('1:errA,6:errB,10:errC', '3:errB,7:errA,9:errA', 3)
// => 7:errA

// Array methods
function uniqueArr(arr) {
  let result = [];
  arr.forEach(function(item) {
       if(result.indexOf(item) < 0) {
           result.push(item);
       }
  });
  return result;
}

function secondMax(arr) {
  // get the max of the array
    const max = Math.max.apply(null, arr);
    // remove max from the array
    arr.splice(arr.indexOf(max), 1);
    return Math.max.apply(null, arr);
}

function meanderingArr(unsorted) {
  let result = [];
  // remove duplicate
  let unique = [];
  unsorted.forEach(function(item) {
       if(unique.indexOf(item) < 0) {
           unique.push(item);
       }
  });

  while(unique.length > 0 ){
    let max = Math.max.apply(null, unique);
    let min = Math.min.apply(null, unique);
    result.push(max);
    result.push(min);
    unique.splice(unique.indexOf(max), 1);
    unique.splice(unique.indexOf(min), 1);
  }

  return result;
}


function braces(values) {
  let result = [];
  values.forEach(i => {
      result.push(parenthesesAreBalanced(i));
  })

  return result;
}

// {something}
// indexOf is 2
// index/2 === 0, true,
// stack.push(3)
// indexOf is 4
function isBalanced(str) {
  const parentheses = "[]{}()";
  const stack = [];
  let character;

  for (let i = 0; character = str[i]; i++) {
      let bracePosition = parentheses.indexOf(character);

      // if no Brace is found, continue to next character
      if (bracePosition === -1) {
          continue;
      }

      // if left brace is found
      if (bracePosition % 2 === 0) {
          // push next expected brace position
          // push the position of closing/right brace
          stack.push(bracePosition + 1);
      } else {
          // if righdBrace is found
          if (stack.length === 0 || stack.pop() !== bracePosition) {
              return 'NO';
          }
      }
  }

  return stack.length === 0 ? 'YES' : 'NO';
}
// date should be MM/DD/YYYY
function findDay(myDate) {
  // Return day for date myDate(MM/DD/YYYY)
  // Note that myDate contains the date in string format
  var dayArr = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var day = new Date(myDate);
  console.log(dayArr[day.getDay()])
}

function oddNumbers(l, r) {
  let result = [];
  for (let i = l; i <= r; i++) {
      // if odd
      if (i % 2 !== 0) {
          result.push(i);
      }
  }

  return result;

}

function fizzBuzz(n) {
  for (var i=1; i < n; i++){
    let result = ''
    if (i % 3 == 0) {
      result += 'Fizz';
    };
    if (i % 5 == 0) {
      result += 'Buzz';
    }
    console.log(result)
  }
}

// convertToBinary
function convertNumToBinary(num) {
  return (+num).toString(2);
}

// 1st Mar 1984 => 1984-03-01
function convertDate(dateStr) {
  let arr = dateStr.split(' ');
  const day = arr[0];
  const month = arr[1];
  const year = arr[2];
  const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let mm = monthArr.findIndex(i=>i===month) +  1;
  mm = mm < 10 ? String(mm).padStart(2, '0') : String(mm);

  // get number from string
  let dd = day.match(/\d+/)[0];
  dd = dd < 10 ? String(dd).padStart(2, '0') : String(dd);

  return `${year}-${mm}-${dd}`;
}

// permutation
function permutate(inputArr) {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }
 permute(inputArr)
 return result;
}

// staircase
function main() {
  var n = parseInt(readLine());
  for (i = 1; i <= n; i++){
      line = Array(n).fill(' ');
      for (j = 0; j < i; j++){
          line[j] = '#';
      }
      console.log(line.reverse().join(''))
  }
}

//
function checkPalindrom(str) {
  return str == str.split('').reverse().join('');
}

//If I can’t see the benefit of what it would show on a daily basis then I’m not sure it provides any benefit at all except finding developers that enjoy working on these theoretical puzzles. How will they react when they’re working on your BAU / general programming tasks?

// Recursive examples
function power(base, exponent) {
  if (exponent === 0) {
      return 1;
  } else {
      return base * power(base, exponent - 1 );
  }
}

// Factorial in recursive format
function factorial(n) {
  if (n === 1) {
      return 1;
  } else if (n === 0) {
      return 0;
  } else {
      return n * factorial(n - 1);
  }
}

// add multiple times.
function add(x, y) {
  if(y === undefined) {
      return function(y) {
          return x + y;
      }
  } else {
      return x + y;
  }
}

console.log(add(2, 5));
console.log(add(2)(3));

// more generic solution for adding multiple params
let sum = (arr) => arr.reduce((a, b) => a + b);
let addGenerator = (numArgs, prevArgs) => {
return function () {
  let totalArgs = prevArgs.concat(Array.from(arguments));
  if (totalArgs.length === numArgs) {
    return sum(totalArgs);
  }
  return addGenerator(numArgs, totalArgs);
};
};

let addGeneral = addGenerator(2, []);

addGeneral(2, 5); // 7
addGeneral(2)(5); // 7
addGeneral()(2, 5); // 7
addGeneral()(2)(5); // 7
addGeneral()()(2)(5); // 7
console.log(addGeneral()(2)(5));

// isPrime
function isPrime(n) {
  if (n === 1) {
      return true;
  } else if (n === 0) {
      return false;
  }

  for (let i = 2; i < n; i++) {
      if (n % i !== 0) {
          return false;
      }
  }

  return true;
}

// isPrime optimized
const isPrimeOptimized = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false;
  return num !== 1;
}

// generate fibonacci
function fib(n) {
  // modify this starting point to be zero or 1 depending on their requirements
  let arr = [1, 1];
  for (let index = 2; index < n; index++) {
      const element = arr[index - 1],
              nextElement = arr[index  - 2],
              result = element + nextElement;
      arr.push(result);
  }
  return arr;
}

// find fibonacci sequence
function fibNo(n) {
  return (n === 0 ) ? 0 : fib(n)[n-1];
}

console.log(fib(1));
console.log(fibNo(0));

// isSorted
function isSorted(arr) {
  return arr.every(function (x, i) {
      // sorted ascendingly, if want descending, use <=
      return i === 0 || x >= arr[i - 1];
  });
}

console.log(isSorted([]));
console.log(isSorted([-Infinity, -5, 0, 3, 9]));
console.log(isSorted([3, 9, -3, 10]));

// filter
function ownFilter(arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (fn(element)) {
          filteredArr.push(element);
      }
  }
  return filteredArr;
}

console.log(ownFilter([1, 2, 3, 4], n => n < 3) );

// 5 dices, if you got 11111, 600 points, 66666 400 points, etc.etc.
function throwDices(n) {
  let arr = [],
      result = 0;

  // throw dice n time
  for(let i = 0; i < n; i++) {
      let newDiceNumber = Math.floor(Math.random() * 6) + 1;
      arr.push(newDiceNumber);
      if (newDiceNumber === 1) {
          result += 120;
      } else if (newDiceNumber === 2) {
          result += 100;
      } else if (newDiceNumber === 3) {
          result += 80;
      } else if (newDiceNumber === 4) {
          result += 60;
      } else if (newDiceNumber === 5) {
          result += 40;
      } else if (newDiceNumber === 6) {
          result += 20;
      }
  }

  console.log(`Number = ${arr}, Result = ${result} points`);

}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

throwDices(5);

// checks type of Object
function typeOf(obj) {
  return {}.toString
          .call(obj)
          .split(' ')[1]
          .slice(0, -1)
          .toLowerCase();
}

typeOf(); //undefined
typeOf(null); //null
typeOf(NaN); //number
typeOf(5); //number
typeOf({}); //object
typeOf([]); //array
typeOf(''); //string
typeOf(function () {}); //function
typeOf(/a/) //regexp
typeOf(new Date()) //date