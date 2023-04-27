import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
import "./App.css";

class Scheduling extends React.Component {
  static propTypes = {
    events: PropTypes.string,
    proxy: PropTypes.string,
  };
  render() {
    const roadNames = [];

    return (
      <div>
        <h2>Scheduled Events:</h2>
        <RoadBlockSelector proxy={this.props.proxy} />
      </div>
    );
  }
}

function RoadBlockSelector(props) {
  const [roadBlocks, setRoadBlocks] = useState([]);

  useEffect(() => {
    fetchRoadBlocks().then((data) => setRoadBlocks(data));
  }, []);

  async function fetchRoadBlocks() {
    const response = await fetch(`/${props.proxy}/road/status`);
    const data = await response.json();
    return data;
  }

  function toggleInUse(index) {
    const updatedRoadBlocks = roadBlocks.map((roadBlock, i) => {
      if (i === index) {
        return { ...roadBlock, inUse: !roadBlock.inUse };
      }
      fetch(`/${props.proxy}/road/status`, {
        method: "POST",
        body: updatedRoadBlocks[0],
      });
      return roadBlock;
    });
    setRoadBlocks(updatedRoadBlocks);
  }

  return (
    <div>
      {roadBlocks.map((roadBlock, index) => (
        <div key={index}>
          <label
            style={{
              backgroundColor: roadBlock.inUse ? "red" : "green",
              padding: "5px",
              display: "inline-block",
            }}
          >
            <input
              type="checkbox"
              checked={roadBlock.inUse}
              onChange={() => toggleInUse(index)}
            />
            {roadBlock.name}
          </label>
        </div>
      ))}
    </div>
  );
}

RoadBlockSelector.propTypes = {
  roadBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      inUse: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

const wcScheduling = reactToWebComponent(Scheduling, React, ReactDOM, {
  dashStyleAttributes: true,
});

export default wcScheduling;
