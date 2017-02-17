import React from 'react';
import CamperList from './CamperList.js';

class LeaderTable extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
      campers: [
        {name: 'Alise', place30: 234, placeAll: 1076},
        {name: 'Bosse', place30: 204, placeAll: 1087},
        {name: 'Polly', place30: 134, placeAll: 2076},
        {name: 'Kitty Brawn', place30: 94, placeAll: 1046},
        {name: 'Mary Sheep', place30: 34, placeAll: 76},
      ]
    }
	}

	render () {
		var style = {
      		fontSize: 20,
      		border: '1px black solid',
      		width: '80%',
      		marginLeft: 'auto',
      		marginRight: 'auto',
      		marginTop: '20px'
    	};

		let styleLeft = {
			textAlign: 'left'
		}

		return (
		<table style={style}>

            <thead>
            <tr>
            	<th>#</th>
            	<th style={styleLeft}>Camper Name</th>
            	<th>Points in past 30 days</th>
            	<th>All time points</th>
            </tr>
            </thead>
            <CamperList campersList={this.state.campers} />
        </table>
        )
	}
}

export default LeaderTable;
