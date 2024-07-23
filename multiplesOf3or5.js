//ASSIGNMENT:euler problem 1
//If we list all the natural numbers below 10 that are multiples of 3 or 5,
//we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.

//base case return the sum of all arr elements;
//check if (n - 1) is divisible by 3 or 5, if it is add to the array,
//then recursively call the function with arguments n - 1 and updated array;
function sumOfMult(n, arr = []) {
  if (n === 0) {
    return arr.reduce((total, current) => {
      return (total += current);
    });
  } else {
    if ((n - 1) % 3 === 0 || (n - 1) % 5 === 0) {
      arr.push(n - 1);
    }
    return sumOfMult(n - 1, arr);
  }
}

const a = sumOfMult(10);
console.log(a); //23

const b = sumOfMult(1000);
console.log(b); // 233168
