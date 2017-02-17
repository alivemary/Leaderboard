import React from 'react';

class CamperList extends React.Component {
	constructor (props) {
		super (props);

	}

	render () {
		var style = {
        textAlign: 'left'
    	};
    let campersList = this.props.campersList.map((camper, index) => {
      return (<tr><td>{index+1}</td><td style={style}>{camper.name}</td><td>{camper.place30}</td><td>{camper.placeAll}</td></tr>);
    });
		return (
		        <tbody>
                {campersList}
            </tbody>

        )
	}
}

export default CamperList;
