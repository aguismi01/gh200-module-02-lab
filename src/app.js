function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both values must be numbers");
  }

  return a + b;
}

function greet(name = "World") {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(greet());
}

module.exports = { add, greet };