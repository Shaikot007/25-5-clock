import React from "react";
import "./BreakLength.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

class BreakLength extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      breakString: "Break Length"
    }
  }
  render() {
    return (
      <div id="break-label">
        <p>{this.state.breakString}</p>
        <div className="BreakIcon">
          {this.props.timerPlay ? 
            <button id="break-decrement" onClick={() => this.props.handleDecrement()}>
              <FontAwesomeIcon icon={faArrowDown} />
            </button> :
            <button id="break-decrement">
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          }
          <p id="break-length">{this.props.breakLength}</p>
          {this.props.timerPlay ? 
            <button id="break-increment" onClick={() => this.props.handleIncrement()}>
              <FontAwesomeIcon icon={faArrowUp} />
            </button> :
            <button id="break-increment">
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          }
        </div>
      </div>
    );
  }
}

export default BreakLength;