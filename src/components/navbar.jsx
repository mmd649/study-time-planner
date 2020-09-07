import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './navbar.css'

export default class navbar extends Component {
    render() {
        return (
            <header>
                <Link to='/'><a className='name'>Study Planner</a></Link>
                <nav>
                    <ul className='nav-links' href='#'>
                        <Link to='/log'>
                            <li>Log</li>
                        </Link>
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        );
    }
}
