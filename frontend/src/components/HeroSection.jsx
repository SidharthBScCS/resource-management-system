export default function HeroSection({ icon, eyebrow, title, copy, actionLabel, onAction }) {
  return (
    <section className="hero-panel mb-4">
      <div className="row align-items-center g-4">
        <div className="col-lg-8 position-relative">
          <span className="eyebrow mb-3">
            <i className={`bi ${icon}`}></i>
            {eyebrow}
          </span>
          <h1 className="hero-title mb-3">{title}</h1>
          <p className="hero-copy mb-0">{copy}</p>
        </div>

        {actionLabel ? (
          <div className="col-lg-4 text-lg-end position-relative">
            <button type="button" className="btn btn-brand" onClick={onAction}>
              <i className="bi bi-plus-circle me-2"></i>
              {actionLabel}
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
