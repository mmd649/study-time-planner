import React, { Component } from 'react';
import './timer.css';

const DEFAULT_MINUTES = 25;
const DEFAULT_SECONDS = 0;
const SHORT_BREAK = 5; //Minutes
const LONG_BREAK = 10; //Minutes

/*
    The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. 
    The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks.

    There are six steps in the original technique:
        1. Decide on the task to be done.
        2. Set the pomodoro timer (traditionally to 25 minutes).
        3. Work on the task.
        4. End work when the timer rings and put a checkmark on a piece of paper.
        5. If you have fewer than four checkmarks, take a short break (3–5 minutes) and then return to step 2; otherwise continue to step 6.
        6. After four pomodoros, take a longer break (15–30 minutes), reset your checkmark count to zero, then go to step 1

        https://en.wikipedia.org/wiki/Pomodoro_Technique
*/

export default class timer extends Component {

    constructor(props){
        super(props);

        this.state = {
            minutes : DEFAULT_MINUTES,
            seconds : DEFAULT_SECONDS,
            intervalID : null,
            mode: 'study'
        }
    }

    startTimer(){

        const TOTAL_SECONDS = (this.state.minutes * 60) + this.state.seconds;

        console.log(TOTAL_SECONDS);

        let counter = 0;

        this.state.intervalID = setInterval(() =>{

            if(this.state.minutes !== 0 || this.state.seconds !== 0){

                if(this.state.seconds === 60){
                    this.setState({minutes: this.state.minutes - 1});
                }

                if(this.state.seconds === 0){
                    this.setState({minutes: this.state.minutes - 1, seconds: 60});
                }

                this.setState({seconds: this.state.seconds - 1});
            }
            console.log(counter);

            counter += 1;

            if(counter === TOTAL_SECONDS) {
                console.log('END');
                clearInterval(this.state.intervalID);
            }

        }, 1000);
        
    }

    pauseTimer(){
        this.setState({minutes : this.state.minutes});
        clearInterval(this.state.intervalID);
    }

    resetTimer(){

        if(this.state.mode === 'study'){
            this.setState({minutes: DEFAULT_MINUTES, seconds: DEFAULT_SECONDS});
        } else if(this.state.mode === 'short_break'){
            this.setState({minutes: SHORT_BREAK, seconds: DEFAULT_SECONDS});
        } else {
            this.setState({minutes: LONG_BREAK, seconds: DEFAULT_SECONDS});
        }
        clearInterval(this.state.intervalID);
    }

    shortBreak(){
        this.setState({mode: 'short_break'});
        this.setState({minutes: SHORT_BREAK, seconds: DEFAULT_SECONDS})
        clearInterval(this.state.intervalID);
    }

    longBreak(){
        this.setState({mode: 'long_break'});
        this.setState({minutes: LONG_BREAK, seconds: DEFAULT_SECONDS})
        clearInterval(this.state.intervalID);
    }

    render() {
        return (
            <div className='timer-container'>

                <div>
                    <ul className='timer-mode'>
                        <li><button onClick = { () => this.setState({minutes: DEFAULT_MINUTES, seconds: DEFAULT_SECONDS, mode: 'study'}) }>Study</button></li>
                        <li><button onClick = { () => this.shortBreak() }>Short Break</button></li>
                        <li><button onClick = { () => this.longBreak() }>Long Break</button></li>
                    </ul>
                </div>

                <div>
                    <p className='timer'>{this.state.minutes.toLocaleString('en-GB', {minimumIntegerDigits : 2})}:{(this.state.seconds % 60).toLocaleString('en-GB', {minimumIntegerDigits : 2})}</p>
                </div>
                
                <div className='timer-controls'>
                    <ul>
                        <li><button onClick = { () => { this.startTimer() }}>Start</button></li>
                        <li><button onClick = { () => { this.pauseTimer() } }>Stop</button></li>
                        <li><button onClick = { () => { this.resetTimer() } }>Reset</button></li>
                    </ul>
                </div>

            </div>
        );
    }
}