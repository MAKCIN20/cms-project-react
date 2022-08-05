import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

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
    axios
      .post(
        "http://localhost:8080/contents/" +
          contentId +
          "/licenses/" +
          licenseId +
          "/add"
      )
      .then(window.location.reload(true));
  };

  return (
    <>
      <Button variant="btn btn-outline-secondary" onClick={handleShow}>
        Connect License and Content
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
                onChange={(selected) => setLicenseId(selected.target.value)}
                value={licenseId}
                aria-label="Default select example"
              >
                {licenses.map((license) => {
                  return <option value={license.id}>{license.name}</option>;
                })}
              </Form.Select>
              <Form.Label>License Id</Form.Label>
              <Form.Control
                type="licenseId"
                readOnly={true}
                placeholder={licenseId}
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
              handleClose();
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
