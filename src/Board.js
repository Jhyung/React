import React from 'react';
import Ball from './Ball.js';

class Board extends React.Component{
    render() {
        const boardStyle = {
            "width": "320px",
            "height": "320px",
            "backgroundColor": "blue",
        }
        return (
            <div className = "board" style = {boardStyle}>
                <Ball z = "0" move = {this.props.start} func = {this.props.func} pos = {this.props.ballPos}/>
            </div>
        );
    }
}

export default Board;
