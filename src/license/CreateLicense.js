import React from "react";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function App() {
  const [name, setName] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const createLicense = (name, startTime, endTime) => {
    axios
      .post("http://localhost:8080/licenses", { name, startTime, endTime })
      .then(axios.get("http://localhost:8080/licenses"));
  };

  return (
    <>
      <Button variant="btn btn-success" onClick={handleShow}>
        Create New License
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create License</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>License Name</Form.Label>
              <Form.Control
                type="licensename"
                placeholder="Enter License Name"
                autoFocus
                value={name}
                onChange={(writed) => setName(writed.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Content Poster Url</Form.Label>
              <DatePicker
              selected={startTime}
              onChange={(date) => setStartTime(date)}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Content Video Url</Form.Label>
              <DatePicker
              selected={endTime}
              onChange={(date) => setEndTime(date)}
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
              createLicense(name, startTime.getTime(), endTime.getTime());
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
