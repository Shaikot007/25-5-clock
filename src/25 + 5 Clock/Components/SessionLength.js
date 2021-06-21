import React from "react";
import "./SessionLength.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

class SessionLength extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionString: "Session Length"
    }
  }
  render() {
    return (
      <div id="session-label">
        <p>{this.state.sessionString}</p>
        <div className="SessionIcon">
          {this.props.timerPlay ?
            <button id="session-decrement" onClick={() => this.props.handleDecrement()}>
              <FontAwesomeIcon icon={faArrowDown} />
            </button> :
            <button id="session-decrement">
              <FontAwesomeIcon icon={faArrowDown} />
            </button>
          }
          <p id="session-length">{this.props.sessionLength}</p>
          {this.props.timerPlay ?
            <button id="session-increment" onClick={() => this.props.handleIncrement()}>
              <FontAwesomeIcon icon={faArrowUp} />
            </button> :
            <button id="session-increment">
              <FontAwesomeIcon icon={faArrowUp} />
            </button>
          }
        </div>
      </div>
    );
  }
};

export default SessionLength;
