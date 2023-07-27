import { solve } from '../../src/02/a'

describe("Day 2, part a", () => {
    test("Check first case", () => {
        expect(solve(`ULL
        RRDDD
        LURDL
        UUUUD`.split('\n').map(line => line.trim()))).toBe('1985');
    });
});
