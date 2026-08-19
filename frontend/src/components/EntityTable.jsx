import { normalizeValue } from "../utils/entityHelpers";

export default function EntityTable({ columns, items, singular, onEdit, onDelete }) {
  return (
    <div className="table-wrap table-responsive">
      <table className="table align-middle saas-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.label}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                {columns.map((column, index) => (
                  <td key={column.key}>
                    {index === 0 ? (
                      <span className="cell-id">{normalizeValue(item[column.key])}</span>
                    ) : (
                      <span className={index === 1 ? "cell-primary" : ""}>
                        {normalizeValue(item[column.key])}
                      </span>
                    )}
                  </td>
                ))}
                <td>
                  <div className="d-flex gap-2 action-cluster">
                    <button
                      type="button"
                      className="btn btn-soft btn-icon"
                      onClick={() => onEdit(item)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-delete btn-icon"
                      onClick={() => onDelete(item)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="empty-state" colSpan={columns.length + 1}>
                No matching {singular.toLowerCase()} records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
