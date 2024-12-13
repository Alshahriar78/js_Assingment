//1
function calculateDifferance(num1,num2){
    return Math.abs(num1 - num2);
 }

 console.log(calculateDifferance(4,8)); 


 //2
function isOdd(num){
    return num % 2!== 0;
 
}

console.log(isOdd(6));

//3
function findMin(num){
  let min = num[0];

  for(let i = 0; i < num.length; i++){
    if(num[i] < min){
      min = num[i];
    }
  }

  return min;
}

console.log(findMin([4,8,1,2,5]));



//4
function filterEvenNumber(num){
   let evenArray = [];
   for (let i = 0; i < num.length; i++) {
       if(num[i] % 2 === 0){
        evenArray.push(num[i]);
       }
       
    }
   return evenArray
}

console.log(filterEvenNumber([1,2,3,4,5,6,7,8,9,10,11,12,13,14]));


//5
function sortArrayDescending(array){
  
    return array.sort((a, b) => b - a);
  
}

console.log(sortArrayDescending([1,2,3,4,5,6,7,8,4,9,10,11,12,13,14]));


//6
function lowercaseFirstLetter(str){
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter('Hello'));
// 7
function findAverage(array){
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
}
console.log(findAverage([1,2,3,4,5]));

// 8
function isLeapYear(year){
    if((year % 4 === 0 && year % 100!== 0) || year % 400 === 0){
        return true;
    }
    return false;
}
console.log(isLeapYear(2024));







// function reverseString(str){
//     let reversed = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         reversed += str[i];
//     }
//     return reversed;
// }

// console.log(reverseString('Hello'));


// function removeDuplicates(arr){
//     let uniqueArray = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!uniqueArray.includes(arr[i])){
//             uniqueArray.push(arr[i]);
//         }
//     }
//     return uniqueArray;
// }

// console.log(removeDuplicates([1,2,2,3,4,4,5]));

// function countVowels(str){
//     let vowels = ['a', 'e', 'i', 'o', 'u'];
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i].toLowerCase())){
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countVowels('Hello World'));