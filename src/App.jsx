import React from "react";

import Accordion from "components/Accordion";

const data = [
    {
        id: "a",
        panel: "panel1",
        question: "What is Your name?",
        answer: "Elnura",
    },
    {
        id: "b",
        panel: "panel2",
        question: "What is Your name?",
        answer: "Elnura",
    },
    {
        id: "c",
        panel: "panel3",
        question: "What is Your name?",
        answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto eligendi provident dolorum et voluptatem totam recusandae dolorem? Recusandae consequuntur eveniet dolorum error ab quia odit. Sint vero optio cumque quasi?",
    },
];

const App = () => {
    return (
        <div>
            <Accordion data={data} />
        </div>
    );
};

export default App;
