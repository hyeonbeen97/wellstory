import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./com/NavBar";
import Home from "./page/Home";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
