import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
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
    // const response = await fetch(`${props.proxy}/road/status`);
    // const data = await response.json();
    // return data;
    const roadNames = [
      {
        road: "Nasa_Pkwy_E_Plane.002",
        inUse: false,
      },
      {
        road: "Banana_River_Dr_NE_Plane.011",
        inUse: false,
      },
      {
        road: "Cape_Rd_Plane.009",
        inUse: false,
      },
      {
        road: "Samuel_C_Philips_Pkwy_Mesh",
        inUse: false,
      },
      {
        road: "Lighthouse_Rd_Plane.005",
        inUse: false,
      },
      {
        road: "Pier_Rd_Plane.001",
        inUse: false,
      },
      {
        road: "A1A_Plane.004",
        inUse: false,
      },
    ];
    return roadNames;
  }

  function toggleInUse(index) {
    const updatedRoadBlocks = roadBlocks.map((roadBlock, i) => {
      if (i === index) {
        return { ...roadBlock, inUse: !roadBlock.inUse };
      }
      return roadBlock;
    });
    // Uncomment the following lines when connecting to the API.
    // for (const update of updatedRoadBlocks) {
    //   fetch(`${props.proxy}/road/status`, {
    //     method: "POST",
    //     body: updatedRoadBlocks[0],
    //   });
    // }
    setRoadBlocks(updatedRoadBlocks);
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
                      <input
                        className="road-block-checkbox"
                        type="checkbox"
                        checked={roadBlock.inUse}
                        onChange={() => toggleInUse(index)}
                        id={`roadBlock-${index}`}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
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
