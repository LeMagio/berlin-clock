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
describe("Should pass", () => {
    it("for default minimum value", () => {
        expect(berlinClock("00:00:00")).toBe(
            "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    });
    it("for fourth row led", () => {
        expect(berlinClock("00:01:00")).toBe(
            "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYOOO");
        expect(berlinClock("00:02:00")).toBe(
            "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYOO");
        expect(berlinClock("00:03:00")).toBe(
            "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYO");
        expect(berlinClock("00:04:00")).toBe(
            "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYY");
    });
    it("for third row led", () => {
        expect(berlinClock("00:05:00")).toBe(
            "Y\nOOOO\nOOOO\nYOOOOOOOOOO\nOOOO");
        expect(berlinClock("00:10:00")).toBe(
            "Y\nOOOO\nOOOO\nYYOOOOOOOOO\nOOOO");
        expect(berlinClock("00:15:00")).toBe(
            "Y\nOOOO\nOOOO\nYYROOOOOOOO\nOOOO");
        expect(berlinClock("00:20:00")).toBe(
            "Y\nOOOO\nOOOO\nYYRYOOOOOOO\nOOOO");
        expect(berlinClock("00:55:00")).toBe(
            "Y\nOOOO\nOOOO\nYYRYYRYYRYY\nOOOO");
    });
    it("for second row led", () => {
        expect(berlinClock("01:00:00")).toBe(
            "Y\nOOOO\nROOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("02:00:00")).toBe(
            "Y\nOOOO\nRROO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("03:00:00")).toBe(
            "Y\nOOOO\nRRRO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("04:00:00")).toBe(
            "Y\nOOOO\nRRRR\nOOOOOOOOOOO\nOOOO");
    });
    it("for first row led", () => {
        expect(berlinClock("05:00:00")).toBe(
            "Y\nROOO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("10:00:00")).toBe(
            "Y\nRROO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("15:00:00")).toBe(
            "Y\nRRRO\nOOOO\nOOOOOOOOOOO\nOOOO");
        expect(berlinClock("20:00:00")).toBe(
            "Y\nRRRR\nOOOO\nOOOOOOOOOOO\nOOOO");
    });
    it("for default maximum value", () => {
        expect(berlinClock("23:59:59")).toBe(
            "O\nRRRR\nRRRO\nYYRYYRYYRYY\nYYYY");
    });
    it("for valid value", () => {
        expect(berlinClock("12:56:01")).toBe(
            "O\nRROO\nRROO\nYYRYYRYYRYY\nYOOO");
    });
});