import React from "react";
import ReactDOM from "react-dom/client";
import { App, About, Contact, History } from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}>
          <Route path="history" element={<History />} />
        </Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
