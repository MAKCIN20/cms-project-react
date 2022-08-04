import React from "react";
import axios from "axios";
import { useState } from "react";
export default function ConnectLicenseToContent() {
  const [contentId, setContentId] = useState();
  const [licenseId, setLicenseId] = useState();

  const connectLicense = (contentId, licenseId) => {
    axios.post(
      "http://localhost:8080/contents/" +
        contentId +
        "/licenses/" +
        licenseId +
        "/add"
    )
    .then(window. location. reload(true));
  };

  return (
    <div className="card text-white bg-success mb-1">
      <div className="card-header">Connect License to Content</div>
      <div className="card-body">
        <h5 className="card-title">Connecting License to Content</h5>
        <div className="row mb-1 mt-2">
          <div className="col-md-2">
            <input
              type="text"
              placeholder="Input Content ID"
              id="message"
              name="message"
              className="form-control"
              value={contentId}
              onChange={(writed) => setContentId(writed.target.value)}
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
              value={licenseId}
              onChange={(writed) => setLicenseId(writed.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="col-md-5">
        <button
          type="submit"
          className="btn btn-dark"
          onClick={() => {
            connectLicense(contentId, licenseId);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
