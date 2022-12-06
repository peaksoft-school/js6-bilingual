export function formatterQuestionType(type) {
    const str = type.split("_");
    const res = str.map((item) => item.toLowerCase()).join(" ");
    return res;
}

export function formatToMinute(min, sec) {
    if (+min > 0) {
        return +min * 60 + +sec;
    }
    return +sec;
}

export function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
    let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`; // Return is HH : MM : SS
}
