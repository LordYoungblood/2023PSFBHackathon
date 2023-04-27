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
      { name: "Road Block 1", inUse: false },
      { name: "Road Block 2", inUse: true },
    ];

    return (
      <div>
        <h2>Scheduled Events:</h2>
        <RoadBlockSelector roadBlocks={roadBlocks} />
      </div>
    );
  }
}

function RoadBlockSelector({ roadBlocks }) {
  const [selectedRoadBlock, setSelectedRoadBlock] = useState(roadBlocks[0]);

  function toggleInUse() {
    const updatedRoadBlock = {
      ...selectedRoadBlock,
      inUse: !selectedRoadBlock.inUse,
    };
    const index = roadBlocks.findIndex(
      (roadBlock) => roadBlock.name === selectedRoadBlock.name
    );
    roadBlocks[index] = updatedRoadBlock;
    setSelectedRoadBlock(updatedRoadBlock);
  }

  return (
    <>
      <select
        value={selectedRoadBlock.name}
        onChange={(e) =>
          setSelectedRoadBlock(
            roadBlocks.find((roadBlock) => roadBlock.name === e.target.value)
          )
        }
      >
        {roadBlocks.map((roadBlock, index) => (
          <option
            key={index}
            value={roadBlock.name}
            style={{
              backgroundColor: roadBlock.inUse ? "green" : "red",
            }}
          >
            {roadBlock.name}
          </option>
        ))}
      </select>
      <button onClick={toggleInUse}>
        {selectedRoadBlock.inUse ? "Mark not in use" : "Mark in use"}
      </button>
    </>
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
