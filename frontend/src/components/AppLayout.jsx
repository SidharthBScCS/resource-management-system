import { NavLink, useLocation } from "react-router-dom";
import { navigationItems } from "../config/entityConfigs";

export default function AppLayout({ children }) {
  const location = useLocation();

  return (
    <div className="app-shell">
      <div className="topbar-shell mb-4">
        <div className="container">
          <nav className="navbar navbar-expand-lg topbar px-0 py-3">
            <NavLink className="navbar-brand text-white brand-lockup me-0" to="/">
              <span className="brand-mark">
                <i className="bi bi-mortarboard-fill"></i>
              </span>
              <span>Student Management System</span>
            </NavLink>

            <button
              className="navbar-toggler border-0 shadow-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#appNavbar"
              aria-controls="appNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="appNavbar">
              <ul className="navbar-nav ms-auto nav-pills-wrap nav-surface">
                {navigationItems.map((item) => (
                  <li className="nav-item" key={item.key}>
                    <NavLink
                      className={`nav-link ${location.pathname === item.href ? "active" : ""}`}
                      to={item.href}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className="container">
        {children}
      </div>
    </div>
  );
}
