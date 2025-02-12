import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technologies from "./pages/Technologies";
import './index.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destinations" element={<Destinations />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technologies" element={<Technologies />} />
      </Route>
    </Routes>
  </Router>
);
