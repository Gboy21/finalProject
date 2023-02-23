import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/wrappers/PrivateRoute";
import AdminHome from "../pages/Admin/AdminHome";
import AdminLogin from "../pages/Admin/AdminLogin";
import Company from "../pages/Admin/Company";
import Request from "../pages/Admin/Request";
import User from "../pages/Admin/User";

export default function Admin() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute authorisedRoles={["admin"]}>
            <AdminHome />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<AdminLogin />} />
      <Route
        path="/request"
        element={
          <PrivateRoute authorisedRoles={["admin"]}>
            <Request />
          </PrivateRoute>
        }
      />
      <Route
        path="/user"
        element={
          <PrivateRoute authorisedRoles={["admin"]}>
            <User />
          </PrivateRoute>
        }
      />
      <Route
        path="/company"
        element={
          <PrivateRoute authorisedRoles={["admin"]}>
            <Company />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
