import React from 'react';

export default function GuessHistory(props) {
  if (typeof props.value !== 'undefined' && props.value.length > 0)
  {
    let guesses = props.value.map((guess, index) =>
    <li key={index}>
        {guess}
    </li>
    );
    return (
      <div>
        <p>Guess History:</p>
        <ul>
          {guesses}
        </ul>
      </div>
      
    );
  }  
  else {
    return (
      <ul>
        Make your first guess!
      </ul>
    );
  }
}