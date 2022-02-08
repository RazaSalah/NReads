import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/SearchPage";



export default class App extends Component {
 
  render() {
    return (
      
        <Router>
          <Routes>
          <Route path='/' exact element={<Home Book={this.Book}/>} />
          <Route path='/SearchPage' element={<Search />} />
          </Routes>
        </Router>
   
    );
  }
}
