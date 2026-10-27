const test = require("node:test");
const assert = require("node:assert/strict");
const { add, greet } = require("../src/app");

test("add sums two numbers", () => {
  assert.equal(add(2, 3), 5);
});

test("add rejects non-numbers", () => {
  assert.throws(() => add("2", 3), TypeError);
});

test("greet uses the default name", () => {
  assert.equal(greet(), "Hello, World!");
});

test("greet accepts a name", () => {
  assert.equal(greet("Ayoub"), "Hello, Ayoub!");
});