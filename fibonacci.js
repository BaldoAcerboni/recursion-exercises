//iteration:
//create array containing first 2 instances of fibonacci seq.(0, 1);
//iterate from 2 to n(not included), calculate and push into arr next number
//in the sequence;
//return final arr up to the index n, which is useful in case [initial]n === 0,
//so that it returns an array containing a single value;
function fibIter(n) {
  const arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr.slice(0, n);
}
const fibArr1 = fibIter(8);
console.log("iteration", fibArr1);

//recursion:
//base case return final array from index 0 up to n(not included);
//otherwise calculate next 2 number in fibonacci sequence, push them into
//the array and call the function again until the length of the array is >= to n
function fibRec(n, arr = [0, 1]) {
  if (n <= arr.length) {
    return arr.slice(0, n);
  } else {
    const a = arr[arr.length - 1] + arr[arr.length - 2];
    const b = arr[arr.length - 1] + a;
    arr.push(a);
    arr.push(b);
    return fibRec(n, arr);
  }
}

const fibArr2 = fibRec(34); //3416454622906707
console.log("recursion", fibArr2); // [0, 1,  1,  2,  3, 5, 8, 13, 21, 34]
