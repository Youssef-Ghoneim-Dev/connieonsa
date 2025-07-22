import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Dashboard from "./Dashboard.js";
import './App.css';
import './navbar.css';
import './button.css'
import './footer.css'
import './video.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
