import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detect faces in your pictures."}
        <br />
        {"Go ahead, give it a try!"}
      </p>
      <div className="center">
        <div className="form pa4 br3 shadow-1">
          <input className="f4 pa2 w-70" type="text" onChange={onInputChange} />
          <button
            className="w-30 grow f4 link pv2 dib black bg-washed-green"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
