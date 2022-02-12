import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelves from "../components/Shelves";

export default class Home extends Component {
  render() {
    // console.log(this.state.books);
    return (
      <div className="books-list">
        {/* Header */}
        <div className="books-list_title">
          <h1>NReads</h1>
        </div>
        {/* shelf */}
        <div className="books-list_content">
          <div>
            {/* pass the books array and the change shelf to the shelves */}
            <Shelves
              allBooks={this.props.allBooks}
              changeShelf={this.props.changeShelf}
            />
          </div>
        </div>
        {/* search button */}
        <Link to="/SearchPage" className="search-btn">
          Add a book
        </Link>
      </div>
    );
  }
}
