//alert('hello world!');
var car = "Ford";

/*
    -- this inside multi line comments -- 
    var is a keyword, reserved word which has a predefined meaning in any language
    you can not use reserved words as variable/identifier names
    var is used to declare a variable
*/

// -- this is a single line comment --
// car is a variable name
// = is called as assignment operator
// Jaguar is the string value we are assigning to the variable car
// "" - doble quotes are used to define string values
// '' - can also be used to define string values

if (car == 'Jaguar'){
    console.log('car is a jaguar');
}else{
    console.log('some other car');
}

// == equality/comparison operator
var i = "10";
console.log('i = "10"; typeof i = ' + typeof(i));

if(i == 10){
    console.log('i == 10 : true');
}else{
    console.log('i == 10 : false');
}

// === strict equality
// checks the value with its data type
if(i === 10){
    console.log('i === 10 : true');
}else{
    console.log('i === 10 : false');
}


// JS Literal expression
var pi = 3.14;
// 3.14 = 