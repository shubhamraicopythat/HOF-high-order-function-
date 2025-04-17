const powertwo = (n) => {
  return n ** 2;
};
function powercube(powertwo, n) {
  return powertwo(n) * n;
}
console.log(powercube(powertwo, 3));
