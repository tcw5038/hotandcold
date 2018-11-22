import React from 'react';

export default class GuessForm extends React.Component {
    
    submitGuess(event) {
        event.preventDefault();
        if(this.props.setNewGuess && this.textInput.value >=1 && this.textInput.value <=100){
            const value = this.textInput.value;
            this.props.setNewGuess(value);
            this.textInput.value = '';
        }
        else{
            this.textInput.value = '';
        }
        
	}

    render(){
        return(
            <form onSubmit={event => this.submitGuess(event)}>
                <input type="number" min={1} max={100} ref={input => this.textInput = input}/>
                <button type='submit' className='guessButton'>Guess!</button>
            </form>
        );
    }
}