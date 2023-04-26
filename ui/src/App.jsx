import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

customElements.define("r2w-scheduling", wcScheduling);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <r2w-scheduling events='["Road Block 1", "Road Block 2", "Road Block 3"]'></r2w-scheduling>
    </>
  );
}

export default App;
