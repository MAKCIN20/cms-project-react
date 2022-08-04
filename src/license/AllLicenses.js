import React, { useState } from "react";
import moment from "moment";
import axios from "axios";
import { Button } from "react-bootstrap";

function AllLicenses() {
  const [licenses, setLicenses] = useState([]);
  const [licenseName, setLicenseName] = useState("");

  const getLicenses = () => {
    axios
      .get("http://localhost:8080/licenses", {
        params: { licenseName: licenseName },
      })
      .then((response) => {
        setLicenses(response.data);
      })
  };

  return (
    <div className="container-fluid">
      <div className="row mb-5 mt-5">
        <div className="col-md-5">
          <input
            type="text"
            placeholder="Input License Name"
            id="message"
            name="message"
            className="form-control"
            value={licenseName}
            onChange={(writed) => setLicenseName(writed.target.value)}
            label="name"
          />
        </div>
        <div className="col-md-5">
          <Button
            type="submit"
            className="btn btn-dark"
            onClick={() => {
              getLicenses(licenseName);
            }}
          >
            Search License
          </Button>
          {licenses.map((license) => (
            <table class="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">License Name</th>
                  <th scope="col">License Start Time</th>
                  <th scope="col">License End Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{license.id}</th>
                  <td>{license.name}</td>
                  <td>{moment(license.startTime).format("DD.MM.YYYY")}</td>

                  <td>{moment(license.endTime).format("DD.MM.YYYY")}</td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    </div>
  );
}
export default AllLicenses;
