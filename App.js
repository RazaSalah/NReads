import React, { Component } from "react";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";
import * as BooksAPI from "./Api";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    search: "",
    searchResult: [],
    books: [],
    loadSearch: false,
  };

  componentDidMount() {
    BooksAPI.getAllBooks().then((res) => this.setState({ books: res }));
  }

  changeShelf = async (id, shelf) => {
    await BooksAPI.updateBook(id, shelf);
    await BooksAPI.getAllBooks().then((res) => {
      this.setState({
        books: res,
      });
      // console.log(this.state.books);
    });
    this.handleBookSearch(this.state.search);
  };
  // this function will be called in search input
  handleSearch = async (event) => {
    await this.setState({ search: event.target.value });
    // console.log(this.state.search);
    this.handleBookSearch(this.state.search);
  };

  handleBookSearch = async (search) => {
    await BooksAPI.searchBook(search).then((res) => {
      if (res && !res.error) {
        this.setState({
          searchResult: res.map((booksSearch) => {
            this.state.books.forEach((book) => {
              if (booksSearch.id === book.id) {
                booksSearch.shelf = book.shelf;
              }
            });
            return booksSearch;
          }),
          loadSearch: true,
        });
      } else {
        this.setState({
          searchResult: (
            <div className="search-results">
              <h4>"Look For Some Books"</h4>
            </div>
          ),
          loadSearch: false,
        });
      }
      console.log(this.state.searchResult);
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route
              path="/SearchPage"
              element={
                <SearchPage
                  handleSearch={this.handleSearch}
                  search={this.state.search}
                  searchResult={this.state.searchResult}
                  changeShelf={this.changeShelf}
                  loadSearch={this.state.loadSearch}
                />
              }
            ></Route>
            <Route
              path="/"
              element={
                <Home
                  allBooks={this.state.books}
                  changeShelf={this.changeShelf}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}
