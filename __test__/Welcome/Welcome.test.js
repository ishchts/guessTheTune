import React from "react";
import renderer from "react-test-renderer";


import Welcome from "../../src/components/Welcome/Welcome";

test("render Welcome", () => {
	const tree = renderer.create(<Welcome timerMinutes={5} numberErrors={3} />).toJSON();

	expect(tree).toMatchSnapshot();
});

