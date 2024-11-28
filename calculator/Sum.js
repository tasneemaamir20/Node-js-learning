
function calculateSum(a, b) {
  const sum = a + b;

  console.log(sum);
}

// module.exports = {
//   x: aa,
//   calculateSum: calculateSum,
// };

//  Same as above , in js when we can not declare the key name then js automatically consider the key and value for the same

module.exports = {
  calculateSum,
};