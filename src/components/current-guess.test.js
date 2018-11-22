import React from 'react';
import { shallow } from 'enzyme';
import CurrentGuess from './current-guess';

describe('<CurrentGuess />', () => {
    it('Renders without crashing', () => {
      shallow(<CurrentGuess />);
    });
    
    it('Renders the current guess', () => {
        const currentGuess = 50;
        const wrapper = shallow(<CurrentGuess value={currentGuess}/>);
        expect(wrapper.text()).toEqual('50');
    });
    
});