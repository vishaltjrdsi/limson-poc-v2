import { useState } from "react";
import { FaTimes, FaUserPlus } from "react-icons/fa";
import "./RequestAccessModal.css";

function RequestAccessModal({ open, onClose }) {
  const [email, setEmail] = useState("");

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    console.log("Request Access Email:", email);

    // TODO: Call your API here
    // await requestAccess(email);

    // Clear input
    setEmail("");

    // Close modal
    onClose();
  };

  return (
    <div
      className="request-modal-overlay"
      onClick={onClose}
    >
      <div
        className="request-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close-btn"
          onClick={onClose}
        >
          <FaTimes />
        </button>

        <div className="request-header">
          <div className="request-icon">
            <FaUserPlus />
          </div>

          <h3>Request Access</h3>
        </div>

        <form
          className="request-body"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">USER EMAIL</label>

          <input
            id="email"
            type="email"
            placeholder="Enter work email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
}

export default RequestAccessModal;