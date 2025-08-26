import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home.js";
import Dashboard from "./Dashboard.js";
import Audio from "./audio page.js"
import './App.css';
import './navbar.css';
import './button.css'
import './footer.css'
import './video.css'
import './dashboard.css'
import './review.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
