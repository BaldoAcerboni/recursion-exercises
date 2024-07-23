//ASSIGNMENT: euler problem 4
//A palindromic number reads the same both ways.
//The largest palindrome made from the product of two 2-digit numbers is:
//9009 = 91 * 99
//Find the largest palindrome made from the product of two 3-digit numbers.

//check if a number is a palindrome
function isPalindrome(n) {
  return n === Number(n.toString().split("").reverse().join(""));
}

//below function does what i want it to do, but always ends up throwing a
//Range Error so we use math to limit the recursive calls
//
// function largestPalindrome(a = 99, b = 99, pArr = []) {
//   console.log(pArr);
//   if (a <= 10 && b <= 10) {
//     return pArr.sort((x, y) => {
//       return x - y;
//     });
//   }
//   if (isPalindrome(a * b)) {
//     pArr.push(a * b);
//   }
//   if (b >= 10) {
//     return largestPalindrome(a, b - 1, pArr);
//   } else {
//     // a = b + 99;
//     // b = a;
//     return largestPalindrome(a - 1, 99, pArr);
//   }
// }

//given that a product of 2 3-digits numbers is always either a 5/6-digits number;
//100*100 == 10000; 999*999 == 998001;
//since we need the largest we take the 6-digits example:
//abccba(each letter represent a digit) could be also written as
//a*100000 + b*10000 + c*1000 + c*100 + b*10 + a which is equal to
//a*100001 + b*10010 + c*1100 === 11*(9091a+910b+100c)
//hence we can say that any palindrome p = 11*(x * y) = x *  11y.
//which means we can decrement y in steps of 11 instead of one,
//so range error should not be a problem any more

//although with this method the range error is more forgiving I still need to
//limit the checks to numbers between 900 and 999 for a and between 990 and 500 for b.
//so the solution is not optimal even though the result given is aligned with what
//google says.
//b start at 990 because it is the max number < 1000 && 990 % 11 === 0
//base case (when first arg is < 900) return sorted array;
//otherwise if a * b is palindrome add it to the array containing all palindrome
//products;
//then there are to possible recursion path depending on the values of b
function largestPalindrome(a = 999, b = 990, pArr = []) {
  if (a <= 900) {
    return pArr.sort((x, y) => y - x);
  }
  if (isPalindrome(a * b)) {
    // console.log(a * b, a, b);
    pArr.push(a * b);
  }
  if (b >= 500) {
    return largestPalindrome(a, b - 11, pArr);
  } else {
    return largestPalindrome(a - 1, 990, pArr);
  }
}

// const a = largestPalindrome();
// console.log(a);
//[
//   906609, 888888, 886688, 861168,
//   853358, 828828, 824428, 819918,
//   809908, 793397, 780087, 770077,
//   729927, 723327, 693396, 672276,
//   666666, 657756, 653356, 649946,
//   639936, 623326, 592295, 580085,
//   579975, 577775, 564465, 551155,
//   549945, 525525, 514415, 513315,
//   507705, 489984, 487784, 476674,
//   470074, 459954
// ]

//906609 === 993 * 913

//
//iteration:
function largePalindrome() {
  const palArr = [];
  for (let i = 100; i < 1000; i++) {
    for (let j = 110; j <= 990; j += 11) {
      if (isPalindrome(i * j)) {
        let p = i * j;
        palArr.push({ i, j, p });
      }
    }
  }
  return palArr.sort((a, b) => b.p - a.p)[0];
}

const test = largePalindrome();
console.log(test); //{ i: 993, j: 913, p: 906609 }
//this works no problem.
//So i either messed up something with recursion, or iteration is preferable
//in this specific case
