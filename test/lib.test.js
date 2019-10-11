const lib = require("../lib");

// --->Before using describe funtion
// test("absolute-should return a positive number if input is positive", () => {
// const result = lib.absolute(1);
// expect(result).toBe(1);
// });

// test("absolute-should return a positive number if input is negative", () => {
// const result = lib.absolute(-1);
// expect(result).toBe(1);
// });

// test("absolute-should return a 0 if input is 0", () => {
// const result = lib.absolute(0);
// expect(result).toBe(0);
// });

//Function- to group a similar functions
describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return a 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

//Testing String function
describe("greet", () => {
  test("should return greeting message", () => {
    const result = lib.greet("Mathu");
    //expect(result).toBe("welcome Mathu");
    //expect(result).toMatch(/Mathu/);
    expect(result).toContain("Mathu");
  });
});

//Testing Arrays function
describe("getCurrencies", () => {
  it("test cuurency", () => {
    const result = lib.getCurrencies();

    //to general
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    //to specific
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUR");
    expect(result[2]).toBe("EUR");
    expect(result.length).toBe(3);

    //proper way
    expect(result).toContain("USD");
    expect(result).toContain("AUR");
    expect(result).toContain("EUR");
  });
});
