import React, { Component } from 'react';
import './Leaderboard.css'

class Leaderboard extends Component {
    constructor(props){
        super(props);
        this.state = {campers: []};
    }
    
    render(){
        return <div className="leaderBoard">
            <div className="header">
                <img src="https://s3.amazonaws.com/freecodecamp/freecodecamp_logo.svg" alt="FreeCodeCamp Logo"/>
                <h1>Leaderboard</h1>
            </div>
            <table>
                <tr>
                    <th>#</th>
                    <th>Camper Name</th>
                    <th>Points in past 30 days</th>
                    <th>Alltime Points</th>
                </tr>
            </table>
        </div>
    }
}

export default Leaderboard;