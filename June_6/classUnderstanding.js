/* 
    function Person(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

const shivang = new Person("Shivang","Suchak");

*/

// ES2015 introduced the keyword class that completely abstracts the constructor function and objects.


class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

var shivang = new Person("Shivang","Suchak");

console.log(shivang, typeof shivang);

console.log(shivang.fullName());

// we do not see prototype anywhere but any instance created from the class will have __proto__ pointing to prototype property

console.log(shivang.__proto__ === Person.prototype); // should return true;


// Inheritance

class Student extends Person{

}


console.log("Should point to Person",Student.prototype);

console.log("Should point to Student",Student.prototype.constructor);

var s = new Student("Sam","Panda");
console.log(s.fullName());
