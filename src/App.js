import React, { Component } from "react";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/SearchPage" element={<SearchPage />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
