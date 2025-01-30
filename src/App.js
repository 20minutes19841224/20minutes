import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import StaffPage from "./pages/StaffPage";
import CastPage from "./pages/CastPage";
import BottleMenuPage from "./pages/BottleMenu";
import ReservationPage from "./pages/ReservationPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/staff" element={<StaffPage />} /> {/* スタッフページ */}
        <Route path="/cast" element={<CastPage />} />
        <Route path="/bottle-menu" element={<BottleMenuPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
