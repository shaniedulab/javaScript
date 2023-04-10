/////////////////////////////////////////////////////////////////////////////////////////
//comment
/******************************************
 * Author:Shani
 * Date created:10 April 2023
 * purpose: learn javascript
 */
//statement and use of semicolon
// console.log("hello world!");
console.log(4*5+2);
/*console.log(6
    *5
    +2);
*/

// -single line comment

/*
multi line comment
this is a comment 1
this is a comment 2
*/

/////////////////////////////////////////////////////////////////////////////////////////
//variables

let firstname; //variable declaration
firstname='John'; //variable initialization
console.log(firstname);

let lastname='Smith';
console.log(lastname);

let age=28,job='teacher',gender='male'; //we can declear variables in this way also

let year1=3; //number
let middle_name='firstname' //underscore(_) can use
let $name="manush" //variable name can start with underscore and dollar sign

//variable name can start with number and special characters
//- ; : "  '  * & Y ^ %

//casesensitive 
let city='mumbai';
let City='delhi'; // both variables are different

//can not use reserved keywords for variable names
// let function

// camel case  should variable name\

// variable of value are not changed in program  should in upper case
let PI=3.14;

/////////////////////////////////////////////////////////////////////////////////////////
//dataType

//string
let str='string'
//number
let a=2.2;
let b=3;
console.log(10/0);//infinite
console.log(-10/0);//-infinite
console.log('nan'/10);//NaN -not a number  if wrong mathomate calculation
//BigInt=ES2020

//boolean -true, false

let isMarried=false;
let isEligible=true;

let isGreater=10>5;
console.log(isGreater);

//Null-null

let age=null
console.log(age);

//undefined -value id not assigned
let city;
console.log(city);

//symbol -

/////////////////////////////////////////////////////////////////////////////////////////

// dynamic typing & Type coercion

//typeof operator  - type of that value
/*
console.log(typeof 'strt');
console.log(typeof 20);
console.log(typeof true);
let city;
console.log(typeof city);
console.log(typeof null);
*/

//Dynamic typing - js is dynamic typed language
/*
let x=100;
x='hellow'

let city;
console.log(typeof city);

city='London';
console.log(typeof city);
*/

//type coercion -operator and function convert one value datatype to another automatically 
  
let x='10';
console.log(typeof x);

let y=2;
console.log(typeof y);

// console.log(typeof x-y);

let age=28;
console.log('I am ' + age+ ' years old');


/////////////////////////////////////////////////////////////////////////////////////////

//variable declaration : let, const and var

//1. a variable declaration using let keyword can be modified
//2. we can create empty variable useing let
let age=21;
console.log(age);
age=29; //variable re-initialization or mutation
console.log(age);

let city;
city='mumvui';

//const keyword declaration;
//1. variable value cannot be changed
//2. we cannot create empty variable useing const keyword
const birthYear=1991;
// birthYear=191;

// const dob;
//let and const was introduced in es6

var fname;

lname='sminth'
// console.log(lname); //not recomended


/////////////////////////////////////////////////////////////////////////////////////////

//javascript arithmetic operators
//every operators in js return a value
//unery operators
//binary operators
let x=100;
let y=10;

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

console.log(x%y);//reminder
console.log(23%3);//reminder

console.log(2**3); // 2*2*2 =2 power of 3

//number converted to string
//+ 
//NaN

//boolean and numeric
//true====>1
//false====>0
console.log(10-true);
console.log(10/false);

//undefined -NaN

console.log(10-undefined);

//null--->0
console.log(10-null);
console.log(10/null);


/////////////////////////////////////////////////////////////////////////////////////////

//javascript basic operators

//Assignment operator - =
//shorthand assignment operator
/*
    +=
    -=
    *=
    /=
*/
let x=10;
console.log(y=100);

//increment and decrement operators
// ++ and --
let b=10
console.log(b++);
console.log(b--);

//prefix notation ++x , --x
//postfix notation x++ , x--

//diffrent between prefix and postfix notation
//prefix - valuem is incremented/decremented & new return 
//postfix -original valuem is return then incremented/decremented 

//Comma operator - evaluates several expressions and return the result of last exprassion
let result = (3+2,5-4,5*2)
console.log(result);


/////////////////////////////////////////////////////////////////////////////////////////

/****************************************************************
 * operator precedence and associativity
 */


let exp1=20+10+3
console.log(exp1);

let exp2=20+10-10
console.log(exp2);

//higher precedence operator  execution first and second precedence execute and precedence is same execute as per associativity


/////////////////////////////////////////////////////////////////////////////////////////
