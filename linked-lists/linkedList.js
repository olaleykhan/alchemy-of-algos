class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  tail = null;
  length = 0;


  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length++;

  }

  prepend(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
    this.length++;
  }

  insert(val, index) {
    if (index === 0) {
      return this.prepend(val);
    }
    if (index >= this.length) {
      return this.append(val)
    }
    const newNode = new Node(val);
    const prevNode = this.transverse(index - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
  }

  remove(index) {
    if (this.length <= 1) {
      this.length = 0;
      this.head = null;
      this.tail = null;
      return;
    }
    const prevNode = this.transverse(index - 1);
    const unwanted = prevNode?.next;
    prevNode.next = unwanted?.next;
    this.length--;
  }



  print() {
    console.log(this);
  }

  get(index) {
    console.log("value at index ", index, " is: ", this.transverse(index)?.val, `and the current length is ${this.length}`)
  }

  transverse(index) {
    // if (index === 0) {
    //   return this.head
    // }
    if (index >= this.length - 1) {
      return this.tail;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (index > currentIndex) {
      currentNode = currentNode?.next;
      currentIndex++;
    }
    return currentNode;
  }

  reverse() {
    let prevNode = null;
    let currentNode = this.head;
    this.tail = currentNode;

    while (currentNode !== null) {
      const temp = currentNode.next;
      currentNode.next = prevNode;
      prevNode = currentNode;
      currentNode = temp;

    }
    this.head = prevNode;
  }


}


const myLink = new LinkedList();
myLink.get(0);
myLink.append(1)
myLink.append(2)
myLink.append(3)
myLink.prepend("start")


// myLink.get(0);
// myLink.get(9)


myLink.print();
myLink.prepend("ibere");
myLink.print();
// myLink.reverse();
// myLink.print();