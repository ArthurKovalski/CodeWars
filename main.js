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
 if(input === null && input.length < 1){
     return console.log([]);
 }
 for(let i = 0; i < input.length; i++){
     if(input[i] <= 0){
         arrContainer[1] += input[i]
     }else {
         arrContainer[0] += 1
     }
 }
 return console.log(arrContainer);
}
countPositivesSumNegatives(a);


// To find a needle in junk 

const a1 = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];

function findNeedle(haystack) {
    // let needleIn = haystack.filter((item,index) => item === 'needle');
    // return console.log(needleIn[])
    console.log(`${"found the needle at position"} ${haystack.indexOf('needle')}`)
  }

  findNeedle(a1);


//   Convert number to reversed array of digits

let number = 43323552;

function digitize(n) {
    let b = []
n = n.toString().split('').reverse();
for(let i = 0; i < n.length; i++){
b.push(Number(n[i]))
}
console.log(b);
  }

  digitize(number);

//   Fake Binary

let digitStr = '43216832077'
function fakeBin(x){
    let bs = [];
   x = x.split('') 
    let arrToNumber = x.map(item => Number(item));
    for(let i = 0; i < arrToNumber.length; i++){
        if(arrToNumber[i] < 5){
            bs.push(0)
        }else if(arrToNumber[i] >= 5){
            bs.push(1)
        }
    }
    
    console.log(bs.join(''))
  }

  fakeBin(digitStr)