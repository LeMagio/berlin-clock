function berlinClock(time) {
    if (!time || time.trim().length == 0 || !time.match(/^(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])$/))
        return "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO";
    let { 0: hours, 1: minutes, 2: seconds } = time.split(':');

    let hoursByFive = Number.parseInt(hours / 5);
    let hoursUnit = hours % 5;
    let minuteUnits = minutes % 5;

    let minuteIsEven = minutes % 2 == 0 ? 'O' : 'Y';

    let firstRow = Array(hoursByFive).fill('R').join('').padEnd(4, 'O');
    let secondRow = Array(hoursUnit).fill('R').join('').padEnd(4, 'O');
    let fourthRow = Array(minuteUnits).fill('Y').join('').padEnd(4, 'O');

    let formatClock = [minuteIsEven, firstRow, secondRow, 'OOOOOOOOOOO', fourthRow].join('\n');

    return formatClock;
}
