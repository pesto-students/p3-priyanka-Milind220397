let car1 = {
  carName: "XYZ",
};
let car2 = {
  carName: "ABC",
};
let car3 = {
  carName: "PQR",
};

function printCar(carName) {
  console.log(`name of car is : ${this.carName}`);
}

function compareCar(...cars) {
  cars.forEach((car) => {
    console.log(`comparing ${this.carName} with ${car.carName}`);
  });
}

//! example of bind method
let printCarXyx = printCar.bind(car1);
printCarXyx();
// output
// name of car is : XYZ

//! example of call method
compareCar.call(car1, car2, car3);
//output
// comparing XYZ with ABC
// comparing XYZ with PQR

//! example of apply method
compareCar.apply(car1, [car2, car3]);
// comparing XYZ with ABC
// comparing XYZ with P
