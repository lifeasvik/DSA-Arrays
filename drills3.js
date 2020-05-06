// 5. URLify a string
// A common mistake users make when they type in an URL is to put spaces between words or letters. A solution that developers can use to solve this problem is to replace any spaces with a %20. Write a method that takes in a string and replaces all its empty spaces with a %20. Your algorithm can only make 1 pass through the string. Examples of input and output for this problem can be

// Input: tauhida parveen

// Output: tauhida%20parveen

// Input: www.thinkful.com /tauh ida parv een

// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

function URLify(str) {
  // trim spaces at begining and end , replace spaces inside of string 
  return str.trim().replace(/\s/g, '%20');
}

// console.log(URLify("tauhida parveen"));
// console.log(URLify("www.thinkful.com /tauh ida parv een"));

// 6. Filtering an array
// Imagine you have an array of numbers. Write an algorithm to remove all numbers less than 5 from the array. DO NOT use Array's built-in .filter() method here; write the algorithm from scratch.

function filtering(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      arr.splice(i, 1);
      // need this to remove more than 1 index
      i--;
    }
  }
  return arr
}

// console.log(filtering([1, 2, 3, 3, 5, 6, 8, 4, 9, 1]));

// 7. Max sum in the array
// You are given an array containing positive and negative integers. Write an algorithm which will find the largest sum in a continuous sequence.

// Input: [4, 6, -3, 5, -2, 1]
// Output: 12

function largestSum(arr) {
  let currentSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i]

    currentSum = Math.max((currentSum + currentNum), 0)
    maxSum = Math.max(currentSum, maxSum)
  }
  return maxSum
}

// console.log(largestSum([4, 6, -3, 5, -2, 1]));

// 8. Merge arrays
// Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted.

// Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
// Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]

function mergeArray(arr1, arr2) {
  let result = [...arr1, ...arr2];
  return result.sort((a, b) => a - b);

}
// console.log(mergeArray([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]))

// 9. Remove characters
// Write an algorithm that deletes given characters from a string. For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the characters to be removed are "aeiou", the algorithm should transform the original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's filter, split, or join methods.

// Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
// Output: 'Bttl f th Vwls: Hw vs. Grzny'

function removeChar(str) {
  let newStr = str.replace(/[aeiou]/gi, '');
  return newStr;
}
let originalStr = 'Battle of the Vowels: Hawaii vs. Grozny';
removeChar(originalStr);

// console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));

// 10. Products
// Given an array of numbers, write an algorithm to find out the products of every other number except the number at each index.

// Input:[1, 3, 9, 4]
// Output:[108, 36, 12, 27]

function products(int) {
  let total = 1
  for (let i = 0; i < int.length; i++) {
    total = total * int[i]
  }
  const result = []
  for (let j = 0; j < int.length; j++) {
    result.push(total / int[j])
  }
  return result
}

// console.log(products([1, 3, 9, 4]));

// 11. 2D array
// Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.

function array2d(arr) {
  let row = [1, 1, 1, 1, 1]
  let column = [1, 1, 1, 1, 1]
  for (let r = 0; r < row.length; r++) {
    for (let c = 0; c < column.length; c++) {
      if (arr[r][c] === 0) {
        row[r] = 0
        column[c] = 0
      }
    }
  }
  for (let r = 0; r < row.length; r++) {
    for (let c = 0; c < column.length; c++) {
      if (row[r] === 0 || column[c] === 0) {
        arr[r][c] = 0
      }
    }
  }
  return arr
}

console.log(array2d([[1, 0, 1, 1, 0],
[0, 1, 1, 1, 0],
[1, 1, 1, 1, 1],
[1, 0, 1, 1, 1],
[1, 1, 1, 1, 1]]));

// 12. String rotation
// Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.

// Input: amazon, azonma

// Output: False

// Input: amazon, azonam

// Output: true

function strRot(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    str2 = str2.slice(1) + str2[0];
    // does string match any part of a rotation 
    if (str1 === str2) {
      return true;
    }
  }
  return false;
}

// console.log(strRot('amazon', 'azonam'));
// one rotation 
// amazon 
// mazona
// azonam
// zonama
// onamaz
// namazo
// amazon