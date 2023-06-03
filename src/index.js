import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomeBlog, PostBlog } from "./components/sections/main";

import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomeBlog />} />
        <Route path="/post" element={<PostBlog />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();
