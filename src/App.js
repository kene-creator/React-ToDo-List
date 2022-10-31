import "./App.css";
import TodoContainer from "./components/TodoContainer";
import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <Header />
      <Routes>
        <Route path="/" element={<TodoContainer />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
