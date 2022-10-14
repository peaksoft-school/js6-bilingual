import React from "react";

import ImagePicker from "components/UI/ImagePicker";

const App = () => {
    return (
        <div>
            <ImagePicker getImages={(img) => console.log(img)} />
        </div>
    );
};

export default App;
