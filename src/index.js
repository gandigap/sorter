class Sorter {
  constructor() {
    // your implementation
    this.store = [];
    this.comparator;
  }

  add(element) {
    // your implementation
    this.store.push(element);
  }

  at(index) {
    // your implementation
    return  this.store[index];
  }

  get length() {
    // your implementation
    return this.store.length;
  }

  toArray() {
    // your implementation
    return this.store;
  }

  sort(indices) {
    // your implementation
    indices.sort(defaultComparer);
    let subArray = [];

    for(let i in indices) {
      subArray.push(this.store[indices[i]]);
    }

    if(!this.comparator) {
        subArray.sort(defaultComparer)
      } else {
        subArray.sort(this.comparator);
      }

    for(let i in indices) {
      this.store[indices[i]] = subArray[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}
function defaultComparer(num1,num2){
  switch(true) {
      case num1 > num2 : return 1;
      case num1 < num2 : return -1;
  }
}

module.exports = Sorter;