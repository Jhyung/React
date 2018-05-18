import React, { Component } from 'react';
import './App.css';
import Board from './Board.js';

let doIntervalThing;
const PI = 3.141592;

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        ballStart: false,
        pos: [Math.random() * 300 + 15, Math.random() * 300 + 15],
        theta: Math.random() * PI,
    }
  }

  action = () => {
    const checkStart = this.state.ballStart
    this.setState({
        ballStart: !checkStart,
    });
    this.doInterval(!checkStart);
  }

  doInterval = (props) => {
    if(props) { //setInterval: 일정시간마다 반복실행
      doIntervalThing = setInterval(() => {this.moveBall(this.state.pos, this.state.theta)}, 20);
    }
    else { //clearInterval: 타이머 중단
      clearInterval(doIntervalThing);
    }
  }

  moveBall = (pos, theta) => {
    let nextPos = pos;
    const v = 5;
    let delta = [Math.cos(theta), Math.sin(theta)]
    this.checkWall(nextPos, theta, delta);
  }

  checkWall = (pos, theta, delta) => {
    let nextPos = pos;
    let nextTheta = theta;
    let nextDelta = delta;

    if(pos[1]<=15){//1
      console.log("pos : "+pos+" theta : "+theta+" wall : 1");

      nextDelta[1] *= -1;
      if(theta <= 3/2 * PI)
        nextTheta = 3/2 * PI - theta;
      else if(theta >= PI)
        nextTheta = 2 * PI - theta;
    }
    else if(pos[0] <= 15){//2
      console.log("pos : "+pos+" theta : "+theta+" wall : 2");

      nextDelta[0] *= -1;
      if(theta >= PI)
        nextTheta = 3 * PI - theta;
      else if(theta >= PI/2)
        nextTheta = PI - theta;
    }
    else if(pos[1] >= 315){//3
      console.log("pos : "+pos+" theta : "+theta+" wall : 3");

      nextDelta[1] *= -1;
      if(theta >= PI/2)
        nextTheta = 2 * PI - theta;
      else if(theta <= PI/2)
        nextTheta = 5/2 * PI - theta;
    }
    else if(pos[0] >= 315){//4
      console.log("pos : "+pos+" theta : "+theta+" wall : 4");

      nextDelta[0] *= -1;
      if(theta >= 3/2 * PI)
        nextTheta = -1/2 * PI + theta;
      else if(theta <= PI/2)
        nextTheta = theta - PI;
    }

    nextPos[0] += nextDelta[0];
    nextPos[1] += nextDelta[1];
    this.setState({
      pos: nextPos,
      theta: nextTheta,
    });
  }

  render() {
    const start = this.state.ballStart;
    return (
      <div className = "App">
        <Board start = {start} ballPos = {this.state.pos}/>
        <button onClick = {this.action}> {start ? "started" :"start!"} </button>
      </div>
    );
  }
}

export default App;
