//ASSIGNMENT: euler problem 3
//The prime factors of 13195 are 5, 7, 13 and 29.
//What is the largest prime factor of the number 600851475143?

//function that defines if a number is prime or not,
//this will be used to filter the factors
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

//base case (n is a prime number), push it to the list and return the number;
//otherwise there are 2 possible options:
//1) the factor [f] is a prime number and it actually is a factor of given
//  number [n], in which case push f into the factors list and recursively call
//  the function with args: n = n / f, f[unchanged] and updated array;
//2)in case at least one of the 2 conditions stated above are false,
//  recursively call the function with args: n[unchanged], f = f + 1, and arr[unchanged]
function largestPrime(n, f = 2, arr = []) {
  if (isPrime(n)) {
    arr.push(n); //in case i need the list of all factors
    return n;
  } else {
    if (isPrime(f) && n % f === 0) {
      arr.push(f); //in case i need the list of all factors
      return largestPrime(n / f, f, arr);
    } else {
      return largestPrime(n, f + 1, arr);
    }
  }
}
// const a = largestPrime(13195);
// console.log(a); //29 or arr[ 5, 7, 13, 29 ] depending of preferred output

const b = largestPrime(600851475143);
console.log(b); //6857 or arr [ 71, 839, 1471, 6857 ] depending of preferred output

//the arr inside of the function was useful when checking if the thing was
//working properly, so i left it there
