// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     const newNode = new Node(value);
//     this.head = newNode;
//     this.tail = newNode;
//     this.length = 1;
//   }

//   push(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//       this.length = 1;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//     this.length++;
//   }

//   pop() {
//     if (!this.head) return undefined;
//     let temp = this.head;
//     let pre = this.head;

//     while (temp.next) {
//       pre = temp;
//       temp = temp.next;
//     }
//     this.tail = pre;
//     this.tail.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.head = null;
//       this.tail = null;
//     }
//   }
//   unshift(value) {
//     const newNode = new Node(value);
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//       this.length = 1;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//     this.length++;
//   }

//   shift() {
//     if (!this.head) return undefined;
//     let temp = this.head;
//     this.head = this.head.next;
//     temp.next = null;
//     this.length--;
//     if (this.length === 0) {
//       this.tail = null;
//     }
//   }

//   get(index) {
//     if (index < 0 || index >= this.length) return undefined;
//     let temp = this.head;
//     for (let i = 0; i < index; i++) {
//       temp = temp.next;
//     }
//     return temp;
//   }

//   set(index, value) {
//     let temp = this.get(index);
//     if (temp) {
//       temp.value = value;
//       return true;
//     }
//     return false;
//   }

//   insert(index, value) {
//     if (index < 0 || index > this.length) return false;
//     if (index === 0) return this.unshift(value);
//     if (index === this.length) return this.push(value);

//     const newNode = new Node(value);
//     let temp = this.get(index - 1);

//     newNode.next = temp.next;
//     temp.next = newNode;
//     this.length++;
//     return true;
//   }
//   remove(index) {
//     if (index === 0) return this.shift();
//     if (index === this.length - 1) return this.pop();
//     if (index < 0 || index >= this.length) return undefined;

//     let before = this.get(index - 1);
//     let temp = before.next;
//     before.next = temp.next;
//     temp.next = null;
//     this.length--;
//     return temp;
//   }
//   reverse() {
//     let temp = this.head;
//     this.head = this.tail;
//     this.tail = temp;
//     let next = temp;
//     let prev = null;
//     for (let i = 0; i < index; i++) {
//       next = temp.next;
//       temp.next = prev;
//       prev = temp;
//       temp = next;
//     }
//     return this;
//   }
// }

// const myLinkedList = new LinkedList(1);
// myLinkedList.push(3);
// myLinkedList.push(4);
// myLinkedList.remove(2);
// console.log(myLinkedList);

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  get(index) {
    let temp = this.head;
    let i = 0;
    while (i < index) {
      temp = temp.next;
      i++;
    }
    return temp;
  }
}

// const myLinkedList = new LinkedList(6);
// myLinkedList.push(3);
// myLinkedList.push(5);
// console.log(myLinkedList.get(2));

const factorialize = (n) => {
  // if (n < 0) {
  //   return -1;
  // } else if (n == 0) {
  //   return 1
  // } else {
  //   return n * factorialize(n - 1);
  // }

  let result = n;

  while (n > 1) {
    result = result * (n - 1);
    n--;
  }
  return result;
};

const Fibonacci = (n) => {
  let n1 = 0,
    n2 = 1,
    nextNum;

  // for(let i = 1; i <= n; i++) {
  //   console.log(n1);
  //   nextNum = n1 + n2;
  //   n1 = n2;
  //   n2 = nextNum;
  // }
  nextNum = n1 + n2;
};

// [123, 543], [321, 279]
const minimumMoves = (arr1, arr2) => {
  let noOfMoves = 0;

  const splitArr1 = String(arr1)
    .split("")
    .map(Number)
    .filter((e) => !isNaN(e));
  const splitArr2 = String(arr2)
    .split("")
    .map(Number)
    .filter((e) => !isNaN(e));

  for (let i = 0; i < splitArr1.length; i++) {
    if (splitArr1[i] !== splitArr2[i] && splitArr1[i] !== NaN) {
      noOfMoves = noOfMoves + Math.abs(splitArr1[i] - splitArr2[i]);
    }
  }

  return noOfMoves;
};

