import "./App.css";
import TodoContainer from "./components/TodoContainer";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TodoContainer />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
