export default function MetricsRow({ metrics }) {
  return (
    <section className="row g-3 mb-4">
      {metrics.map((metric) => (
        <div className="col-md-4" key={metric.label}>
          <div className="metric-card">
            <span className="metric-label">{metric.label}</span>
            <p className="metric-value">{metric.value}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
