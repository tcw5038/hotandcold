import React from 'react';
import { shallow } from 'enzyme';
import GuessHistory from './guess-history';

describe('<GuessHistory />', () => {
    it('Renders without crashing', () => {
      shallow(<GuessHistory />);
    });
});