import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [posterUrl, setPosterUrl] = useState();
  const [videoUrl, setVideoUrl] = useState();

  const createContent = (name, posterUrl, videoUrl) => {
    axios
      .post("http://localhost:8080/contents", { name, posterUrl, videoUrl })
      .then(window.location.reload(true));
  };

  return (
    <>
      <Button variant="btn btn-success" onClick={handleShow}>
        Create New Content
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Content Name</Form.Label>
              <Form.Control
                type="contentname"
                placeholder="Enter Content Name"
                autoFocus
                value={name}
                onChange={(writed) => setName(writed.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Content Poster Url</Form.Label>
              <Form.Control
                type="content posterURll"
                placeholder="Enter Content Poster Url"
                autoFocus
                value={posterUrl}
                onChange={(writed) => setPosterUrl(writed.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Content Video Url</Form.Label>
              <Form.Control
                type="contentId"
                placeholder="Enter Content Video Url"
                autoFocus
                value={videoUrl}
                onChange={(writed) => setVideoUrl(writed.target.value)}
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
              createContent(name,posterUrl,videoUrl);
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
