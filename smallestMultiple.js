//2520 is the smallest number that can be divided by each of the numbers from 1
// to 10 without any remainder.
//What is the smallest positive number that is evenly divisible with no
//remainder by all of the numbers from 1 to 20?

//the most obvious way to solve the problem is to check all numbers >= than
//the largest number, in steps as large as the largest number of the group, until
//we find one that gives 0 remainder when divided by all elements of array

//I also assume the array is already ordered in an increasing manner,
//because I am lazy.
// function LCM(arr, step = arr[arr.length - 1], val = step) {
//   for (let i = 0; i < arr.length; i++) {
//     if (val % arr[i]) {
//       val += step;
//       return LCM(arr, step, val);
//     } else if (i === arr.length - 1 && !(val % arr[i])) {
//       return val;
//     }
//   }
// }

// const arrTo10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const test1 = LCM(arrTo10);
// console.log(test1); //2520 which is correct
// const arrTo20 = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// const test2 = LCM(arrTo20);
// console.log(test2);//Range Error

//MATH SOLUTION
//a very easy way to find Least Common Multiple of 2 numbers is the "greedy
//union" of their prime factors(i.e. 4=2*2, 6=2*3 => 12=2*2*3; or in case of 2
//prime numbers: 2, 5 => 10=2*5) so I could generate arrays containing all the
//prime number factors which would output the correct result
//(i.e. [2,3,4,5] = [[2], [3], [2, 2], 5] => 60 = 2*2*3*5)

//my solution needs 4 functions each with their own duty.

//find out if a number is prime
//Ctrl+c, Ctrl+v once >> learning common js modules
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//decompose a number which may or may not be a prime number to its prime factors
//returning an array containing all of them.
//base case: the number[n] is prime => push it into the array and return the array.
//if n / f equals an integer
//  push f into the array and recursively call the function with n = n/f, f[unchanged]
//  and the updated array
//if n/f does not equal an integer
//  recursively call the function with n[unchanged], f=f+1, and arr[unchanged]
function findPrimeFactors(n, f = 2, arr = []) {
  if (isPrime(n)) {
    arr.push(n);
    return arr;
  } else if (n % f === 0) {
    arr.push(f);
    return findPrimeFactors(n / f, f, arr);
  } else {
    return findPrimeFactors(n, f + 1, arr);
  }
}

//input an object containing a bunch of number as keys and their prime factors as
//values, build an array containing the max amount of all the prime factors of
//each one (i.e. obj={"4": [2,2], "6": [2,3]} => [2,2,3]) and return the product
//of all of the array values(i.e. [2,2,3] => 12)
//iteration came easier and I've spent enough time on this already,
//so no recursion for this one
function primeFactorsUnion(obj) {
  let arr = [];
  for (const num in obj) {
    const l = obj[num].length;
    for (let i = 0; i < l; i++) {
      if (
        arr.indexOf(obj[num][i]) === -1 ||
        arr.lastIndexOf(obj[num][i]) - arr.indexOf(obj[num][i]) <
          obj[num].lastIndexOf(obj[num][i]) - obj[num].indexOf(obj[num][i])
      ) {
        arr.push(obj[num][i]);
      }
      arr.sort((a, b) => a - b);
    }
  }
  return arr.reduce((total, current) => (total *= current));
}

//main function that takes an array of numbers and returns the LCM
//base case: arr is empty => return the result of primeFactorsUnion(f),
//  f being an object containing all prime factors for each number in the original array
//remove first element of arr and assign it to v
//if v !== 1 add it f with all its prime factors
//if v === 1 foggedaboudit
//recursively call LCM with updated arr and f as arguments and keep going till
//  base case becomes true.
function LCM(arr, f = {}) {
  if (arr.length === 0) {
    // console.log(f);
    return primeFactorsUnion(f);
  }
  const v = arr.shift();
  if (v !== 1) {
    f[v] = findPrimeFactors(v);
  }
  return LCM(arr, f);
}
// const arrTo10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const test1 = LCM(arrTo10);
// console.log(test1); //2520 which is correct
const arrTo20 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const test2 = LCM(arrTo20);
console.log(test2); //  232792560 which is correct, yay
//solution found online 232792560
