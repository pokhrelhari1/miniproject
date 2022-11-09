import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SelectTableComponent from "./select-table.component";

export default function App() {
  return (
    <div className="container">
    <p>Users</p>
      <SelectTableComponent />
    </div>
  );
}