import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
import "./App.css";

class Scheduling extends React.Component {
  static propTypes = {
    events: PropTypes.string,
  };

  render() {
    const events = JSON.parse(this.props.events);
    return (
      <div>
        <h2>Scheduled Events:</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const wcScheduling = reactToWebComponent(Scheduling, React, ReactDOM, {
  dashStyleAttributes: true,
});

export default wcScheduling;
