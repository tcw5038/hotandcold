import React from 'react';
import GuessButton from './guess-button';
import ShowGuess from './show-guess';

export default class GuessForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            num : Math.floor((Math.random() * 100) + 1),//returns a random number between 1 and 100
            resultHint:'',
            currentGuess: 1
            //enter our state driven elements here
        }//end of initial state
    }//end of constructor
    
    setNewGuess(event){
        event.preventDefault();
        const guess = this.textInput.value;
        console.log(guess);
        this.setState({
            currentGuess:guess
        });
        this.CheckGuess(guess);
    }
    //let resultHint;
    CheckGuess(guess){
        //guess = this.state.currentGuess;
        console.log(guess);
        let difference = Math.abs(guess-this.state.num); //absolute value guarantees a positive number in this case
        let resultHint;
        if(difference === 0){
            resultHint = 'You guessed right!';
        }
        else if (difference <= 5 && difference > 0){
            resultHint = 'Getting pretty hot!';
        }
        else if (difference > 5 && difference <= 10){
            resultHint = 'Warm, but not quite there';
        }
        else{
            resultHint = 'Still cold';
        }
        console.log(resultHint);
        this.setState({
            resultHint,
            currentGuess:guess
        });
    }//end of CheckGuess

    render(){
        return(
            <form onSubmit={event => this.setNewGuess(event)}>
                <input type="number" min={1} max={100} ref={input => this.textInput = input}/>
                <GuessButton/>
                <ShowGuess value={this.state.resultHint} />
                <h2>{this.state.currentGuess}</h2>
                 
            </form>

        );

    }
    

   

}//end of component