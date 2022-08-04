import React from "react";
import "./Modal.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const DeleteModal = (props) => {
  return (
    <Modal show={props.showDelete} onHide={props.handleCloseDelete}>
      <Modal.Header closeButton>
        <Modal.Title>You are deleting a content</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        you are deleting content : {props.contentId}
        {props.contentLicenses}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleCloseDelete}>
          Close
        </Button>

        <Button onClick={props.onDelete}>Delete Content</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
