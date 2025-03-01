//ASSIGNMENT: euler problem 2
//Each new term in the Fibonacci sequence is generated by adding the previous
//two terms. By starting with 1 and 2, the first $10$ terms will be:
//1, 2, 3, 5, 8, 13, 21, 34, 55, 89
//By considering the terms in the Fibonacci sequence whose values do not exceed
//four million, find the sum of the even-valued terms.

//more or less the same process as fibonacci.js.
//2 main differences:
//1)instead of calculating next 2 instances of fibonacci per recursion this does
//  a single one at a time because of the upper value limit of 4 millions(34th
//  fibonacci number);
//2)after the recursion get to the final number calculate the sum of all even
//  numbers with array.reduce()
function evenFibSum(arr = [0, 1]) {
  if (arr[arr.length - 1] >= 4000000) {
    //first element > than 4000000 is 5702887 which would not affect the sum of
    //even numbers but still left it there in case the limit need to be modified
    return arr.slice(0, arr.length - 1).reduce((total, current) => {
      if (current % 2 === 0) {
        return (total += current);
      } else {
        return total;
      }
    });
  } else {
    const number = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(number);
    return evenFibSum(arr);
  }
}

const b = evenFibSum();
console.log(b); //sum: 4613732
