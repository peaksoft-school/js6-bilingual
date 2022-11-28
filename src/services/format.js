export function formatterQuestionType(type) {
    const str = type.split("_");
    const res = str.map((item) => item.toLowerCase()).join(" ");
    return res;
}

export function formatToMinute(hour, minute) {
    console.log("Hour", +hour);
    if (+hour > 0) {
        console.log("HI");
        return +hour * 60 + +minute;
    }
    return +minute;
}
