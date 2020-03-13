import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Audio from "../../src/components/Audio/Audio";

Enzyme.configure({ adapter: new Adapter() });

describe('Audio component', () => {
  const index = 1;
  let activeTrack = 0;
  const handleClick = jest.fn(() => activeTrack = 1);

  it('init component', () => {
    const wrapper = shallow(<Audio
      isPlayning={index === activeTrack}
      startTrack={handleClick}
    />);

    expect(wrapper.find('button.track__button--play').length).toBe(1);

    wrapper.find('button').simulate('click');

  });

  it ('play audio', () => {
    const wrapper = shallow(<Audio
      isPlayning={index === activeTrack}
      startTrack={handleClick}
    />);


    expect(wrapper.find('button.track__button--pause')).toHaveLength(1)
  })

})