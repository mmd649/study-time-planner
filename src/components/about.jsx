import React, { Component } from 'react';
import './about.css'

export default class about extends Component {

    constructor(props){
        super(props);
        
        document.title = 'About';
    }

    render() {
        return (
            <div className='about-container'>
                <h2>About</h2>
                <p>
                    Study Planer uses a time management method developed by Francesco Cirillo. This technique is called the Pomodoro Technique. 
                    The Pomodoro Technique has been used by countless apps and websites.
                </p>
            </div>
        );
    }
}