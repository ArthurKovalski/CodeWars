// // For every good kata idea there seem to be quite a few bad ones!
let x = ['bad','bad','good','good','good'];
function well(x){
let a = x.filter((item) => item === 'good').length;
 if(a >= 1 && a <= 2){
     return 'Publish!'
 }else if( a > 2){
     return 'I smell a series'
 }else{
     return 'Fail!'
 }
} 
  well(x);

//   Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//   If the input is an empty array or is null, return an empty array.

let a = [3,4,5,76,87,7,6,-7,-6,-5,-3,-2];

function countPositivesSumNegatives(input) {
 let arrContainer = [0,0];
 if(input === null && input.length === 0){
     return console.log([]);
 }
 for(let i = 0; i < input.length; i++){
     if(input[i] <= 0){
         arrContainer[1] += input[i]
     }else if(input[i] > 0){
         arrContainer[0] += 1
     }
 }
 return console.log(arrContainer);
}
countPositivesSumNegatives(a)