import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/wrappers/PrivateRoute";
import CompanyHome from "../pages/company/CompanyHome";
import CompanyLogin from "../pages/company/CompanyLogin";
import CompanyProfile from "../pages/company/CompanyProfile";
import CompanyRequest from "../pages/company/CompanyRequest";
import CompanyResetPassword from "../pages/company/CompanyResetPassword";
import CompanySignUp from "../pages/company/Register";

export default function Company() {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <PrivateRoute authorisedRoles={["company"]}>
            <CompanyHome />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute authorisedRoles={["company"]}>
            <CompanyProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/request"
        element={
          <PrivateRoute authorisedRoles={["company"]}>
            <CompanyRequest />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<CompanyLogin />} />
      <Route path="/register" element={<CompanySignUp />} />
      <Route path="/reset-password" element={<CompanyResetPassword />} />
    </Routes>
  );
}
