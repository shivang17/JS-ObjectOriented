// Implement your own reverse method on String.

// example: "awesome".reverse() should return "emosewa".

String.prototype.reverse = function(){
    let reverseStr = "";
    for(let i = this.length - 1; i >=0 ; i--){
        reverseStr += this[i];
    }

   return reverseStr.toLowerCase();
}

console.log("Shivang".reverse());

// Implement new keyword

/* 
    4 things that new keyword does:

    1) creates a new object in the thin air
    2) set the value of keyword this to the object created using new
    3) return this implicitly
    4) creates a link between __proto__ on the created object and function that created it.

    Sample test case: // const a = newImplement(Person, 'Guy')
    Here, Person is the constructor function and second is any parameter that is given to the consturctor in a normal setting

*/

function newImplement(Constructor, ...args){
    // 1) creates a new object.
    var obj = Object.create(Constructor.prototype);
    
    // obj.__proto__ = Consturctor.prototype;
    var result = Constructor.apply(obj, ...args);
    // if(typeof result ===  number || typeof result === String || typeof result === "boolean" || typeof result === null || typeof result === undefined){
    //     return obj;
    // }

    // return result;

    return result === Object(result) ? result : obj;
}