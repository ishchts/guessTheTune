import React from 'react';
import renderer from 'react-test-renderer';

import Audio from '../../src/components/Audio/Audio';

it('renders Audio', () => {
	const tree = renderer
		.create(<Audio/>)
		.toJSON();

	expect(tree).toMatchSnapshot();
});