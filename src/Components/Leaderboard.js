import React, { Component } from 'react';
import Camper from './Camper';
import './Leaderboard.css';

class Leaderboard extends Component {
    constructor(props){
        super(props);
        this.state = {campers: [], alltime: false};
        this.alltime = this.alltime.bind(this);
        this.recent = this.recent.bind(this);
    }
    
    componentDidMount(){
        this.recent();
    }
    
    alltime(){
        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(resp => resp.json())
        .then(campers => {
            this.setState({campers, alltime: true});
        });
    }
    recent(){
        fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
        .then(resp => resp.json())
        .then(campers => {
            this.setState({campers, alltime: false});
        });
    }
    render(){
        let thRecent = this.state.alltime ? <th><a onClick={this.recent}>Points in past 30 days</a></th> : <th>Points in past 30 days <span>▼</span></th>;
        let thAlltime = this.state.alltime ? <th>Alltime Points <span>▼</span></th> : <th><a onClick={this.alltime}>Alltime Points</a></th>;
        
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
                    {thRecent}
                    {thAlltime}
                </tr>
                {campers}
            </table>
        </div>;
    }
}

export default Leaderboard;