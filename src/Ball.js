import React from 'react';

class Ball extends React.Component {
    render() {
        const ballStyle = {
            "position": "relative",
            "zIndex": this.props.z,
            "width": "20px",
            "height": "20px",
            "borderRadius": "20px",
            "textAlign":"center",
            "backgroundColor": "black",
            "top": -this.props.z * 50 + this.props.pos[0] - 15,
            "left": this.props.pos[1] - 15,
        }
        return (
            <div className = "ball" style={ballStyle}>
                {this.props.z}
            </div>
        )
    }
}

export default Ball;
