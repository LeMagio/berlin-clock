const DEFAULT_VALUE = "O\nOOOO\nOOOO\nOOOOOOOOOOO\nOOOO";
const VALID_FORMAT_TIME_REGEXP=/^(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])$/;

function berlinClock(timeString) {
    if(!isValidTime(timeString)){ return DEFAULT_VALUE;}
    return getBerlinClockString(getTimeArray(timeString));    
}

function isValidTime(timeString){
 return !(!timeString || timeString.trim().length == 0 || !timeString.match(VALID_FORMAT_TIME_REGEXP));
}

function getTimeArray(timeString){
  let time = timeString.split(':');
  return {hours : time[0], minutes : time[1], seconds : time[2]};  
}

function getFirstRow(hours){
   return Array(Number.parseInt(hours / 5)).fill('R').join('').padEnd(4, 'O');
}

function getSecondRow(hours){
    return Array(hours % 5).fill('R').join('').padEnd(4, 'O');
}

function getThirdRow(minutes){
    minutes = Number.parseInt(minutes / 5);
    let bufferThirdRow = new Array(11).fill('Y',0,minutes).fill('O',minutes,11); 
    bufferThirdRow[2] = bufferThirdRow[2] == 'Y' ? 'R' : 'O';
    bufferThirdRow[5] = bufferThirdRow[5] == 'Y' ? 'R' : 'O';
    bufferThirdRow[8] = bufferThirdRow[8] == 'Y' ? 'R' : 'O';    
    return bufferThirdRow.join('');
}

function getFourthRow(minutes){
    return Array(minutes % 5).fill('Y').join('').padEnd(4, 'O');
}

function getWatchSecond(seconds){
    return seconds % 2 == 0 ? 'Y' : 'O';
}

function getBerlinClockString(time){
  return [getWatchSecond(time.seconds), getFirstRow(time.hours), getSecondRow(time.hours), getThirdRow(time.minutes), getFourthRow(time.minutes)].join('\n');
}

module.exports = berlinClock;
