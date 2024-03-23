import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/Landing/LandingPage";
import Login from "./components/Registration/Login";
import Register from "./components/Registration/Register";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<LandingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

      </Route>
    </Routes>
  );
}
