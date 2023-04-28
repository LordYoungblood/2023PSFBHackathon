import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

class Scheduling extends React.Component {
  static propTypes = {
    events: PropTypes.string,
    proxy: PropTypes.string,
  };

  render() {
    return (
      <div className="wrapper">
        <h2>Road Blocks</h2>
        <RoadBlockSelector proxy={this.props.proxy} />
      </div>
    );
  }
}

function RoadBlockSelector(props) {
  const [roadBlocks, setRoadBlocks] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetchRoadBlocks().then((data) => setRoadBlocks(data));
  }, []);

  async function fetchRoadBlocks() {
    const response = await fetch(`${props.proxy}/road/status`);
    const data = await response.json();
    return data;
  }

  function toggleInUse(index) {
    const updatedRoadBlocks = roadBlocks.map((roadBlock, i) => {
      if (i === index) {
        return { ...roadBlock, inUse: !roadBlock.inUse };
      }
      return roadBlock;
    });
    setRoadBlocks(updatedRoadBlocks);

    for (const roadBlock of updatedRoadBlocks) {
      fetch(`${props.proxy}/road/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ road: roadBlock.road, inUse: roadBlock.inUse }),
      });
    }
  }

  function refreshPage() {
    window.location.reload();
  }

  function handleCheckboxChange(event) {
    setShowDropdown(event.target.checked);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="table-responsive">
            <table className="table table-bordered table-hover text-white">
              <thead>
                <tr>
                  <th>Road</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {roadBlocks.map((roadBlock, index) => (
                  <tr
                    key={index}
                    className={
                      roadBlock.inUse ? "table-danger" : "table-success"
                    }
                  >
                    <td>{roadBlock.road}</td>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={`roadBlock-${index}`}
                          checked={roadBlock.inUse}
                          onChange={() => toggleInUse(index)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <button type="submit" onClick={refreshPage}>
          Apply Changes
        </button>
      </div>
    </div>
  );
}

RoadBlockSelector.propTypes = {
  roadBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      road: PropTypes.string.isRequired,
      inUse: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

const wcScheduling = reactToWebComponent(Scheduling, React, ReactDOM, {
  dashStyleAttributes: true,
});

export default wcScheduling;
