import React, { Component } from "react";
import Shelf from "./Shelf";

export default class Shelves extends Component {
  render() {
    console.log(this.props.allBooks);
    const allBooks = this.props.allBooks;
    const CurrentlyReading = allBooks.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const WantToRead = allBooks.filter((book) => book.shelf === "wantToRead");
    const Reading = allBooks.filter((book) => book.shelf === "read");
    console.log(CurrentlyReading);
    return (
      <div>
        {/* currently reading */}
        <Shelf books={CurrentlyReading} title="Currently Reading" />
        {/* want to read */}
        <Shelf books={WantToRead} title="Want To Read" />
        {/* read */}
        <Shelf books={Reading} title="Read" />
      </div>
    );
  }
}
