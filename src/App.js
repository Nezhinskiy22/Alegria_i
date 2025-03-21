import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PropertyList from "./components/PropertyList";
import PropertyDetails from "./components/PropertyDetails";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contacts from "./pages/Contacts"; // Використовуємо Contacts

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "60px" }}>
        {" "}
        {/* Відступ для фіксованого Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<PropertyList />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/contact" element={<Contacts />} /> {/* Виправлено */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
