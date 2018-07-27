import React from 'react';
import './guess-form.css';


export default class GuessForm extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        const num = this.numberInput.value;
        this.numberInput.value='';
        this.props.handleNum(num);
    }
    render() {

    return (
        <form className='form' onSubmit={(e) => this.onSubmit(e)}>
            <input ref={input => this.numberInput = input} type="number" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off "
                placeholder="Enter your Guess" required disabled={(this.props.feedback === 'You got it!') ? true : false}/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
        </form>
    );
    };
};

