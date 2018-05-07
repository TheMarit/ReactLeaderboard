import React, { Component } from 'react';
import './Camper.css'

class Camper extends Component {
    
    render(){
        let {img, username, recent, alltime} = this.props.camper;
        return (
        <tr style={ this.props.index % 2 === 0 ? {backgroundColor: '#edf3ff'} : {backgroundColor: '#D2DFF4'}}>
            <td className='numbers'>{this.props.index + 1}</td>
            <td className="CamperName"><img src={img} alt={username}/>{username}</td>
            <td className='numbers'>{recent}</td>
            <td className='numbers'>{alltime}</td>
        </tr>
        );
    }
}

export default Camper;