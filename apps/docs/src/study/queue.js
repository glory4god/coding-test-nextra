class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  #size = 0;
  constructor() {
    this.front = null;
    this.rear = null;
  }
  enqueue(val) {
    const node = new Node(val);
    this.#size++;
    if (!this.rear) this.front = node;
    else this.rear.next = node;
    this.rear = node;
  }
  dequeue() {
    if (!this.front) throw new Error('Element does not exist.');
    this.#size--;
    const val = this.front.val;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    return val;
  }
  size() {
    return this.#size;
  }
  getQueue() {
    let queue = [];
    let head = this.front;
    while (head) {
      queue.push(head.val);
      head = head.next;
    }
    return queue;
  }
  search(n) {
    if (n >= this.#size) throw new Error('Index can not access.');
    let idx = 0;
    let head = this.front;
    while (head) {
      if (idx === n) return head.val;
      head = head.next;
      idx++;
    }
  }
  getFront() {
    if (!this.front) return null;
    return this.front.val;
  }
  getRear() {
    if (!this.rear) return null;
    return this.rear.val;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(
  queue.getQueue(),
  queue.getRear(),
  queue.getFront(),
  queue.size(),
  queue.search(3),
);
console.log(queue.dequeue());
console.log(
  queue.getQueue(),
  queue.getRear(),
  queue.getFront(),
  queue.size(),
  queue.search(0),
);
console.log(queue.dequeue());
console.log(
  queue.getQueue(),
  queue.getRear(),
  queue.getFront(),
  queue.size(),
  queue.search(0),
);
console.log(queue.dequeue());
console.log(
  queue.getQueue(),
  queue.getRear(),
  queue.getFront(),
  queue.size(),
  queue.search(0),
);
console.log(queue.dequeue());
console.log(queue.getQueue(), queue.getRear(), queue.getFront(), queue.size());
