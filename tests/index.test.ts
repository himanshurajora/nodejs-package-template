import { add } from "../src";

describe("Test index module", () => {
  it("Should add both numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
