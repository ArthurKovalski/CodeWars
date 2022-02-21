// // For every good kata idea there seem to be quite a few bad ones!
let x = ['bad','bad','good','good','good'];
function well(x){
let a = x.filter((item) => item === 'good').length;
 if(a >= 1 && a <= 2){
     console.log( 'Publish!')
 }else if( a > 2){
     console.log( 'I smell a series')
 }else{
     console.log( 'Fail!')
 }
} 
  well(x);


