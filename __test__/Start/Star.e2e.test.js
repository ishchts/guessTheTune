import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const Star = ({ selected=false, onClick=f=>f }) =>
	<div className={(selected) ? 'star selected' : 'star'}
		onClick={onClick}>
	</div>;


it('renders default star', () => {
	expect(
		shallow(<Star />)
			.find('div.star')
			.length
	).toBe(1);
});


it('renders selected stars', () => {
	expect(
		shallow(<Star selected={true} />)
			.find('div.selected.star')
			.length
	).toBe(1);
});

it('invokes onClick', () => {
	const _click = jest.fn();
	shallow(<Star onClick={_click} />)
		.find('div.star')
		.simulate('click');
	expect(_click).toBeCalled();
});
