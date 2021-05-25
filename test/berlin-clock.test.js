const berlinClock = require('../src/berlin-clock');

describe('Jest setup', () => {
    it('working as expected', () => {
        expect(true).toBe(true);
    })
});

describe("Should fail", () => {
    it("when it's null or empty string", () => {
        expect(berlinClock(null)).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock(" ")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock(undefined)).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    });
});