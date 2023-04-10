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




/////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////////////
