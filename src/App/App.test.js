// eslint-disable-next-line no-unused-vars
import React from "react";
// eslint-disable-next-line no-unused-vars
import App from "./App";
import renderer from "react-test-renderer";

// eslint-disable-next-line no-undef
it("renders correctly", () => {
	const tree = renderer
		.create(<App numberErrors={3} timerMinutes={5} />)
		.toJSON();
	// eslint-disable-next-line no-undef
	expect(tree).toMatchSnapshot();
});