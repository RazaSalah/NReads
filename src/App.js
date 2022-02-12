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
    // this.handleBooksSearch(this.state.search);
  };

  handleSearch = async (event) => {
    await this.setState({ search: event.target.value });
    console.log(this.state.search);
    this.handleBookSearch(this.state.search);
  };

  handleBookSearch = (search) => {
    BooksAPI.searchBook(search).then((res) => {
      this.setState({
        searchResult: res,
      });
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
