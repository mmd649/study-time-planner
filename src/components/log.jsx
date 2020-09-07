import React, { Component } from 'react';
import './log.css'

export default class log extends Component {
    render() {
        return (
            <div className='log-container'>
                <div className='log-items'>
                    <ul className='log-header'>
                        <li>Study / Session</li>
                        <li>Start Time</li>
                        <li>End Time</li>
                    </ul>
                    <ul className='log-details'>
                        <li>Study</li>
                        <li>Wednesday 10:32pm</li>
                        <li>Wednesday 11:00pm</li>
                    </ul>
                </div>
            </div>
        );
    }
}