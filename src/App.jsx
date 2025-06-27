import React from "react";
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          {/* <Route path='/' element={<About />}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App
