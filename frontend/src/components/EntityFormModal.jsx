export default function EntityFormModal({
  isOpen,
  title,
  fields,
  values,
  onChange,
  submitLabel,
  notice,
  onClose,
  onSubmit,
  submitting
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
    <div className="modal-backdrop-custom" onClick={onClose}></div>
    <div className="modal d-block" tabIndex="-1" aria-modal="true" role="dialog">
      <div className="modal-dialog modal-dialog-centered modal-xl modal-dialog-scrollable entity-modal-dialog">
        <div className="modal-content">
          <form
            className="entity-modal-form"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
            }}
          >
            <div className="modal-header px-4 pt-4">
              <div>
                <h3 className="modal-title h4 mb-1">{title}</h3>
              </div>
              <button
                type="button"
                className="btn-close btn-close-white"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>

            <div className="modal-body px-4 entity-modal-body">
              <div className="row g-3 entity-modal-grid">
                {fields.map((field) => (
                  <div className={field.col || "col-12"} key={field.name}>
                    <label className="field-label" htmlFor={`modal-${field.name}`}>
                      {field.label}
                    </label>
                    <input
                      id={`modal-${field.name}`}
                      name={field.name}
                      type={field.type || "text"}
                      className="form-control"
                      placeholder={field.placeholder}
                      required={Boolean(field.required)}
                      value={values[field.name] ?? ""}
                      onChange={(event) => onChange(field.name, event.target.value)}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer px-4 pb-4">
              <button type="button" className="btn btn-soft" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-brand" disabled={submitting}>
                {submitting ? "Saving..." : submitLabel}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
