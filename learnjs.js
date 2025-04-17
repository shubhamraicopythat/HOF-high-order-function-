const powertwo = (n) => {
  return n ** 2;
};
function powercube(powertwo, n) {
  return powertwo(n) * n;
}
// console.log(powercube(powertwo, 3));

function sayHello() {
  return () => {
    console.log("Hello Sir");
  };
}

let guessvalue = sayHello();
console.log(guessvalue);
guessvalue();
