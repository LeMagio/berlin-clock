# Berlin Clock
## JS URL https://www.codewars.com/kata/5a1463678ba9145a670000f9/train/javascript

Possibles Scenarios to Test:
- Validate input string format HH:MM:SS.
- Test more number major of 23, 59, 59 and negative numbers.
- Test empty strings, null or undefined.
- Test for letters and special characters.
- Test for correct number of leds depending of input.

## Test suite Jest
```js
// test set for passing
describe("Should pass", () => {
  it("for default minimum value", () => {
    Test.assertSimilar(berlinClock("00:00:00"), 
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
  });
  it("for fourth row led", () => {
    Test.assertSimilar(berlinClock("00:01:01"), 
    "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYOOO");
    Test.assertSimilar(berlinClock("00:02:02"), 
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nYYOO");
    Test.assertSimilar(berlinClock("00:03:03"), 
    "Y\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYO");
    Test.assertSimilar(berlinClock("00:04:04"), 
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nYYYY");
  });
  it("for third row led", () => {
    Test.assertSimilar(berlinClock("00:05:00"), 
    "Y\nOOOO\nOOOO\nYOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("00:10:00"), 
    "O\nOOOO\nOOOO\nYYOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("00:15:00"), 
    "Y\nOOOO\nOOOO\nYYROOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("00:20:00"), 
    "O\nOOOO\nOOOO\nYYRYOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("00:55:00"), 
    "Y\nOOOO\nOOOO\nYYRYYRYYRYY\nOOOO");
  });
  it("for second row led", () => {
    Test.assertSimilar(berlinClock("01:00:00"), 
    "O\nOOOO\nROOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("02:00:00"), 
    "O\nOOOO\nRROO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("03:00:00"), 
    "O\nOOOO\nRRRO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("04:00:00"), 
    "O\nOOOO\nRRRR\nOOOOOOOOOOO\nOOOO");
  });
  it("for first row led", () => {
    Test.assertSimilar(berlinClock("05:00:00"), 
    "O\nROOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("10:00:00"), 
    "O\nRROO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("15:00:00"), 
    "O\nRRRO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("20:00:00"), 
    "O\nRRRR\nOOOO\nOOOOOOOOOOO\nOOOO");
  });
  it("for default maximum value", () => {
    Test.assertSimilar(berlinClock("23:59:59"), 
    "Y\nRRRR\nRRRO\nYYRYYRYYRYY\nYYYY");
  });
  it("for valid value", () => {
    Test.assertSimilar(berlinClock("12:56:01"), 
    "Y\nRROO\nRROO\nYYRYYRYYRYY\nYOOO");
  });
});

// test set for failing
describe("Should fail", () => {
  it("when it's null or empty string", () => {
    Test.assertSimilar(berlinClock(null), 
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock(" "), 
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock(undefined), 
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
  });
  it("when it's not supported string", () => {
    Test.assertSimilar(berlinClock("INVALID"), 
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("OO:OO:OO"), 
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
  });
  it("when it's and not correct format string", () => {
    Test.assertSimilar(berlinClock("12:00"), 
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("::"),
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("23:00.00"),
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("3:00:00"),
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("12:1:00"),
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("00:00:1"),
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
    Test.assertSimilar(berlinClock("0:0:0"),
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
  });
  it("when hours it's bigger than 23 hours", () => {
    Test.assertSimilar(berlinClock("24:00:00"),
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
  });
  it("when minutes it's bigger than 59 minutes", () => {
    Test.assertSimilar(berlinClock("23:60:00"),
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
  });
  it("when seconds it's bigger than 59 seconds", () => {
    Test.assertSimilar(berlinClock("23:00:60"),
    "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO");
  });
});
```
