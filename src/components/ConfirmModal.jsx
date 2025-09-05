import React, { useEffect } from "react";

function ConfirmModal({ open, title = "Confirm", message, onConfirm, onCancel }) {
  // Hooks must run unconditionally (always), so we call useEffect here
  // and guard inside it to only attach the listener when `open` is true.
  useEffect(() => {
    if (!open) return; // guard inside the hook

    const onKey = (e) => {
      if (e.key === "Escape") onCancel?.();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onCancel]);

  // Early return is fine *after* hooks have been called
  if (!open) return null;

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
