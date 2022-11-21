import React, { useState } from "react";

import DataInput from "./UI/DataInput";

import DropDown from "./UI/DropDownUi";

import Input from "./UI/Input";

import UICard from "./UI/UICard";

const items = [
    { text: "Describe image", value: "value1" },
    { text: "Select real English words", value: "value2" },
    { text: "Listen and select word", value: "value3" },
    { text: "Type what you hear", value: "value4" },
    { text: "Type Record saying statement you hear", value: "value5" },
    { text: "Respond in at least N words", value: "value6" },
];
function ListenSelectTest() {
    const [state, setState] = useState(items[0]);
    return (
        <UICard cardWidth="980px" cardBorderRadius="20px">
            <div>
                <span>Title</span>
                <Input />
                <DataInput />
                <span>Type</span>
                <DropDown
                    stylecss={{ width: "820px" }}
                    items={items}
                    setDropState={setState}
                    dropState={state}
                />
            </div>
        </UICard>
    );
}

export default ListenSelectTest;
