import React from 'react';

class CamperList extends React.Component {

	render () {
		let style={
        textAlign: 'left'
    	};
    let imgStyle={
      heigth: '30px',
      width: '30px',
      marginRight: '10px',
      border: '1px solid darkgrey'
    }
    let campersList=this.props.campersList.map((camper, index)=>{
      return (<tr key={index}>
                <td>{index+1}</td>
                <td style={style}>
                  <a href={'https://www.freecodecamp.com/'+camper.username}>
                    <img style={imgStyle} src={camper.img} alt="UserPic"/>{camper.username}
                  </a>
                </td>
                <td>{camper.recent}</td>
                <td>{camper.alltime}</td>
              </tr>);
    });
		return (
		        <tbody>
                {campersList}
            </tbody>

        )
	}
}


CamperList.propTypes={
    campersList: React.PropTypes.array
}
CamperList.defaultProps={
    campersList: []
}

export default CamperList;
