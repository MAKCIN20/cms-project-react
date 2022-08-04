import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import ConnectLicenseToContent from "./ConnectLicenseToContent";

function ConnectionModal(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [licenses, setlicenses] = useState([]);
  const [licenseId, setLicenseId] = useState();

  useEffect(() => {
    getAllLicenses();
  }, []);

  const getAllLicenses = () => {
    axios.get("http://localhost:8080/licenses").then((response) => {
      setlicenses(response.data);
    });
  };

  const connectLicense = (contentId, licenseId) => {
    axios.post(
      "http://localhost:8080/contents/" +
        contentId +
        "/licenses/" +
        licenseId +
        "/add"
    );
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add License to Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Content Id</Form.Label>
              <Form.Control
                type="contentId"
                placeholder="Enter Content Id"
                autoFocus
                value={props.contentId}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Select 
              value={licenseId} aria-label="Default select example">
                {licenses.map((license, index) => {
                  return (
                    <option key={index} value={license.id}  onChange={(selected) => setLicenseId(selected.target.value)}>
                      {license.name}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Label>License Id</Form.Label>
              <Form.Control
                type="licenseId"
                placeholder="Enter License Id"
                autoFocus
                value={licenseId}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              connectLicense(props.contentId, licenseId);
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConnectionModal;
