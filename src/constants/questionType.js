export const questionType = {
    SELECT_WORDS: "SELECT_REAL_ENGLISH_WORDS",
    DESCRIBE_IMAGE: "DESCRIBE_IMAGE",
    LISTEN_WORDS: "LISTEN_ENGLISH_WORDS",
    RESPOND: "RESPOND",
    TYPE_RECORD: "TYPE_RECORD",
    TYPE_HEAR: "TYPE_HEAR",
};

export const questionTypeList = [
    { text: "Select real English words", value: questionType.SELECT_WORDS },
    { text: "Describe image", value: questionType.DESCRIBE_IMAGE },
    { text: "Listen and English select word", value: questionType.LISTEN_WORDS },
    { text: "Type what you hear", value: questionType.TYPE_HEAR },
    { text: "Type Record saying statement you hear", value: questionType.TYPE_RECORD },
    { text: "Respond in at least N words", value: questionType.RESPOND },
];

export const QUESTION_BODY = {
    testId: 0,
    title: "string",
    duration: 0,
    statement: "string",
    passage: "string",
    numberOfReplays: 0,
    minNumberOfWords: 0,
    correctAnswer: "string",
    contentRequest: {
        contentType: "TEXT",
        content: "string",
    },
    questionType: "SELECT_REAL_ENGLISH_WORDS",
    options: [
        {
            option: "string",
            isTrue: true,
        },
    ],
};
