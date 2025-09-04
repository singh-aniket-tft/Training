import React, { useEffect } from "react";

function ConfirmModal({ open, title = "Confirm", message, onConfirm, onCancel }) {
  if (!open) return null;

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onCancel();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onCancel]);

  const stop = (e) => e.stopPropagation();

  return (
    <div className="modal-overlay" onClick={onCancel} role="dialog" aria-modal="true">
      <div className="modal" onClick={stop}>
        <h3 className="modal-title">{title}</h3>
        <p className="modal-message">{message}</p>
        <div className="modal-actions">
          <button type="button" className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="btn-confirm" onClick={onConfirm}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
