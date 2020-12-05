import React from "react";
import "./Timer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faRecycle } from "@fortawesome/free-solid-svg-icons";

class Timer extends React.Component {
  render() {
    return (
      <div className="Timer">
        <div className="TimerWrapper" style={parseInt(this.props.clockify()) < 1 ? {color: "red"} : {color: "white"}}>
          <p id="timer-label">{this.props.timerLabel}</p>
          <div id="time-left">{this.props.clockify()}</div>
        </div>
        <div className="TimerControl">
          <div className="PlayOrPause" onClick={() => this.props.playOrPause()}>
            {this.props.timerPlay ? 
              <button id="start_stop" onClick={this.props.play}>
                <FontAwesomeIcon icon={faPlay} />
              </button> :
              <button id="start_stop" onClick={this.props.pause}>
                <FontAwesomeIcon icon={faPause} />
              </button>
            }
          </div>
          <button id="reset" onClick={() => this.props.reset()}>
            <FontAwesomeIcon icon={faRecycle} />
          </button>
        </div>
      </div>
    );
  }
}

export default Timer;