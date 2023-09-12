class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// example of a node
/*
a node is always an object. containing it's data and it's pointer

{
  head: 1,
  tail:{
    head:2
    tail:{
      head:3,
      tail:null,
    }
  }
}
*/


/*

const node1={
  head:1,
  tail:node2
}

const node2={
  head:2,
  tail: node3
}

const node3={
  head:3,
  tail:null
}

const linkedList = {
  head: 0,
  tail: node1
}


*/

class LinkedList {
  constructor(init) {
    this.head = new Node(init);
    this.tail = null;
    this.size = 1;
  }

  append(data) {
    console.log(data)
  }

  prepend(data) {
    console.log(data)
  }

  insert(data, index) {
    console.log(data, "is being inserted at index : ", index);
  }

  delete(index) {
    console.log('deleting...... data at index:', index);
  }

  printList(data){

  }


}

console.log(new Node(34));