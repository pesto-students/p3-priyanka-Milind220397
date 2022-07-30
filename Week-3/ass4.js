function createStack() {
  const items = []; // we have declared the item before return and inside the createStack()
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}

const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());

console.log(stack.items); // => undefined
