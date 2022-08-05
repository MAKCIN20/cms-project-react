import { useRef } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FcCheckmark, FcHighPriority } from "react-icons/fc";
import LicenseModal from "./LicenseModal";
import DeleteModal from "./DeleteModal";
import Button from "react-bootstrap/esm/Button";
import ConnectionModal from "./ConnectionModal";

function ContentTable() {
  const [contents, setContents] = useState([]);
  const [contentName, setContentName] = useState("");
  const inputRef = useRef(null);
  const [contentId, setContentId] = useState();
  const [selectedcontent, setSelectedContent] = useState({});

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const [showLicense, setShowLicense] = useState(false);
  const handleCloseLicense = () => setShowLicense(false);
  const handleShowLicense = () => setShowLicense(true);
  const [showConnect, setShowConnect] = useState(false);
  const handleCloseConnect = () => setShowConnect(false);
  const handleShowConnect = () => setShowConnect(true);

  useEffect(() => {
    getAll();
  }, []);

  const handleClick = (event) => {
    console.log(event.target.value);
    setContentName(event.target.value);
  };

  const haveLicense = (licenses) => {
    if (licenses != null && licenses != "") return <FcCheckmark />;
    else {
      return <FcHighPriority />;
    }
  };

  const getAll = () => {
    axios
      .get("http://localhost:8080/contents", {
        params: { contentName: contentName },
      })
      .then((response) => {
        setContents(response.data);
      });
  };

  const deleteContent = (contentId) => {
    console.log("deleteContent: " + contentId);
    axios
      .delete("http://localhost:8080/contents/" + contentId)
      .then(() => this.setState({ situation: "Delete successful" }))
      .then(window.location.reload(true));
  };

  return (
    <div className="container-fluid">
      <div className="row mb-5 mt-5">
        <div className="col-md-5">
          <input
            ref={inputRef}
            type="text"
            placeholder="Input Content Name"
            id="message"
            name="message"
            className="form-control"
            onChange={handleClick}
          />
        </div>
        <div className="col-md-5">
          <Button type="submit" className="btn btn-dark" onClick={getAll}>
            Search
          </Button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-bordered table-dark">
              <thead>
                <tr>
                  <th scope="col-md">id</th>
                  <th scope="col">Content Name</th>
                  <th scope="col">Status</th>
                  <th scope="col">Licenses</th>
                  <th scope="col">Video Url</th>
                  <th scope="col">Poster Url</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contents.map((content) => (
                  <tr>
                    <th scope="row">{content.id}</th>
                    <td>{content.name}</td>
                    <td>{content.status}</td>
                    <td>{haveLicense(content.licenses)} </td>
                    <td>{content.videoUrl}</td>
                    <td>{content.posterUrl}</td>
                    <td>
                      <div
                        class="btn-toolbar mb-3"
                        role="toolbar"
                        aria-label="Toolbar with button groups"
                      >
                        <div
                          class="btn-group mr-3"
                          role="group"
                          aria-label="First group"
                        >
                          <Button
                            variant="danger"
                            className="openModalBtn"
                            onClick={() => {
                              handleShowDelete();
                              setContentId(content.id);
                            }}
                          >
                            Delete Content
                          </Button>
                        </div>

                        <Button
                          variant="btn btn-outline-info"
                          className="openModalBtn"
                          onClick={() => {
                            handleShowLicense();
                            setSelectedContent(content);
                          }}
                        >
                          Show License
                        </Button>
                      </div>
                      <ConnectionModal contentId={content.id} />
                    </td>
                  </tr>
                ))}
                {showLicense ? (
                  <LicenseModal
                    showLicense={showLicense}
                    handleCloseLicense={handleCloseLicense}
                    content={selectedcontent}
                  />
                ) : (
                  ""
                )}
                {showDelete ? (
                  <DeleteModal
                    showDelete={showDelete}
                    handleCloseDelete={handleCloseDelete}
                    contentId={contentId}
                    onDelete={() => deleteContent(contentId)}
                  />
                ) : (
                  ""
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContentTable;
