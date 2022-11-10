import React from "react";

import Header from "components/LandingPage/Header";
import UICard from "components/UI/UICard";
import { ButtonUi } from "components/UI";

function AdminTest() {
    return (
        <div>
            <Header />
            <UICard>
                <ButtonUi>+ ADD NEW TEST</ButtonUi>
            </UICard>
        </div>
    );
}

export default AdminTest;
