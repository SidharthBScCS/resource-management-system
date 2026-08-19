import { useEffect, useMemo, useState } from "react";
import EntityTable from "../components/EntityTable";
import EntityFormModal from "../components/EntityFormModal";
import {
  createEntityRecord,
  deleteEntityRecord,
  getEntityRecords,
  updateEntityRecord
} from "../services/dataService";
import {
  buildDraft,
  createEmptyDraft,
  matchesSearch
} from "../utils/entityHelpers";

export default function EntityPage({ config }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [actionError, setActionError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingItem, setEditingItem] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [addDraft, setAddDraft] = useState(createEmptyDraft(config.formFields));
  const [editDraft, setEditDraft] = useState(createEmptyDraft(config.formFields));

  async function loadItems() {
    setLoading(true);
    setError("");

    try {
      const data = await getEntityRecords(config.dataKey);
      setItems(Array.isArray(data) ? data : []);
    } catch {
      setError("Unable to load data from the Java backend. Make sure Spring Boot is running on port 7078.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadItems();
  }, [config.dataKey]);

  const filteredItems = useMemo(
    () => items.filter((item) => matchesSearch(item, config.columns, searchTerm)),
    [items, config.columns, searchTerm]
  );
  function updateDraftValue(setter, name, value) {
    setter((current) => ({ ...current, [name]: value }));
  }

  function openEditModal(item) {
    setActionError("");
    setEditingItem(item);
    setEditDraft(buildDraft(item, config.formFields));
    setShowEditModal(true);
  }

  function openAddModal() {
    setActionError("");
    setAddDraft(createEmptyDraft(config.formFields));
    setShowAddModal(true);
  }

  function closeAddModal() {
    setShowAddModal(false);
  }

  function closeEditModal() {
    setShowEditModal(false);
    setEditingItem(null);
  }

  async function handleAddSubmit() {
    setSubmitting(true);
    setActionError("");

    try {
      await createEntityRecord(config.dataKey, addDraft);
      closeAddModal();
      await loadItems();
    } catch {
      setActionError(`Unable to create ${config.singular.toLowerCase()}.`);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleEditSubmit() {
    if (!editingItem) {
      return;
    }

    setSubmitting(true);
    setActionError("");

    try {
      await updateEntityRecord(config.dataKey, editingItem.id, editDraft);
      closeEditModal();
      await loadItems();
    } catch {
      setActionError(`Unable to update ${config.singular.toLowerCase()}.`);
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(item) {
    const confirmed = window.confirm(`Delete this ${config.singular.toLowerCase()}?`);
    if (!confirmed) {
      return;
    }

    setActionError("");

    try {
      await deleteEntityRecord(config.dataKey, item.id);
      await loadItems();
    } catch {
      setActionError(`Unable to delete ${config.singular.toLowerCase()}.`);
    }
  }

  return (
    <>
      <section className="table-section">
        <div className="section-toolbar d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
          <div>
            <h2 className="section-title mb-1">{config.listTitle}</h2>
          </div>

          <div className="d-flex flex-column flex-md-row gap-3 w-100 justify-content-lg-end align-items-stretch align-items-md-center">
            <input
              className="form-control search-input section-search"
              type="search"
              value={searchTerm}
              placeholder={config.searchPlaceholder}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button type="button" className="btn btn-brand section-action" onClick={openAddModal}>
              <i className="bi bi-plus-circle me-2"></i>
              {config.addLabel}
            </button>
          </div>
        </div>

        <EntityTable
          columns={config.columns}
          items={loading || error ? [] : filteredItems}
          singular={config.singular}
          onEdit={openEditModal}
          onDelete={handleDelete}
        />

        {error ? (
          <div className="alert alert-warning mt-3 mb-0">{error}</div>
        ) : null}

        {actionError ? (
          <div className="alert alert-warning mt-3 mb-0">{actionError}</div>
        ) : null}

        {loading ? (
          <p className="footer-note mt-3 mb-0">Loading records from the backend database...</p>
        ) : null}

        {!loading && !error ? (
          <p className="footer-note mt-3 mb-0">
            Showing {filteredItems.length} of {items.length} record(s).
          </p>
        ) : null}
      </section>

      <EntityFormModal
        isOpen={showAddModal}
        title={`Add ${config.singular}`}
        fields={config.formFields}
        values={addDraft}
        onChange={(name, value) => updateDraftValue(setAddDraft, name, value)}
        submitLabel={`Save ${config.singular}`}
        notice="Data now loads from the Java backend. Form submit wiring can be added next if you want full React CRUD."
        onClose={closeAddModal}
        onSubmit={handleAddSubmit}
        submitting={submitting}
      />

      <EntityFormModal
        isOpen={showEditModal}
        title={`Update ${config.singular}`}
        fields={config.formFields}
        values={editingItem ? editDraft : createEmptyDraft(config.formFields)}
        onChange={(name, value) => updateDraftValue(setEditDraft, name, value)}
        submitLabel={`Update ${config.singular}`}
        notice="This modal is wired for frontend state and ready for API integration."
        onClose={closeEditModal}
        onSubmit={handleEditSubmit}
        submitting={submitting}
      />
    </>
  );
}
