import React, { Component } from 'react';
import './Camper.css'

class Camper extends Component {
    
    render(){
        return (
        <tr>
            <td>{this.props.index + 1}</td>
            <td>{this.props.camper.username}</td>
            <td className='points'>{this.props.camper.recent}</td>
            <td className='points'>{this.props.camper.alltime}</td>
        </tr>
        )
    }
}

export default Camper;