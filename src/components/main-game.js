import React from 'react';
import GuessForm from './guess-form';

export default class MainGame extends React.Component{
    constructor(props){
        super(props);
        this.state = {//declare the initial state
            resultHint:'',
            number: Math.floor((Math.random() * 100) + 1)//random number between 1 and 100
        }//end of this.state
    }//end of constructor
render(){
    return(
        <GuessForm result={this.state.resultHint}/>
    )
}
}//end of class MainGame