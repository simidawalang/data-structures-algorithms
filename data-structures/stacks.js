class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    if (this.length === 1) {
      this.top = null;
    } else {
      let temp = this.top;
      this.top = temp.next;
      temp.next = null;
      this.length--;
      return temp;
    }
    
  }
}

const myStack = new Stack(7);
myStack.push(2);
myStack.pop();
console.log(myStack);
