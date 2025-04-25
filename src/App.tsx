import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Resources from "./pages/Resources";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
