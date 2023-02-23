import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NotAuthorized from "./pages/NotAuthorized";

import Splash from "./pages/Splash";
import Home from "./pages/Welcome";
import AdminRoutes from "./routes/Admin";
import CompanyRoutes from "./routes/Company.jsx";
import UserRoutes from "./routes/User";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Splash />} />
          <Route exact path="/welcome" element={<Home />} />
          <Route exact path="/admin/*" element={<AdminRoutes />} />
          <Route exact path="/403" element={<NotAuthorized />} />
          <Route path="/user/*" element={<UserRoutes />} />
          <Route path="/company/*" element={<CompanyRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
