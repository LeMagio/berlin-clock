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

    it("when it's not supported string", () => {
        expect(berlinClock("INVALID")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("OO:OO:OO")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    });

    it("when it's and not correct format string", () => {
        expect(berlinClock("12:00")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("::")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("23:00.00")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("3:00:00")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("12:1:00")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("00:00:1")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("0:0:0")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    });

    it("when hours it's bigger than 23 hours", () => {
        expect(berlinClock("24:00:00")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    });

    it("when minutes it's bigger than 59 minutes", () => {
        expect(berlinClock("23:60:00")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    });
    
    it("when seconds it's bigger than 59 seconds", () => {
        expect(berlinClock("23:00:60")).toBe(
            "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    });
});