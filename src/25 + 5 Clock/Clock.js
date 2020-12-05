import React from "react";
import "./Clock.css";
import BreakLength from "./Components/BreakLength";
import SessionLength from "./Components/SessionLength";
import Timer from "./Components/Timer";
import Audio from "./Audio/beep.mp3";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerLabel: "Session",
      timer: 25 * 60,
      timerPlay: true
    }
    this.audio = React.createRef();
  }
  
  //For break length decrement
  breakLengthDecrement = () => {
    if(this.state.breakLength <= 1) {
      this.setState({
        breakLength: 1
      });
    }
    else {
      this.setState({
        breakLength: this.state.breakLength - 1
      });
    }
  }
  //For break length increment
  breakLengthIncrement = () => {
    if(this.state.breakLength >= 60) {
      this.setState({
        breakLength: 60
      });
    }
    else {
      this.setState({
        breakLength: this.state.breakLength + 1
      });
    }
  }
  //For session length decrement
  sessionLengthDecrement = () => {
    if(this.state.sessionLength <= 1) {
      this.setState({
        sessionLength: 1,
        timer: 60
      });
    }
    else {
      this.setState({
        sessionLength: this.state.sessionLength - 1,
        timer: this.state.timer - 60
      });
    }
  }
  //For session length increment
  sessionLengthIncrement = () => {
    if(this.state.sessionLength >= 60) {
      this.setState({
        sessionLength: 60,
        timer: 3600
      });
    }
    else {
      this.setState({
        sessionLength: this.state.sessionLength + 1,
        timer: this.state.timer + 60
      });
    }
  }
  //For toggle clock time play or pause
  togglePlayOrPause = () => {
    this.setState({
      timerPlay: !this.state.timerPlay
    })
  }
  //For clock time play
  handlePlay = () => {
    this.clockInterval = setInterval(() => {
      if(this.state.timer === 0) {
        this.setState({
          timerLabel: this.state.timerLabel === "Session" ? "Break" : "Session",
          timer: this.state.timerLabel === "Session" ? this.state.breakLength * 60 : this.state.sessionLength * 60
        });
      }
      else {
        this.setState({
          timer: this.state.timer - 1
        });
      }
    }, 1000);
  }
  //For clock time pause
  handlePause = () => {
    clearInterval(this.clockInterval);
  }
  //For clock time and alarm
  clockify = () => {
    let min = Math.floor(this.state.timer / 60);
    let sec = this.state.timer - min * 60;
    const minutes = min < 10 ? "0" + min : min;
    const seconds = sec < 10 ? "0" + sec : sec;
    if(minutes === "00" && seconds === "00") {
      this.audio.play();
    }
    return minutes + ":" + seconds;
  }
  //For reset break length, session length, clock time and alarm
  handleReset = () => {
    clearInterval(this.clockInterval);
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      timerLabel: "Session",
      timer: 25 * 60,
      timerPlay: true
    })
    this.audio.pause();
    this.audio.currentTime = 0;
  }
  render() {
    return (
      <div className="Clock">
        <header>
          <h1>25 + 5 Clock</h1>
        </header>
        <section className="BreakSessionLabel">
          <BreakLength 
            breakLength={this.state.breakLength}
            handleDecrement={this.breakLengthDecrement} 
            handleIncrement={this.breakLengthIncrement}
            timerPlay={this.state.timerPlay}
            playOrPause={this.togglePlayOrPause}
          />
          <SessionLength 
            sessionLength={this.state.sessionLength}
            handleDecrement={this.sessionLengthDecrement} 
            handleIncrement={this.sessionLengthIncrement}
            timerPlay={this.state.timerPlay}
            playOrPause={this.togglePlayOrPause}
          />
        </section>
        <section className="TimerLabel">
          <Timer 
            timerLabel={this.state.timerLabel}
            timer={this.state.timer}
            clockify={this.clockify}
            playOrPause={this.togglePlayOrPause}
            timerPlay={this.state.timerPlay}
            play={this.handlePlay}
            pause={this.handlePause}
            reset={this.handleReset}
          />  
          <audio id="beep" ref={(audio) => {this.audio = audio}} src={Audio} />
        </section>
        <footer>
          <p>Made by <a href="https://github.com/Shaikot007" target="_blank" rel="noopener noreferrer">Shaikot</a></p>
        </footer>
      </div>
    );
  }
}

export default Clock;