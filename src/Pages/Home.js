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

  changeShelf = async (book, shelf) => {
    await BooksAPI.updateBook(book, shelf);
    await BooksAPI.getAllBooks().then((res) => {
      this.setState({
        books: res,
      });
    });
    //this.handleBooksSearch(this.state.search);
  };

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
              allBooks={this.state.books}
              changeShelf={this.changeShelf}
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
