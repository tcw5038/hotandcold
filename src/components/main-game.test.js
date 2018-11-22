import React from 'react';
import { shallow } from 'enzyme';
import MainGame from './main-game';

describe('<MainGame />', () => {
    it('Renders without crashing', () => {
      shallow(<MainGame />);
    });

it('Gives feedback on guesses', () => {
    const wrapper = shallow(<MainGame />);
    wrapper.setState({
        num: 50
    });
    wrapper.instance().setNewGuess(1);
    expect(wrapper.state('resultHint')).toEqual('Still cold');

    wrapper.instance().setNewGuess(54);
    expect(wrapper.state('resultHint')).toEqual('Getting pretty hot!');
    expect(wrapper.state('guessHistory')).toEqual([1, 54]);

    wrapper.instance().setNewGuess(58);
    expect(wrapper.state('resultHint')).toEqual('Warm, but not quite there');
    expect(wrapper.state('guessHistory')).toEqual([1, 54, 58]);

    wrapper.instance().setNewGuess(50);
    expect(wrapper.state('resultHint')).toEqual('You guessed right!');
    expect(wrapper.state('guessHistory')).toEqual([1, 54, 58, 50]);
});

it('Does not render guesses that are out of range', () => {
    const wrapper = shallow(<MainGame />);
    wrapper.setState({
        num: 50
    });
    wrapper.instance().setNewGuess(1000);
    expect(wrapper.state('currentGuess')).toEqual(null);
    });


});
