import { greet } from "./greet.js";

describe("greet function", () => {
  it("returns a string 'Hello Jane!' if called greet('Jane')", () => {
    const result = greet("Jane");
    expect(result).toBe("Hello Jane!");
  });

  it("returns a String 'Hello stranger!' if called greet()", () => {
    const result = greet();
    expect(result).toBe("Hello stranger!");
  });

  it("returns a String 'Hello Coach!' if called greet('Alex')", () => {
    const result = greet("Alex");
    expect(result).toBe("Hello Coach!");
  });

  it("returns a String 'Hello Coach!' if called greet('Anita')", () => {
    const result = greet("Anita");
    expect(result).toBe("Hello Coach!");
  });

  it("returns a String 'Hello Coach!' if called greet('Jessica')", () => {
    const result = greet("Jessica");
    expect(result).toBe("Hello Coach!");
  });

  it("returns a String 'Hello Coach!' if called greet('Dominik')", () => {
    const result = greet("Dominik");
    expect(result).toBe("Hello Coach!");
  });
});
