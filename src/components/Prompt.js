import React, { useEffect } from "react";
import { useState } from "react";

const Prompt = () => {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("firstTime")) {
      setShowModal(false);
    } else {
      localStorage.setItem("firstTime", true);
    }
  }, []);

  return showModal ? (
    <>
      <div className="modal-container">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title">Reminder 🙃</h3>
          </div>
          <div className="modal-body">
            <p className="modal-text">
              Sorry for disturbance 🥲. But as I am using Swiggy API for
              fetching data, I would request you all to download "Allow CORS"
              extension and turn it on for a better experience.
            </p>
            <p>
              <a
                href="https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf"
                className="modal-link"
              >
                Download
              </a>
            </p>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setShowModal(false)}
              className="modal-button"
              type="button"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="modal-overlay"></div>
    </>
  ) : null;
};

export default Prompt;
