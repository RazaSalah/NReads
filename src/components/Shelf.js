import React, { Component } from "react";

export default class Shelf extends Component {
  render() {
    const shelfBooks = this.props.books;
    console.log(shelfBooks);
    return (
      <div>
        <div className="shelf">
          <h2 className="shelf-title">{this.props.title}</h2>
          <div className="shelf-books">
            <ol className="books-box">
              {shelfBooks.map((bookInfo) => (
                <li key={bookInfo.id}>
                  <div className="book">
                    <div className="book-position">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${bookInfo.imageLinks.smallThumbnail})`,
                        }}
                      ></div>
                      <div className="shelf-shfiter">
                        <select>
                          <option value="move" disabled>
                            Move to...
                          </option>
                          <option value="currentlyReading">
                            Currently Reading
                          </option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{bookInfo.title}</div>
                    <div className="book-author">{bookInfo.authors}</div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}
