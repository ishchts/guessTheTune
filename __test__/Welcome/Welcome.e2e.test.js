import React from 'react';
import Enzime, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Welcome from '../../src/components/Welcome/Welcome';

Enzime.configure({ adapter: new Adapter() });

it('test button click', () => {
	const handleClick = jest.fn();

	const app = shallow(<Welcome
		timerMinutes={5}
		numberErrors={3}
		nextQuestion={handleClick}
	/>);

	const startButton = app.find('button.welcome__button');

	startButton.simulate('click');

	expect(handleClick).toHaveBeenCalledTimes(1);

});