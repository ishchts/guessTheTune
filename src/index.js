import React  from "react";
import { render } from "react-dom";
import App from "./App/App";

import { questions, gameSettings } from "./mocks/questions";

const init = (questions, gameSettings) => {
	const {
		possibleErrors,
		timeline,
	} = gameSettings;

	return (
		render(<App questions={questions} numberErrors={possibleErrors} timerMinutes={timeline} />, document.getElementById("root"))
	);
};

init(
	questions,
	gameSettings
);


