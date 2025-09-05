import React, { useState } from "react";
import ConfirmModal from "./ConfirmModal";
import "../styles/main.scss";


function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const [modal, setModal] = useState({
    open: false,
    type: null, // "submit" | "clear"
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openSubmitModal = (e) => {
    e.preventDefault(); // prevent immediate submit
    setModal({ open: true, type: "submit" });
  };

  const openClearModal = () => setModal({ open: true, type: "clear" });

  const closeModal = () => setModal({ open: false, type: null });

  const confirmAction = () => {
    if (modal.type === "submit") {
      // do your real submit here (API, etc.)
      alert(`Submitted!\nEmail: ${formData.email}\nPassword: ${formData.password}`);
    } else if (modal.type === "clear") {
      setFormData({ email: "", password: "" });
    }
    closeModal();
  };

  return (
    <div className="form-container">
      <h2>Login</h2>

      <form onSubmit={openSubmitModal}>
        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Buttons */}
        <div className="button-group">
          <button type="submit" className="btn-submit">Submit</button>
          <button type="button" className="btn-clear" onClick={openClearModal}>
            Clear
          </button>
        </div>
      </form>

      {/* Modals */}
      <ConfirmModal
        open={modal.open && modal.type === "submit"}
        title="Confirm Submission"
        message="Are you sure you want to submit?"
        onConfirm={confirmAction}
        onCancel={closeModal}
      />
      <ConfirmModal
        open={modal.open && modal.type === "clear"}
        title="Confirm Clear"
        message="Are you sure you want to clear the form?"
        onConfirm={confirmAction}
        onCancel={closeModal}
      />
    </div>
  );
}

export default LoginForm;
