const DEFAULT_VALUE = "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO";
const VALID_FORMAT_TIME_REGEXP = /^(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])$/;
const RED_LED = 'R';
const YELLOW_LED = 'Y'
const OFF_LED = 'O';

function berlinClock(timeString) {
    if (!isValidTime(timeString)) { return DEFAULT_VALUE; }
    return getBerlinClockString(getTimeArray(timeString));
}

function isValidTime(timeString) {
    return !(!timeString || timeString.trim().length == 0 || !timeString.match(VALID_FORMAT_TIME_REGEXP));
}

function getTimeArray(timeString) {
    let time = timeString.split(':');
    return { hours: time[0], minutes: time[1], seconds: time[2] };
}

function getFirstRow(hours) {
    return Array(Number.parseInt(hours / 5)).fill(RED_LED).join('').padEnd(4, OFF_LED);
}

function getSecondRow(hours) {
    return Array(hours % 5).fill(RED_LED).join('').padEnd(4, OFF_LED);
}

function getThirdRow(minutes) {
    minutes = Number.parseInt(minutes / 5);
    let bufferThirdRow = new Array(11).fill(YELLOW_LED, 0, minutes).fill(OFF_LED, minutes, 11);
    bufferThirdRow[2] = bufferThirdRow[2] == YELLOW_LED ? RED_LED : OFF_LED;
    bufferThirdRow[5] = bufferThirdRow[5] == YELLOW_LED ? RED_LED : OFF_LED;
    bufferThirdRow[8] = bufferThirdRow[8] == YELLOW_LED ? RED_LED : OFF_LED;
    return bufferThirdRow.join('');
}

function getFourthRow(minutes) {
    return Array(minutes % 5).fill(YELLOW_LED).join('').padEnd(4, OFF_LED);
}

function getEvenLedFromSeconds(seconds) {
    return seconds % 2 == 0 ? YELLOW_LED : OFF_LED;
}

function getBerlinClockString(time) {
    return [getEvenLedFromSeconds(time.seconds), getFirstRow(time.hours), getSecondRow(time.hours), getThirdRow(time.minutes), getFourthRow(time.minutes)].join('\n');
}

module.exports = berlinClock;
