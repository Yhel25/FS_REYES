import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import React from "react";
import Home from "./pages/home.jsx";
import Products from "./pages/products.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
