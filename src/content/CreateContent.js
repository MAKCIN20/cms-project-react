import React from "react";
import axios from "axios";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState();
  const [posterUrl, setPosterUrl] = useState();
  const [videoUrl, setVideoUrl] = useState();

  const createContent = (name, posterUrl, videoUrl) => {
    axios.post("http://localhost:8080/contents", { name, posterUrl, videoUrl })
    .then(window. location. reload(true));
  };

  return (
    <div className="card text-white bg-success mb-1">
      <div className="card-header">Add Content</div>
      <div className="card-body">
        <h5 className="card-title">Creating New Content</h5>
        <div className="row mb-1 mt-2">
          <div className="col-md-2">
            <input
              type="text"
              placeholder="Input Content Name"
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
              placeholder="Input Content Poster URL"
              id="message"
              name="message"
              className="form-control"
              value={posterUrl}
              onChange={(writed) => setPosterUrl(writed.target.value)}
            />
          </div>
          <div className="col-md-2">
            <input
              type="text"
              placeholder="Input Content Video URL"
              id="message"
              name="message"
              className="form-control"
              value={videoUrl}
              onChange={(writed) => setVideoUrl(writed.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="col-md-5">
        <button
          type="submit"
          className="btn btn-dark"
          onClick={() => {
            createContent(name, posterUrl, videoUrl);
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
