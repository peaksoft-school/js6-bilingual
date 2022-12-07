import React from "react";

import ClientContainer from "components/UI/ClientContainer";
import UICard from "components/UI/UICard";

function SelectEnglishWords() {
    return (
        <div>
            <ClientContainer>
                <UICard
                    cardWidth="900px"
                    cardBorderRadius="10px"
                    cardBoxShadow="0px 4px 39px -5px rgba(196, 196, 196, 0.6)">
                    <div>
                        <p>select the real English words in this list</p>
                    </div>
                    <div>test</div>
                </UICard>
            </ClientContainer>
        </div>
    );
}

export default SelectEnglishWords;
