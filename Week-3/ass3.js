function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }

  return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log(); // What is logged?

// Output:- Count is 0
/* The function increment() was called three time which increased count to a value of 3
  message variable is in the function createIncrement() whose initial value is count is 0
  even if the variable count has increased many time the variable message always matters count is 0
  log() a closure that grabs the message variable from scope createIncrement()
  console.log(message) writes down 'Count is 0' to the console.*/
