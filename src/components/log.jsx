import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './log.css'

// const TEST_DATA = [
//     {   "sessionType"  : "Study",
//         "sessionStart" : "12:00",
//         "sessionEnd"   : "12:25"
//     },
//     {   "sessionType"  : "Short Break",
//         "sessionStart" : "13:00",
//         "sessionEnd"   : "13:05"
//     },
//     {   "sessionType"  : "Long Break",
//         "sessionStart" : "15:00",
//         "sessionEnd"   : "15:10"
//     },
//     {   "sessionType"  : "Study",
//         "sessionStart" : "17:00",
//         "sessionEnd"   : "17:25"
//     }
// ];

//Table Header Component
const LogHeader = () => {
    return(
        <thead>
            <tr>
                <th>Session Type</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th></th>
            </tr> 
        </thead>
    )
}

//Table Content Component
const LogRow = (props) => {
    return(
        <tr>
            <td>{props.sessionType}</td>
            <td>{props.sessionStart}</td>
            <td>{props.sessionEnd}</td>
            <td><button className='delete-log-button' onClick = { () => {props.deleteLog(props.id)} }>X</button></td>
        </tr>)
}

// Log Table Component
// Dispays Logs that is stored locally using cookies.
export default class LogsTable extends Component {

    constructor(props){
        super(props);
        document.title = 'Logs';

        this.state = {
            COOKIES_KEYS : [],
            LOGS: [],
            LOGS_RENDERED : []
        }
        
        let temp = Cookies.getJSON();
        delete temp['counter'];
        this.state.COOKIES_KEYS = Object.keys(temp);

        this.state.COOKIES_KEYS.forEach(key => {
            if(this.state.LOGS_RENDERED.includes(key)){
                return;
            } else {
                this.state.LOGS.push(temp[key]);
                this.state.LOGS_RENDERED.push(key);
            }
        });

        this.deleteLog = this.deleteLog.bind(this);

    }

    deleteLog(COOKIE_KEY){

        let tempIndex = this.state.COOKIES_KEYS.indexOf(COOKIE_KEY);

        this.setState({
                    COOKIES_KEYS : this.state.COOKIES_KEYS.filter((_, index) => index !== tempIndex),
                    LOGS : this.state.LOGS.filter((_, index) => index !== tempIndex),
                    LOGS_RENDERED: this.state.LOGS_RENDERED.filter((_, index) => index !== tempIndex)
                });
        Cookies.remove(COOKIE_KEY);
    }

    render() {
        return (
            <div className='log-container'>
                <table className='log-table'>
                    {/* <caption>Past Sessions</caption> */}
                    <LogHeader/ >
                    <tbody>
                        {this.state.LOGS.map((post, index) => (
                            <LogRow
                            id={this.state.COOKIES_KEYS[index]}
                            sessionType={post.Mode}
                            sessionStart={post.Start}
                            sessionEnd={post.End}
                            deleteLog = {this.deleteLog} />
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}