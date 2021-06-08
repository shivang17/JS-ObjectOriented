// Sets
// no particular order. To check presence of an item

// we will store the set in an array but we will implement it in such a way that you cannot add duplicate items to it.

var mySet = function(){
  // set array.
  var collection = [];

  // methods
  // 1) has method.. Checks whether the passed value is present in the collection(set) or not;

  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // 2) values.
  // all the values in the set

  this.values = function () {
    return collection;
  };

  // 3) add
  // this method will add an element to the set.
  // But here, we need to make sure that the added value is not already present in the set.

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // 4) remove
  // this method will remove an element from the set.

  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }

    return false;
  };

  // 5) size
  // gives back the number of elements in the Set.

  this.size = function () {
    return collection.length;
  };

  // 6) Union
  // return the union of two sets.

  this.union = function (otherSet) {
    var unionSet = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach((e) => {
      unionSet.add(e);
    });

    secondSet.forEach((e) => {
      unionSet.add(e);
    });

    return unionSet;
  };

  // 7) intersection
  // returns the intersection between two sets.

  this.intersection = function(otherSet){
      var intersectionSet = new mySet();
      var firstSet = this.values();
     
     firstSet.forEach((e) =>{
         if(otherSet.has(e)){
             intersectionSet.add(e);
         }
     })
     return intersectionSet;
    }

    // 8) difference
    // it will return difference of two sets as a new set

    this.difference = function(otherSet){
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach((e) =>{
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        })
        return differenceSet;
    }

    // 9) subset
    // it will test if the set is a subset of different set.

    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every((value) =>{
            return otherSet.has(value);
        })
    }
}


var setA = new mySet();
var setB = new mySet();

setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("a");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
