import React from 'react';
import Enzime, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {questions} from '../../src/mocks/questions';
import GameGenre from '../../src/components/GameGenre/GameGenre';

Enzime.configure({ adapter: new Adapter });

const [first] = questions;

const {
	type,
	title,
	rightAnswer,
	possibleErrors,
	timeline,
	answers,
} = first;

it('test game genge component', () => {
	const hadnleClick = jest.fn();

	const app = shallow(
		<GameGenre
			type={type}
			title={title}
			rightAnswer={rightAnswer}
			possibleErrors={possibleErrors}
			timeline={timeline}
			answers={answers}
			increment={hadnleClick}
		/>
	);

	app.find('button.game__submit').simulate('click');

	expect(hadnleClick).toHaveBeenCalledTimes(1);

});