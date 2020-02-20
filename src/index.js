// eslint-disable-next-line no-unused-vars
import React  from "react";
import { render } from "react-dom";
// eslint-disable-next-line no-unused-vars
import App from "./App/App";

const init = () => (
	render(<App numberErrors={3} timerMinutes={5} />, document.getElementById("root"))
);

init();


