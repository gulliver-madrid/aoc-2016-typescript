import { clamp } from "../src/helpers";

describe("clamp functon", () => {
    test("Check cases", () => {
        expect(clamp(0, 2, 5)).toBe(2);
        expect(clamp(4, 2, 5)).toBe(4);
        expect(clamp(5, 2, 5)).toBe(5);
        expect(clamp(10, 2, 5)).toBe(5);
        expect(clamp(-10, -2, 5)).toBe(-2);
    });
});
