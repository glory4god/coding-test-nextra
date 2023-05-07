class Stack {
  #list = [];
  #index = -1;
  push(val) {
    this.#list[++this.#index] = val;
  }
  pop() {
    if (this.#index === -1) throw new Error('Element does not exist.');
    return this.#list[this.#index--];
  }
  size() {
    return this.#index + 1;
  }
  getStack() {
    let stack = [];
    for (let i = 0; i <= this.#index; i++) {
      stack[i] = this.#list[i];
    }
    return stack;
  }
  getTail() {
    if (this.#index === -1) return null;
    return this.#list[this.#index];
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.getStack(), stack.size());
console.log(stack.pop());
console.log(stack.getStack());
console.log(stack.pop());
console.log(stack.getStack());
console.log(stack.pop());
console.log(stack.getStack());
console.log(stack.pop());
