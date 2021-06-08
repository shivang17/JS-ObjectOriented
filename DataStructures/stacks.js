// Stacks - a stack of book is a great example of stack data structure.

// Stack of book : the book on the top will be the one you put the last and if you remove the book from the stack, the last one to get added will be removed first. So, we call that stack is LIFO(Last In First Out.)

// Another example is: Browser's back button

// functions: push, pop, peek, length(or size). 

/* 
    push  -> placing data on the stack.
    pop -> removing the top element of a stack

    peek -> displaying the top element of the stack

    length or size -> determine number of elements on stack.


*/

// All the above methods are present on the Array constructor. So, we can use an array to implement a stack.


// Let's use array stack to determine a palindrome.


var letters = [];

var word = "racecar";


var rword = "";


for(var i = 0 ; i< word.length; i++){
    letters.push(word[i]);
}


for(var j = 0; j < word.length; j++){
    rword += letters.pop();

}

if(word === rword){
    console.log(`${word} is a palindrome`)
}else{
    console.log(`${word} is not a palindrome`);
}

// let's implement stack in JavaScript using function

var Stack = function(){
    this.count = 0;
    this.storage = {};

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
        /*
            OR:
            var result = this.storage[this.count-1];
            delete this.storage[this.count-1];
            this.count--; 
         */
    }

    this.size = function(){
        return this.count; 
    }

    this.peek = function(){
        return this.storage[this.count-1];
    }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(45);
myStack.push(48);
console.log(myStack);

myStack.pop();
console.log(myStack.size());
console.log(myStack.peek());

