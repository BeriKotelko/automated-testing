// import function from local file
const findShortestString = require("./find-shortest-string");

test("findLongestString finds the shortest string in an array", () => {
  expect(findShortestString(["it", "is", "a", "nice", "day"])).toBe("a");
  expect(findLongestString(["why", "hello", "to", "you"])).toBe("to");
});

test("findShortestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findShortestString(["brave", "dance"])).toBe("brave");
  expect(findShortestString(["pie", "fly", "die"])).toBe("pie");
  expect(findShortestString(["left", "cars", "desk"])).toBe("left");
});
module.exports = findShortestString;
