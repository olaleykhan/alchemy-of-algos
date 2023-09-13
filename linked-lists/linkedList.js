class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {


  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;

  }

  prepend(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  append(val) {
    const newNode = new Node(val);
    const temp = this.tail;
    this.tail = newNode;
    if (!this.head) {

      this.head = newNode;
    } else {
      temp.next = newNode;
    }
    this.length++;
  }

  tranverse(index) {
    if (!this.head || index >= this.length) {
      console.log(null)
      return null;
    };

    let currentNode = this.head;
    let count = 0;
    while (currentNode.value) {
      if (count >= index) {
        console.log(currentNode);
        return currentNode
      }
      currentNode = currentNode.next;
      count++;

    }

  }

  insert(val, index) {

    if (index >= this.length) {
      return this.append(val)
    }
    if (index === 0) {
      return this.prepend(value);
    }


    const newNode = new Node(val);
    const prevNode = this.tranverse(index - 1);
    const temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;

    this.length++;
  }

  remove(index) {
    if (this.length > 1) {
      const prevNode = this.tranverse(index - 1);
      const currNode = prevNode.next;
      prevNode.next = currNode.next;
      this.length--;
    } else {
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
  }

  get(index) {
    return this.tranverse(index);
  }

  print() {
    console.log(this);
  }

  reverse() {
    const newList = new this.constructor()
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      newList.prepend(currentNode.value)
      currentNode = currentNode.next;
    }
    this.head = newList.head;
    this.tail = newList.tail;

  }

}

const myLink = new LinkedList();

myLink.prepend("middle")
myLink.append("after middle");
myLink.append("end");
myLink.prepend("start");
// myLink.tranverse(10);
// myLink.tranverse(2);

myLink.print();
myLink.reverse();
console.log("*********************************************");
myLink.print();