const entityEndpoints = {
  students: "/student",
  faculty: "/faculty",
  courses: "/course",
  departments: "/department",
  library: "/library"
};

async function fetchJson(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

async function sendJson(path, method, payload) {
  const response = await fetch(path, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json();
}

async function sendWithoutBody(path, method) {
  const response = await fetch(path, { method });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
}

export function getEntityRecords(dataKey) {
  const endpoint = entityEndpoints[dataKey];

  if (!endpoint) {
    return Promise.resolve([]);
  }

  return fetchJson(endpoint);
}

export function createEntityRecord(dataKey, payload) {
  const endpoint = entityEndpoints[dataKey];
  return sendJson(endpoint, "POST", payload);
}

export function updateEntityRecord(dataKey, id, payload) {
  const endpoint = entityEndpoints[dataKey];
  return sendJson(`${endpoint}/${id}`, "PUT", payload);
}

export function deleteEntityRecord(dataKey, id) {
  const endpoint = entityEndpoints[dataKey];
  return sendWithoutBody(`${endpoint}/${id}`, "DELETE");
}
