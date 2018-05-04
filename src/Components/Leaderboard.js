import React, { Component } from 'react';
import Camper from './Camper'
import './Leaderboard.css'

class Leaderboard extends Component {
    constructor(props){
        super(props);
        this.state = {campers: []};
    }
    
    componentDidMount(){
        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(resp => resp.json())
        .then(campers => {
            this.setState({campers})
        })
    }
    
    render(){
        let campers = "Loading...";
        if(this.state.campers && this.state.campers.length > 0){
            campers = this.state.campers.map((camper, i) => < Camper key={i} index={i} camper={camper}/> );
        }
        
        
        
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
                {campers}
            </table>
        </div>
    }
}

export default Leaderboard;