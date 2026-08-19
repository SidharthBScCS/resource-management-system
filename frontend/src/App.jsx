import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import EntityPage from "./pages/EntityPage";
import { entityConfigs } from "./config/entityConfigs";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route
          path="/"
          element={<EntityPage config={entityConfigs.students} />}
        />
        <Route
          path="/faculty"
          element={<EntityPage config={entityConfigs.faculty} />}
        />
        <Route
          path="/course"
          element={<EntityPage config={entityConfigs.courses} />}
        />
        <Route
          path="/department"
          element={<EntityPage config={entityConfigs.departments} />}
        />
        <Route
          path="/library"
          element={<EntityPage config={entityConfigs.library} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppLayout>
  );
}
