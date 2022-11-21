import React from "react";

import Input from "./UI/Input";

import UICard from "./UI/UICard";

function ListenSelectTest() {
    return (
        <div>
            <UICard>
                <div>
                    <span>Title</span>
                    <Input />
                    <span>Type</span>
                </div>
            </UICard>
        </div>
    );
}

export default ListenSelectTest;
