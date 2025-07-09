import "./App.css";
import HeadTail from "./pages/HeadTail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/head-tail" element={<HeadTail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
