import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
import "./App.css";

class Scheduling extends React.Component {
  static propTypes = {
    events: PropTypes.string,
  };

  render() {
    const roadBlocks = [
      {
        name: `Nasa Pkwy E
      Banana River Dr NE
      Cape RD
      Samuel C Philips Pkwy
      Lighthouse Rd
      Pier Rd
      A1A`,
        inUse: false,
      },
      {
        name: `Samuel C Philips Pkwy
      Lighthouse Rd
      Pier Rd
      A1A`,
        inUse: true,
      },
    ];

    return (
      <div>
        <h2>Scheduled Events:</h2>
        <RoadBlockSelector roadBlocks={roadBlocks} />
      </div>
    );
  }
}

function RoadBlockSelector({ roadBlocks: initialRoadBlocks }) {
  const [roadBlocks, setRoadBlocks] = useState(initialRoadBlocks);

  function toggleInUse(index) {
    const updatedRoadBlocks = roadBlocks.map((roadBlock, i) => {
      if (i === index) {
        return { ...roadBlock, inUse: !roadBlock.inUse };
      }
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
