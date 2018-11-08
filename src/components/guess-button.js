import React from 'react';

export default function GuessButton(props) {
    return (
    <button type='submit' className='guessButton' onClick={props.displayGuessResult}>Guess!</button>
  );
}

//SHOULD BE DONE