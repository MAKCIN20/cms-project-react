import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import moment from "moment";

const AllOfLicenses = (props) => {
  return (
    <Modal show={props.showLicense} onHide={props.handleCloseLicense}>
      <Modal.Header closeButton>
        <Modal.Title>Licenses</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Licenses from content: {props.content.id} <br />
        {props.content.licenses.map((license) => (
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
                <td>{moment(license.startTime).format("DD/MM/YYYY")} </td>

                <td>{license.endTime}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={props.handleCloseLicense}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
