const { test, expect } = require("@jest/globals");
const lib = require("./lib");

//avg test
test("avg([3, 5, 7]) should be 5", () => {
    expect(lib.avg([3, 5, 7])).toBe(5);
});
test("avg([-5, 5]) should be 0", () => {
    expect(lib.avg([-5, 5])).toBe(0);
});
//prime test
test("prime(5) should be true ", () => {
    expect(lib.prime(5)).toBe(true);
});
test("prime(4) should be false ", () => {
    expect(lib.prime(4)).toBe(false);
});

//factorial test
test("actorial(3) should be 6 ", () => {
    expect(lib.factorial(3)).toBe(6);
});
test("actorial(16) should be -1 ", () => {
    expect(lib.factorial(16)).toBe(-1);
});
