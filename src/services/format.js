export function formatterQuestionType(type) {
    const str = type.split("_");
    const res = str.map((item) => item.toLowerCase()).join(" ");
    return res;
}
