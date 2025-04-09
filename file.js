//for(var i =0;i<document.querySelectorAll(".drum").length;i++){
//document.querySelectorAll(".drum")[i].addEventListener("click",function() {
//    alert("I got clicked");
//});
// //}
// function sayHello(){
//     let you = prompt("What is your name?");
//     console.log("Hello",+you + "!");
// }
// // sayHello();
// let varContainingFunction = function(){
//    let varInFunction="I'm in a function";
//    console.log("hi there!",varInFunction);
//  };
//  varContainingFunction();
  //function addNumbers(){
    //var a=prompt("enter the 1st no");
    //var b=prompt("Enter the 2nd no");
    //var c= a+b;
    //console.log(c);  
  // //};
  // function tester(para1,para2){
  //   return para1+" "+para2;
  // }
  // const arg1="argument 1";
  // const arg2="argument 2";
  // // console.log(tester(arg1,arg2));
  // function addTwoNumber(x,y){
  //   console.log(x+y);
  // }
  // addTwoNumber(5,90);
  // function addTwoNumber(x,y){
  //   let st=parseInt(prompt("Enter the 1st no:"));
  //   let st1=parseInt(prompt("Enter the 2nd no:"));
  //   addTwoNumber(st,st1)
  //   }
  // function addTwoNumber(x,y=3){
  //   console.log(x+y);
  // }
  // // addTwoNumber(2,8);
  // function addTwoNumber(x,y=3){
  //   console.log(x+y);
  // }
  // addTwoNumber(0,5,2,7);
// //Arrow Functions are great for sending function arrow as parameters and using shorter notation
// function doingStuff(x){
//   console.log(x);
// // }
// let doingArrowStuff=x=>console.log(x);
// // doingArrowStuff("Great!");
// let addTwoNumber=(x,y)=>console.log(x+y);
// // addTwoNumber(5,3);
// const arr =["squirrel","alpaca","buddy"];
//  arr.forEach(e => console.log(e));
// let spread =["so","much","fun"];
// let message=["javaScript","is",...spread,"and","very","powerful"];
// message.forEach(e=>console.log(e));
// function addTwoNumber(x,y){
//     console.log(x+y);
//   }
//   let arr=[5,9];
//    addTwoNumber(...arr);
// function addFourNumber(x,y,z,a){
//   console.log(x+y+z+a);
// }
// let arr=[5,9];
// let arr1=[6,7]
// addFourNumber(...arr,...arr1);
// function someFunction(para1,...para2){
//   console.log(para1,para2);
// }
//Rest parameter

// function someFunction(para1,...para2){
//   console.log(para1,para2);
// }
// someFunction("hi","there!","How are you?")

//let resultArr=[];
//for(let i=0;i<10;i++){
  //let result= addTwoNumber(i,2*i);
  //resultArr.push(result);

//console.log(resultArr);
//VARIABLE SCOPE IN FUNCTION
//function testAvailabilty(x) {
  //console.log("Available here:",x);

//testAvailabilty("hi!");
//console.log("not available here:",y);
//LET VERSUS VAR 
//Global variables
//let globalvar = "Accessible everywhere!";
//console.log("outside function:", globalvar);
//function creatingNewScope(x) {
  //console.log("Access to global vars inside ")
//}
// let x = "global";
// function doingStuff() {
//   let x = "local";
//   console.log(x); 

// doingStuff();
// console.log(x);}
//immediately invoked function expression
// Recursive functions
// 
function logRecursive(nr) {
  console.log("Started function:", nr);
  if (nr> 0) {
    longlogRecursive(nr - 1);

  }
  console,log("ended function:",nr);

  
}
logRecursive(3);


