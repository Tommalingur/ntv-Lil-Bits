import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./screens/Home";
import Dish from "./screens/Dish";
import Drink from "./screens/Drink";
import Order from "./screens/Order";
import Receipt from "./screens/Receipt";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Dish" element={<Dish />} />
          <Route path="/Drink" element={<Drink />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Receipt" element={<Receipt />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
