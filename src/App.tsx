import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./com/NavBar";
import Home from "./page/Home";

const App = () => {
  return (
    <Router basename="/wellstory">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
