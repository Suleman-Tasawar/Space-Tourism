import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Crew from "./pages/Crew";
import Technologies from "./pages/Technologies";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="Destinations" element={<Destinations />} />
          <Route path="Crew" element={<Crew />} />
          <Route path="Technologies" element={<Technologies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
