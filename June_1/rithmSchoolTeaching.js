// We will talk about Object oriented programming but in a language that has no built in support of oop.

//In a traditional object oriented programming, we define everything as a starting point of class which is a blueprint, make copies out of it. that is instansiating.

// For example in Python or ruby:

/* class Person{
    def __init__
} */

// We didn't have any such concept, The programmers who came to JavaScript wanted the same behavior as other Object Oriented Programming.

// JavaScript is just function and objects. Programmers tried to use the power of function, objects, and a special keyword "this" and "new"


// Using that, we can make the behavior of the class as in imitate that but all the other features like polymorphism, abstraction etc is to be faked.

// every time a function runs in javascript, there are two special keywords that are given to that function. : 1) this, 2) arguments.

// function first(){
//     console.log(arguments);
// }

// console.log(arguments);
// Strict mode => restricting writing global variable via the function..

// For example: if you write the function in the following way: It is nothing but making a global variable.

function first(){
    this.name = "Shivang";
    this.job = "Software Engineer!";
}

// Here, you are not returning anything and the value of this here is a global object because there is no apply, call,bind as well as no object and no new keyword usage.

first();
console.log(name); // this returns Shivang

// "use strict"

/* 
    function first(){
        return this;
    }

first();
the above call returns undefined;

So, when you are in strict mode, instead of global object value of this(provided the value of keyword this is not manipulated by call, apply, bind, or new), it gives undefined.
*/

/* 
    Another example
    "use strict";
    function first(){
        this.isHilarious = true;
    }

    first();
    // Will throw a TypeError because the value of this is undefined(because of strict mode ) and setting a property on undefined would throw a type error.
*/

/* var obj = {
    firstName: "Shivang",
    whoami : this
} */

// obj.whomai would return the global object because the value of this is implicit or refer to an object only when a function is called.

var obj = {
    firstName: "Shivang",
    whomai : function(){
        return this;
    }
}

console.log(obj.whomai() === obj);


var obj_two = {
    firstName: "Shiv",
    moreInfo: {
        homeState: "NJ",
        displayInfo: function(){
            return this.firstName + " is from " + this.homeState;
        }
    }
}

console.log(obj_two.moreInfo.displayInfo());
// It returns undefined is from NJ


// Note: Here, you are not in control of the value of this as it is implicit(the value of this refers to the closest parent object)


// Three ways to explicity set the value of keyword this: 1) call, 2) apply, 3) bind.

// The above methods works only on function though

var instructor = {
    firstName: "Elie",
    sayHi: function(){
        return "Hello " + this.firstName;
    }
}

// The value of this can only be determined at the function call.

var instructor2 = {
    firstName : "Matt",
    sayHi: function(){
        return "Hello " + this.firstName;
    }
}

// We are duplicating both the keys in both the variables here.
//

var instructor3 = {
    firstName: "Yagnik",
    
}

// shifting the value of keyword this from instructor object to instructor3 object.


function understandCall(){
    return "Hello " + this.firstName;
}

let ellie = understandCall.call(instructor);
console.log(ellie);

let yagnik = understandCall.call(instructor3);
console.log(yagnik);

// 

function doMath(a,b,c){
    return `${this.firstName} adds ${a+b+c}`
}


// in order to determine the value of keyword this, we need to use the concept of call method here.

// console.log(doMath.call(instructor3));

// We need to pass in the parameters of the function as well, this can be passed as the parameters after the first parameter in the call method

console.log(doMath.call(instructor3,2,3,4));

// call and apply immediately invokes the function.

// bind returns a new function.

// Common use case of Call is to convert array like objects to Array so that all the methods on the Array prototype can be used BUT the method of converting via call is replaced in ES6 with Array.from(simple syntax).

// Array like objects would be arguments.
// const converted = [].slice.call(arguments);
// console.log(converted);


// Apply is almost identical to call but it takes AT-MOST two parameters. The first parameters would remain the same as call, i.e whatever you want the value of keyword "this" to be and second would be the array containing the values of parameters to the function on which apply is applied.

const useApply = doMath.apply(instructor3, [1,2,4]);
console.log(useApply);
// Use case: Functions that accept comma-separated values. Spread operator is doing the same.
const arr = [1,2,3,4,5];
console.log(Math.max.apply(this, arr));

// Similarity between call and apply methods:

/* 
    1) It is applied on function
    
    2) The first parameter is always something that you want the value of keyword this to be.

    3) Immediately invokes the function on which they are applied. 
*/

// Difference: The second parameter.(can be more than two for call)

/////////////////// Bind////

