import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import LandingPage from "./pages/LandingPage";
import Login from "./components/auth/Login";
import ForgotPassword from "./components/auth/ForgotPassword";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CustomerDashboard from "./pages/customer/CustomerDashboard";
import StaffDashboard from "./pages/staff/StaffDashboard";
import TechnicianDashboard from "./pages/technician/TechnicianDashboard";
import Contact from "./pages/customer/Contact";
import PaymentSuccess from "./pages/customer/PaymentSuccess";
import CustomerChatRoom from "./pages/customer/CustomerChatRoom";
import StaffChatRoom from "./pages/staff/StaffChatRoom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute requireAuth={false}>
                <LandingPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute requireAuth={false}>
                <Login />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute requireAuth={true} allowedRoles={["ROLE_ADMIN"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          {/* ...other routes... */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
