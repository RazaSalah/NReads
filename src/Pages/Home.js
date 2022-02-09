import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelves from "../components/Shelves";
import * as BooksAPI from "../Api";

export default class Home extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    BooksAPI.getAllBooks().then((res) => this.setState({ books: res }));
  }
  render() {
    console.log(this.state.books);
    return (
      <div className="books-list">
        {/* Header */}
        <div className="books-list_title">
          <h1>NReads</h1>
        </div>
        {/* shelf */}
        <div className="books-list_content">
          <div>
            <Shelves allBooks={this.state.books} />
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
