// Common data structure where elements are stored in a node.

// node has two pieces of information. The element itself(or the data) and the reference to the next node. 

// Like arrays, linked list can be used to implement other data structures.

// Comparison

/* 
    Array                           Linked List

    Fixed size                      Dynamic size
    Inefficient insertion           Effecient insertion and deletion
    and deletion                    No random access
    Random access                   No waste of memory
    May result in memory            Sequential access is slow 
    waste                           (Elements not in a contigious
    Access is faster at times.      memory).   
    (because elements are in 
    contigious memory)


*/

// Every linked list has head, size, other nodes, and last node point to null. Head points to the next node.

function LinkedList(){
    var length = 0;
    var head = null;

    var Node = function(element){
        this.element = element;
        this.next = null;
    }

    // methods

    this.size = function(){
        return length;
    }

    this.head = function(){
        return head;
    }

    // IMPORTANT TO UNDERSTAND thoroughly.

    // add method:


    this.add = function(element){
        // create a new node using new keyword.
        // check if the head exists, if not, assign the created node to head. 

        // if head exists, assign head to a variable currentNode. To loop through the entire linked list, use a while loop and see till when is currentNode's next is pointing to a value and inside loop, keep assigning the next of currentNode to the currentNode.
        // Out of the loop, assign new node to the currentNode's next(out of the loop, currentNode refers to the last element).
    
        var node = new Node(element);
        if(head === null){
            head = node;
        }else{
            var currentNode = head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
    
    length++;
    };

    // remove method.

    this.remove = function(element){
        /* 
            Approach:

            1) start with the head, assign it as a currentNode and also declare previousNode to keep the track

            2) Check if the element passed is the same as head.element, if it is true, means we want to remove the head. Assign the head to next pointer of the currentNode.

            3) If the element passed is not the head node, run a while loop until the element found. inside the loop, assign the currentNode to previousNode and currentNode.next to currentNode.

            4) Finally, assign the currentNode.next to previousNode.next which will remove the link of any reference of the passed' data.
        */
        
        var currentNode = head;
        var previousNode;
        if(currentNode.element === element){
            head = currentNode.next;
        }else{
            while(currentNode.element !== element){
                previousNode = currentNode;
                currentNode = currentNode.next;

            }

            previousNode.next = currentNode.next;
        }

        length--;
    }

    // isEmpty method

    this.isEmpty = function(){
        return length ===0;

    }


    // indexOf

    this.indexOf = function(element){
        var currentNode = head;
        var index = -1;
        while(currentNode){
            index++;
            if(currentNode.element === element){
                return index;
            }

            currentNode = currentNode.next;
        }
        return -1;
    }

    // elementAt, opposite of index at.

    this.elementAt = function(index){
        var currentNode = head;
        var count = 0;
        while(count < index){
            count++;
            currentNode = currentNode.next;
        }

        return currentNode.element;
    }


    // Add at a particular place

    this.addAt = function(index,element){
        var node = new Node(element);
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if(index > length) {
            return false;
        }

        if(index === 0) {
            node.next = currentNode;
            head = node;
        }else {
            while(currentIndex < index) {
                currentIndex ++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            node.next = currentNode;
            previousNode.next = node;
     
        }

        length++;
    }

    // removeAt , removes the node from specific index mentioned.
    // It is very similar to the addAt method except we will not create a new node here.


    this.removeAt = function(index){

        var currentNode = head;
        var previousNode;
        var currentIndex = 0;
        
        if(index < 0 || index > length) {
            return null;
        }

        if(index === 0){
            head = currentNode.next;
        }else{
            while(currentIndex < index){
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            previousNode.next = currentNode.next;
        }

        length--;
        return currentNode.element;
    }

}

var canga = new LinkedList();

canga.add('Kitten');
canga.add('Puppy');
canga.add('Dog');
canga.add('Cat');
canga.add('Fish');
console.log(canga.size());
console.log(canga.removeAt(3));
console.log(canga.elementAt(3));
console.log(canga.indexOf('Puppy'));
console.log(canga.size());



