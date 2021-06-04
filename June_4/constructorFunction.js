function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

/* function Student(firstName,lastName){
    this.firstName = firstName;
    this.lastName = lastName;
} */
function Student(firstName, lastName){
    Person.call(this, firstName, lastName);
}

Person.prototype.fullName = function(){
    return `${this.firstName} ${this.lastName}`;
}



console.log("Let's see Student prototype", Student.prototype);

console.log("Person prototype",Person.prototype);

// Student.prototype = Person.prototype;
// The above assignment is dangerous because any changes in either of the prototype of the function will change in the other.

// Instead better to do is to point the __proto__ of Student to the __proto__ of Person.prototype, use Object.create

Person.prototype.fullName = 

Student.prototype = Object.create(Person.prototype);// Object.create should be used because we do not want the same reference of the object. By using Object.create, we are making sure that both object do not share same references and we get what is there on the Person.prototype. This will ensure that whatever is changed in Person.prototype will reflect in the Student.prototype but not vice-versa.

Person.prototype.checkOverride = function(){
    return "Learning and Growing";
}

Student.prototype.shouldNotOverride = function(){
    return "JavaScript is difficult to understand";
}


