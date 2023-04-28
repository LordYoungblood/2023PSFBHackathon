import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";
import bootstrapStyle from "bootstrap/dist/css/bootstrap.min.css?inline";
import appStyle from "./App.css?inline";

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
  const [names, setNames] = useState([]);

  useEffect(() => {
    fetchRoadBlocks().then((data) => setRoadBlocks(data));
    fetchNames().then((data) => setNames(data));
  }, []);

  async function fetchNames() {
    return [
      {
        name: "A1C Jim Bob",
        posted: false,
      },
      {
        name: "A1C Steve Smith",
        posted: false,
      },
      {
        name: "A1C John Doe",
        posted: false,
      },
      {
        name: "A1C Jane Doe",
        posted: false,
      },
      {
        name: "A1C John Smith",
        posted: false,
      },
      {
        name: "SSgt Jane Smith",
        posted: false,
      },
      {
        name: "SSgt Jimmy Hicks",
        posted: false,
      },
      {
        name: "SSgt JoJo Smith",
        posted: false,
      },
      {
        name: "SSgt Philly Doe",
        posted: false,
      },
    ];
  }

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
    setRoadBlocks(updatedRoadBlocks);
  }

  function refreshPage() {
    window.location.reload();
  }

  function handleNameSelection(roadIndex, event, dropdownIndex) {
    const selectedName = event.target.value;
    const updatedNames = names.map((nameObj) => {
      if (nameObj.name === selectedName) {
        return { ...nameObj, posted: true };
      }
      return nameObj;
    });
    setNames(updatedNames);
  }

  return (
    <div>
      <style>{bootstrapStyle}</style>
      <style>{appStyle}</style>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="table-responsive">
              <table className="table table-bordered table-hover text-white">
                <thead>
                  <tr>
                    <th>Road</th>
                    <th>Status</th>
                    <th>Defender 1</th>
                    <th>Defender 2</th>
                  </tr>
                </thead>
                <tbody>
                  {roadBlocks.map((roadBlock, index) => (
                    <tr
                      key={index}
                      className={
                        roadBlock.inUse ? "table-success" : "table-danger"
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
                      {[0, 1].map((dropdownIndex) => (
                        <td key={dropdownIndex}>
                          {roadBlock.inUse && (
                            <select
                              className="form-select"
                              aria-label="Default select example"
                              onChange={(event) =>
                                handleNameSelection(index, event, dropdownIndex)
                              }
                            >
                              <option value="">Select a name</option>
                              {names.map((nameObj, nameIndex) => (
                                <option
                                  key={nameIndex}
                                  value={nameObj.name}
                                  disabled={nameObj.posted}
                                >
                                  {nameObj.name}
                                </option>
                              ))}
                            </select>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <button type="button" class="btn btn-success" onClick={refreshPage}>
            Apply Changes
          </button>
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
