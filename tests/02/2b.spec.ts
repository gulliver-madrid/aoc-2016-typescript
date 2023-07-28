import { solve } from '../../src/02/b'

describe("Day 02, part b", () => {
    test("Check first case", () => {
        expect(solve(`ULL
        RRDDD
        LURDL
        UUUUD`.split('\n').map(line => line.trim()))).toBe('5DB3');
    });
});
