# Frontend

This folder contains the separate React frontend for the student management system.

## Structure

- `src/components` shared UI pieces
- `src/pages` route-level pages
- `src/config` entity metadata
- `src/services` data access layer
- `src/styles` app-wide CSS
## Run

1. `cd frontend`
2. `npm install`
3. `npm run dev`

## Backend connection

- Spring Boot backend runs on `http://localhost:7078`
- Vite proxies `/api/*` requests to that backend in development
- The frontend now loads students, faculty, courses, departments, and library data from Java/MySQL
