import usingWindow from "./window";

window.myProp = "secret-message";
document.aMethod = jest.fn();

describe("testing window client js", () => {
  it("should have mocked prop", () => {
    const expectedResult = "secret-message";
    const result = usingWindow.myMethod();
    expect(result).toBe(expectedResult);
  });

  describe("document object", () => {
    it("should be mocked", () => {
      usingWindow.anotherMethod();
      expect(document.aMethod.mock.calls.length).toBe(1);
    });
  });
});
