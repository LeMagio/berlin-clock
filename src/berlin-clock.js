/**
 * Berlin clock module
 */

const DEFAULT_VALUE = "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO";
const VALID_FORMAT_TIME_REGEXP = /^(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])$/;
const RED_LED = 'R';
const YELLOW_LED = 'Y'
const OFF_LED = 'O';
const HOUR_SEPARATOR = ':';
const EMPTY_CHAR = '';

/**
 * Transform an input string to its corresponding valid
 * format using 'leds' to depict the same time
 * @param {string} timeString Input time string
 * @returns string
 */
function berlinClock(timeString) {
    if (!isValidTime(timeString)) { return DEFAULT_VALUE; }
    return getBerlinClockString(getTimeArray(timeString));
}

/**
 * Test the input against the format HH:mm:ss
 * @param {string} timeString Input string to be validated
 * @returns boolean
 */
function isValidTime(timeString) {
    return !(!timeString || timeString.trim().length == 0 || !timeString.match(VALID_FORMAT_TIME_REGEXP));
}

/**
 * Transform the input string to an valid array
 * @param {string} timeString String to be transformed
 * @returns JSON object with each value extracted form the time string
 */
function getTimeArray(timeString) {
    let time = timeString.split(HOUR_SEPARATOR);
    return { hours: time[0], minutes: time[1], seconds: time[2] };
}

/**
 * Return the led string corresponding to the first row of hours
 * @param {Number} hours Input number of hours
 * @returns string
 */
function getFirstRow(hours) {
    return Array(Number.parseInt(hours / 5)).fill(RED_LED).join(EMPTY_CHAR).padEnd(4, OFF_LED);
}

/**
 * Return the led string corresponding to the second row of hours
 * @param {Number} hours Input number of hours
 * @returns string
 */
function getSecondRow(hours) {
    return Array(hours % 5).fill(RED_LED).join(EMPTY_CHAR).padEnd(4, OFF_LED);
}

/**
 * Return the led string corresponding to the third row of minutes
 * @param {Number} minutes Input number of minutes
 * @returns string
 */
function getThirdRow(minutes) {
    minutes = Number.parseInt(minutes / 5);
    let bufferThirdRow = new Array(11).fill(YELLOW_LED, 0, minutes).fill(OFF_LED, minutes, 11);
    bufferThirdRow[2] = bufferThirdRow[2] == YELLOW_LED ? RED_LED : OFF_LED;
    bufferThirdRow[5] = bufferThirdRow[5] == YELLOW_LED ? RED_LED : OFF_LED;
    bufferThirdRow[8] = bufferThirdRow[8] == YELLOW_LED ? RED_LED : OFF_LED;
    return bufferThirdRow.join(EMPTY_CHAR);
}

/**
 * Return the led string corresponding to the first row of minutes
 * @param {Number} minutes Input number of minutes
 * @returns string
 */
function getFourthRow(minutes) {
    return Array(minutes % 5).fill(YELLOW_LED).join(EMPTY_CHAR).padEnd(4, OFF_LED);
}

/**
 * Return the corresponding 'on led' for the given seconds
 * @param {Number} seconds Input number of seconds
 * @returns string
 */
function getEvenLedFromSeconds(seconds) {
    return seconds % 2 == 0 ? YELLOW_LED : OFF_LED;
}

/**
 * Returns a string with the line breaks along with each of the
 * led string rows
 * @param {JSON} time Object with hours, minutes and seconds properties
 * @returns string
 */
function getBerlinClockString(time) {
    return [getEvenLedFromSeconds(time.seconds), getFirstRow(time.hours), getSecondRow(time.hours), getThirdRow(time.minutes), getFourthRow(time.minutes)].join('\n');
}

module.exports = berlinClock;
