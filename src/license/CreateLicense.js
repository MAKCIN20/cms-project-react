import React from "react";
import axios from "axios";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const createLicense = (name, startTime, endTime) => {
    axios.post("http://localhost:8080/licenses", { name, startTime, endTime })
    .then(window. location. reload(true));
    
  };

  return (
    <div className="card text-white bg-success mb-1">
      <div className="card-header">Add License</div>
      <div className="card-body">
        <h5 className="card-title">Creating New License</h5>
        <div className="row mb-1 mt-2">
          <div className="col-md-2">
            <input
              type="text"
              placeholder="Input License Name"
              id="message"
              name="message"
              className="form-control"
              value={name}
              onChange={(writed) => setName(writed.target.value)}
              label="name"
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              placeholder="Input License Start Time"
              id="message"
              name="message"
              className="form-control"
              value={startTime}
              onChange={(writed) => setStartTime(writed.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              placeholder="Input License End Time"
              id="message"
              name="message"
              className="form-control"
              value={endTime}
              onChange={(writed) => setEndTime(writed.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="col-md-5">
        <button
          type="submit"
          className="btn btn-dark"
          onClick={() => {
            createLicense(name, startTime, endTime);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
