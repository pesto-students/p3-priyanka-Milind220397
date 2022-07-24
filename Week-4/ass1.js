/*function get_random(){
    return Math.floor(Math.random() * 100);
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
    let nos = get_random() ;
    //nos = 5;

    if (nos%5== 0) {
        myReject(nos);
    } else {
      myResolve(nos);
    }
  });
  
  myPromise.then(
    function(value) {console.log(value+':Success')},
    function(error) {console.log(error+':Error')}
  );
  */

class CPromise {
  constructor(handler) {
    this.status = "pending";
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = value => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.onFulfilledCallbacks.forEach(fn => fn(value));
      }
    };

    const reject = value => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = value;
        this.onRejectedCallbacks.forEach(fn => fn(value));
      }
    };

    try {
      handler(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    if (this.status === "pending") {
      this.onFulfilledCallbacks.push(onFulfilled);
      this.onRejectedCallbacks.push(onRejected);
    }

    if (this.status === "fulfilled") {
      onFulfilled(this.value);
    }

    if (this.status === "rejected") {
      onRejected(this.value);
    }
  }
}

// testing code

const p3 = new CPromise((resolve, reject) => {
  
  let nos = Math.floor(Math.random() * 100);
  if (nos % 5 == 0) {
    reject(nos);
  } else {
    resolve(nos);
  }

});

p3.then((res) => {
  console.log('Resolved:'+res);
}, (err) => {
  console.log('Error'+(err));
});



