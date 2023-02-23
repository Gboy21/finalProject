import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../components/wrappers/PrivateRoute";
import Register from "../pages/user/Register";
import UserHome from "../pages/user/UserHome";
import UserLogin from "../pages/user/UserLogin";
import UserProfile from "../pages/user/UserProfile";
import UserRequest from "../pages/user/UserRequest";
import UserResetPassword from "../pages/user/UserResetPassword";

export default function User() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<UserLogin />} />
      <Route
        path="/home"
        element={
          <PrivateRoute authorisedRoles={["user"]}>
            <UserHome />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute authorisedRoles={["user"]}>
            <UserProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/request"
        element={
          <PrivateRoute authorisedRoles={["user"]}>
            <UserRequest />
          </PrivateRoute>
        }
      />
      <Route path="/reset-password" element={<UserResetPassword />} />
    </Routes>
  );
}
