export function createEmptyDraft(fields) {
  return fields.reduce((draft, field) => {
    draft[field.name] = "";
    return draft;
  }, {});
}

export function normalizeValue(value) {
  return value === null || value === undefined ? "" : String(value);
}

export function buildDraft(item, fields) {
  const draft = createEmptyDraft(fields);
  fields.forEach((field) => {
    draft[field.name] = normalizeValue(item?.[field.name]);
  });
  return draft;
}

export function matchesSearch(item, columns, term) {
  if (!term) {
    return true;
  }

  const lowered = term.toLowerCase();
  return columns.some((column) =>
    normalizeValue(item[column.key]).toLowerCase().includes(lowered)
  );
}

export function buildMetrics(config, items) {
  if (config.pageKey === "students") {
    return [
      { label: "Total students", value: items.length },
      { label: "Active courses", value: new Set(items.map((item) => item.course).filter(Boolean)).size },
      { label: "Batches", value: new Set(items.map((item) => item.batch).filter(Boolean)).size }
    ];
  }

  if (config.pageKey === "faculty") {
    return [
      { label: "Total faculty", value: items.length },
      { label: "Departments covered", value: new Set(items.map((item) => item.department).filter(Boolean)).size },
      { label: "Designations", value: new Set(items.map((item) => item.designation).filter(Boolean)).size }
    ];
  }

  if (config.pageKey === "courses") {
    return [
      { label: "Total courses", value: items.length },
      { label: "Departments", value: new Set(items.map((item) => item.department).filter(Boolean)).size },
      { label: "Teaching modes", value: new Set(items.map((item) => item.mode).filter(Boolean)).size }
    ];
  }

  if (config.pageKey === "departments") {
    return [
      { label: "Total departments", value: items.length },
      { label: "Buildings in use", value: new Set(items.map((item) => item.buildingName).filter(Boolean)).size },
      { label: "Department types", value: new Set(items.map((item) => item.departmentType).filter(Boolean)).size }
    ];
  }

  return [
    { label: "Titles tracked", value: items.length },
    { label: "Categories", value: new Set(items.map((item) => item.category).filter(Boolean)).size },
    { label: "Languages", value: new Set(items.map((item) => item.language).filter(Boolean)).size }
  ];
}
