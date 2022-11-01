/* eslint-disable */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import Header from './components/Header';
import About from './pages/About';
import Navigation from './components/Navigation';

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
