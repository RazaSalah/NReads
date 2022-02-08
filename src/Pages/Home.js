import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "../components/Shelf";

export default class Home extends Component {
  render() {
    return (
      <div className="books-list">
        <div className="books-list_title">
          <h1>NReads</h1>
        </div>
        <div className="books-list_content">
          <div>
            {/* shelf components will be here */}
            <Shelf Category="Currently Reading" />
            <Shelf Category="Want To Read" />
            <Shelf Category="Read" />
          </div>
        </div>
        {/* <div className="search-btn">
      <button>Add a book</button>
    </div> */}
        <Link to="/SearchPage" className="search-btn">
          Add a book
        </Link>
      </div>
    );
  }
}
