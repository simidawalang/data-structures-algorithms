class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(value) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    let temp = this.first;
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = temp.next;
      temp.next = null;
    }
    this.length--;
    return temp;
  }
}

const myQueue = new Queue(4);
myQueue.enqueue(3);
myQueue.dequeue();
myQueue.dequeue();
console.log(myQueue);
