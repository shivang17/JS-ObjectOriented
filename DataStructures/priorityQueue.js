// Another way to implement Queue is Priority queue.

import Queue from './queue';

// In priority queue, not only do you pass in the element but also the priority of the queue.

// All priority will have same behavior as normal queue.
// Higher priority numbers will be ahead in the queue.


// So, every method will remain same except the enqueue.

function PriorityQueue(){
    var collection = [];

    this.printCollection = function(){
        console.log(collection);
    }

    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element);
        }else{
            var added = false;
            for(var i = 0; i < collection.length;i++){
                if(element[1] < collection[i][1]){
                    collection.splice(i,0,element);
                    added = true;
                    break;
                }
            }
        if(!added){
            collection.push(element);
        }
        }
    }
    this.dequeue = function(){
        var value = collection.shift();
        return value[0];
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