// It is great when you don't know what all the arguments are going to be to the function but you still want the value of keyword this to be. You will always get back function on bind.

function doBindApplication(a,b,c){
    return `${this.firstName} adds ${a+b+c}`;
}

const understandBind = doBindApplication.bind(instructor,10);

console.log(understandBind(4,5,6));

// Here, the value 6 in the function call is ignored because the first parameter was already called inside the bind call. Even after the function has returned it's value, the bind remembers it because bind is built on the concept of closure.

// closure = variable defined in the outer function that can be used in inner function even if those outer function is long returned.


function outer(){
    var name = "Shivang";
    return function inner(){
        return "Hello " + name;
    }
}

console.log(outer()());


// Own bind method

function bind(fn, thisArg, ...outerArgs){
    return function inner(...innerArgs){
        return fn.apply(thisArg, [...outerArgs, ...innerArgs])
    };
}

console.log(doMath.bind(instructor)(2,3,4));

// bind runs on partial implementation. The arguments already passed will remain on stack even after it's value is long returned.


var obj = {
    firstName: "Shivang",
    lastName: "Suchak",
    sayHi: function(){
        setTimeout(function(){
            console.log(`Hi ${this.firstName} ${this.lastName}`);
        }.bind(this),1000);
    }
}

console.log(obj.sayHi());

// Arrow functions can be replaced with arrow function to get rid of bind that we have applied in the above function.
// Arrow function doesn't get back this keyword and arguments

// Works on lexical binding, it works way up to define value of keyword this.

// Do not use arrow function when you write methods on objects because it scews up the "this" keyword assignment or determining

// arrow function do not give back arguments keyword but if you want to access the similar feature, use rest operator in the function definition.

// Till now we have determined three methods to know the value of keyword this.

// 1) Global rule, 2) Implicit rule, 3) Explicit rule(using call, apply, and bind.)

// Consider a factory function, which returns an object.


function createPerson(){
    return {
        firstName: firstName
    }
}

function Person(firstName){
    this.firstName = firstName;
}

var shivang = Person("Shivang");
console.log(firstName); // you are creating a global object by not returning anything from the function.    

// using var shivang = new Person("Shivang") will fix above problem.

// new keyword does 4 things.

// 1) Creates object at thin air
// 2) sets the value of keyword this to the object that it created.

//3) An implicit return this has been added and that is the reason it doesn't give undefined upon calling even though we have not returned anything explicitly. In case you written anything, you can override given it is non-primitive

/* 
    For example:

    function Person(firstName){ 
        this.firstName = firstName;
        return "awesome"// in this case, new keyword wins and return this.

        return [1,2,3];
    }
    You should never write code like this because the whole purpose of new keyword is to get that object out of the function.

    */


// 4) when the new keyword is used: A link is created between object created in step 1 and prototype property on the function.

// EVERY SINGLE FUNCTION IN JAVASCRIPT HAS A PROPERTY ON IT CALLED PROTOTYPE and it has a property called constructor which points back to the function itself.


function unqiue(){

}

unqiue.prototype.constructor === unqiue;
// you will not change the link(__proto__) directly.

// Accessible but meant to be private

// AGAIN:

/* 
    4 things that new keyword does:

    1) Creates an empty object in thin air
    2) sets the value of keyword this to the object that is created by the constructor function

    3) An implicit return this to the constructor function.

    4) A link between object and prototype property of the function. The link is referred to as __proto

*/


var newPerson = new Person("Yagnik");

console.log("Proof of dundun proto(:P):",newPerson.__proto__ === Person.prototype);

// link enables to find methods and properties on that object.

// For example.:
var arr1 = [];

arr1.push(1);
// The property push came from Array prototype
// also the statement arr1 = [] means var arr1 = new Array; so the .prototype has link to arr1 via __proto__.
console.log("Prototype is amazing: ", arr1.__proto__ === Array.prototype);


/* 
    [].hasOwnProperty('length') gives true. Let's understand why.

    Here, it checks if Array.prototype has the property asked, it doesn't. So, it checks for __proto__ of Array.prototype.. So, it would be [].__proto__.__proto__; And the proto of Array.prototype is nothing but Object.prototype
*/

function UnderstandProto(firstName, lastName){
    return function (){
    this.firstName = firstName;
    this.lastName = lastName;
    }
}

UnderstandProto.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}

// Advantage of writing the function on the prototype rather than defining it inside the constructor function is: For every created object, the function created. In this case, it just returns the two properties already in the consturctor function.

// If you know that all objects will have same functionality for a particular property, define it on the constructor prototype.


// var elie = new UnderstandProto("Elie","Dk");
// console.log(elie);

