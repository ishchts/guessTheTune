/* eslint-disable no-unused-vars */
import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

// eslint-disable-next-line no-undef
it("component", () => {

	const handleClick = jest.fn();

	const wrapper = shallow(<App numberErrors={3} timerMinutes={5} onClick={handleClick} />);
  
	const startButton = wrapper.find("button");

	startButton.simulate("click", { preventDefault() {} });

	// eslint-disable-next-line no-undef
	expect(handleClick).toHaveBeenCalledTimes(1);

});