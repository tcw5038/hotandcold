import React from 'react';
import { shallow } from 'enzyme';
import ShowHint from './show-hint';

describe('<ShowHint />', () => {
    it('Renders without crashing', () => {
      shallow(<ShowHint />);
    });

    it('Uses the same hint it is given', () => {
      let testHint = 'This is a test hint';
      let wrapper = shallow(<ShowHint value={testHint} />);
      expect(wrapper.contains(testHint)).toEqual(true);
    });
});