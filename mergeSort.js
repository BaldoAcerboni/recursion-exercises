//given 2 already sorted arrays return their sorted union by removing(shift())
//the lower index 0 value  and push it into a new array, if one of the arrays
//is empty push the remaining values of the other array into the returned one
function merge(arr1, arr2) {
  const merged = [];
  while (arr1.length || arr2.length) {
    if (arr1[0] < arr2[0] || arr2[0] === undefined) {
      merged.push(arr1.shift());
    } else {
      merged.push(arr2.shift());
    }
  }
  return merged;
}

//base case: if the array contains a single element return it;
//otherwise separate the array in two [recursively sorted] halves and return
//their merge by calling the function above
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
}

const a = mergeSort([3, 2, 1, 13, 8, 5, 0, 1]);
console.log(a);
