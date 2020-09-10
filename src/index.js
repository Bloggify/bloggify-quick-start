import React from "react";
import { render } from "react-dom";
import App from "components/app";

window.onload = () => {
    render(<App />, document.getElementById("layout"));
};
