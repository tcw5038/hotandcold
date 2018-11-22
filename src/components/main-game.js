import React from 'react';
import GuessForm from './guess-form';
import ShowHint from './show-hint';
import CurrentGuess from './current-guess';
import GuessHistory from './guess-history';


export default class MainGame extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            num : Math.floor((Math.random() * 100) + 1),//returns a random number between 1 and 100
            resultHint:'',
            currentGuess: null,//remember to ask whether null works here or whether I should have something else
            guessHistory: []
        }
    }
    
    
    setNewGuess(guess){
        if(guess >= 1 && guess <= 100)
        {
            this.setState({
                currentGuess:guess
            });
            this.CheckGuess(guess);
        }
        else{
            this.setState({
                currentGuess:null
            });
        }
        
    }

    CheckGuess(guess){
        let difference = Math.abs(guess-this.state.num); //absolute value guarantees a positive number in this case
        let resultHint;
        if(difference === 0){
            resultHint = 'You guessed right!';
        }
        else if (difference <= 5){
            resultHint = 'Getting pretty hot!';
        }
        else if (difference <= 10){
            resultHint = 'Warm, but not quite there';
        }
        else{
            resultHint = 'Still cold';
        }
        this.setState({
            resultHint,
            currentGuess:guess,
            guessHistory:[...this.state.guessHistory, guess]//updates the guessHistory with the new guess
        });

        //this.updateGuessHistory(guess);//calls updateGuessHistory and passes in the current guess so that it can be added to the state
    }

    /*updateGuessHistory(guess){
        //we need to record a history of guesses and then make sure we can output them in GuessHistory
        let currentGuessHistory = this.state.guessHistory;
        currentGuessHistory.push(guess);
        this.setState({
            guessHistory:currentGuessHistory
        });
        console.log(this.state.guessHistory);
    }*/


render(){
    return(
        <div>
            <GuessForm setNewGuess={guess => this.setNewGuess(guess)}/>
            <ShowHint value={this.state.resultHint} />
            <CurrentGuess value={this.state.currentGuess} />
            <GuessHistory value={this.state.guessHistory}/>
        </div>
        
    )
}
}//end of class MainGame