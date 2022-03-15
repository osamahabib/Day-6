// Fix the code to get the largest of three.
aa = (f,s,t) => {
    //let f,s,t; redeclaration removed
    console.log(f,s,t);
    if(f>s &&f>t){
    console.log(f)}
    else if(s>f && s>t){
    console.log(s)}
    else{
    console.log(t)}
   }
   aa(1,2,3);
//Output:
// 1 2 3
// 3



// Fix the code to Sum of the digits present in the number
let n = 123;
console.log(add(n));
function add(n)
{
let sum = '';
for(var i=0;i<n.length;i++){
 sum+=n[i];
 }
 return sum;
}



// Fix the code to Sum of all numbers using IIFE function
const arr = [9,8,5,6,4,3,2,1];
(function() {
 let sum = 0;
 for (var i = 0; i < arr.length; i++){
 sum += arr[i];
 }
 console.log(sum);
})
();
//Output: 10


// Fix the code to gen Title caps.
var array = ['guvi','geek', 'zen', 'fullstack'];
var ano = function(arro) {
 for (var i = 0; i < arro.length; i++) {
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1)); //fixed [0][i] to [i][0]
 }
}
ano(array);
// Output:
// Guvi
// Geek
// Zen
// Fullstack



//Fix the code to return the Prime numbers
const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<newArray.length;i++){//iterating upto array length - fixed
 if(num%i===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);



//Fix the code to sum the number in that array
const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum = (a, b) =>
 a + b
const total = num.reduce(sum)//renamed variable to total from sum to avoud redeclare error
console.log(total);
// Output:
// 550



//Fix the code to rotate an array by k times and return rotated array using IIFE function
var array = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
var k = 3;
k = array.length % k;
(function() {
 
 out = array.slice(k + 1, array.length);
 var count = out.length;
 for (var i = 0; i < k + 1; i++) {
 out[count] = array[i];
 count += 1;
 }
 console.log(out)})(); 
//Output:
// [
//     6,  8,  6, 1, 9,
//    10, 12, 13, 1, 2,
//     3
//  ]



//print all odd numbers in an array using IIFE function
var array = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 !== 0) {//fixed logic for odd number
 console.log(arr[i]);
 }}
})();
//Output:
// 9
// 5
// 3
// 1


 
//Fix the code to reverse.
(function(str){
    str = str.split('').reverse().join('');//replace str1 with str
    console.log(str); 
   })('abcd');
//Output:
//dcba



//Fix the code to remove duplicates.
var res = function(arr){
    var newArr = []; //array declaration should be outside the for loop
    for(var i=0; i < arr.length; i++){
    if(arr.indexOf(arr[i]) === i) {
    newArr.push(arr[i]);
    } 
    }
    console.log(newArr)
   }
   res(['guvi','geek','guvi','duplicate','geeK'])
//Output:
//[ 'guvi', 'geek', 'duplicate', 'geeK' ]



// Fix the code to give the below output:
//Sum of odd numbers in an array
var as=[12,34,5,6,2,56,6,2,1];
// var a=0;
var s=as.reduce(function(a,c){
 if(a%2!=0)
 {
 return a+c;
 }
 return a;});
console.log(s);



// Fix the code to give the below output:
//Swap the odd and even digits
aa = data=>{
    var a=data;
    var l='';
   for(i=0;i<a.length-1;i++){
    var s=a[i+1]
    var b=a[i]
    l+=s
    l+=b
    i=i+1
   }
   if((a.length%2)!=0){
    l+=a[a.length-1]
   }
   console.log(l);
   }
   aa('1234');
//Output:
//2143