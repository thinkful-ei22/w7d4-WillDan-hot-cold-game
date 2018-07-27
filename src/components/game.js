import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import numGenerator from './numGenerator';

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNum: numGenerator(),
            feedback: 'Make your Guess!',
            pastGuesses: [],
            count:0
        }
    }

handleSubmit(guess){

    const difference = Math.abs(guess - this.state.randomNum);

    if (this.state.pastGuesses.includes(guess)) {
        alert('You tried this number already!');
        return;
    }

    let feedback;

    if (difference >= 50) {
        feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
        feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
        feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
        feedback = 'You\'re Hot!';
    } else {
        feedback = 'You got it!';
    }
    
    this.setState({ feedback });

    this.setState({pastGuesses: [...this.state.pastGuesses, guess]});

    this.setState({ count: this.state.count+1 });
}

componentDidMount(){
    document.getElementById('userGuess').focus();
}

resetGameState() {
    const newState = Object.assign({}, {
        randomNum: numGenerator(),
        feedback: 'Make your Guess!',
        pastGuesses: [],
        count: 0
    })
    this.setState(newState);
}

    render () {
    return (
        <div>
            <Header resetGame={() => this.resetGameState()}/>
            <div className='main-box'>
                <GuessSection sendNumToState={guess => this.handleSubmit(guess)}  feedback={ this.state.feedback } />
                <GuessCount count={ this.state.count } />
                <GuessList guesses={ this.state.pastGuesses } />
            </div>
        </div>
    );
}
}

