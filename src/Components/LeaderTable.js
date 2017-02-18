import React from 'react';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';
import CamperList from './CamperList';

class LeaderTable extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
      campers: [],
			sorted: true
    };
		this.handleClick1 = this.handleClick1.bind(this);
		this.handleClick2 = this.handleClick2.bind(this);
	}
	getCampersList(urlAddress){
		$.ajax({
			url: urlAddress,
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
	handleClick1(e){
		e.preventDefault();
	 	this.getCampersList('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
		$('#thirty').addClass('sorted');
		$('#alltime').removeClass('sorted');
		this.setState({sorted: true});
	}
	handleClick2(e){
		e.preventDefault();
	 	this.getCampersList('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
		$('#thirty').removeClass('sorted');
		$('#alltime').addClass('sorted');
		this.setState({sorted: false});
	}
	componentDidMount(){
		this.getCampersList('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
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

		let descSign = <FontAwesome name='sort-desc'/>;
		let title1 = "Points in past 30 days  ";
		let title2 = "All time points  ";
		let descSign1='', descSign2='';

		if (this.state.sorted)	{
			descSign1=descSign;
		}
		else {
			descSign2=descSign;
		}

		return (
		<table style={style}>
            <thead>
            <tr>
            	<th>#</th>
            	<th style={styleLeft}>Camper Name</th>
            	<th id='thirty' className='sorted' onClick={this.handleClick1}>
							{title1}{descSign1}
							</th>
							<th id='alltime' onClick={this.handleClick2}>
							{title2}{descSign2}
							</th>
            </tr>
            </thead>
            <CamperList campersList={this.state.campers} />
        </table>
        )
	}
}

export default LeaderTable;
