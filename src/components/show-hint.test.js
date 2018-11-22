import React from 'react';
import { shallow } from 'enzyme';
import ShowHint from './show-hint';

describe('<ShowHint />', () => {
    it('Renders without crashing', () => {
      shallow(<ShowHint />);
    });
});