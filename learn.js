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

const highorder = (m) => {
  const onefun = (n) => {
    const twofun = (p) => {
      return m + n + p;
    };
    return twofun;
  };
  onefun;
};

console.log(highorder(2)(3)(4)); // This will now correctly output 9

function onemorehello() {
  console.log("hello sir", Math.random());
}

setInterval(onemorehello, 100);
setTimeout(onemorehello, 200);
