// Queue -> It is a way to hold data similar to Stack. Difference is that it is FIRST IN FIRST OUT(FIFO).

// First person to get in a line is the first person to reach register.

// Documents in the printer are printed in the order they were sent to the printer queue.

// We can use Array to implement Queue.


export default function Queue(){
    var collection = [];

    this.print = function(){
        console.log(collection);
    }

    this.enqueue = function(element){
        collection.push(element);
        
    }

    this.dequeue = function(){
        return collection.shift();
    }

    this.front = function(){
        return collection[0];
    }

    this.size = function(){
        return collection.length;
    }

    this.isEmpty = function(){
        return (collection.length === 0);
    }

}


var q = new Queue();
q.enqueue('a');
q.enqueue('b');
console.log(q.print());

