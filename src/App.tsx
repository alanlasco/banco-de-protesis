import React from "react";

import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/Navbar";
import { LumberJack } from "./components/LumberJack";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <LumberJack />
    </div>
  );
}

export default App;
