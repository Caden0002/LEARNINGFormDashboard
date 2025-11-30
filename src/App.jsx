import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}
