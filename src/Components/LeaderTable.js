import React from 'react';
import $ from 'jquery';
import CamperList from './CamperList';

class LeaderTable extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
      campers: []
    }
	}
	getCampersList(){
		$.ajax({
			url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
			dataType: 'json',
			cache: false,
			success: function(data){
				this.setState({campers: data});
			}.bind(this),
			error: function(xhr, status, err){
				console.log(err);
			}
		});
	}

	componentDidMount(){
		this.getCampersList();
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
