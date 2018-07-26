import React from 'react';

import './guess-form.css';
import numGenerator from './numGenerator';


export default class GuessForm extends React.Component {

    onSubmit(e) {
        e.preventDefault();
        const num = this.numberInput.value;
        this.numberInput.value='';
        this.props.handleNum(num);
    }
    render() {

    return (
        <form onSubmit={(e) => this.onSubmit(e)}>
            <input ref={input => this.numberInput = input} type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess" />
        </form>
    );
    };
};

