import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./component/homePage";
import { DetailItem } from "./component/detailItem";
import { Navbar } from "./component/navbar";
import { About } from "./component/Navlist/about";
import { Watch } from "./component/watch";

function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/home" Component={HomePage} />
          <Route path="/about" Component={About}/>
          <Route path="/details/:id" Component={DetailItem} />
          <Route path="/watch/:id" Component={Watch}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
