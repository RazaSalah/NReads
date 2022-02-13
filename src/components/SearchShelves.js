import React, { Component } from "react";

export default class SearchShelves extends Component {
  render() {
    const searchResult = this.props.searchResult;

    console.log(searchResult);
    return (
      <div className="search-results">
        <div className="shelf-books">
          <ol className="books-box">
            {searchResult.map((bookInfo) => (
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
                      {/* calling the change shelf method whenever the user change the book shelf */}
                      <select
                        onChange={(event) => {
                          this.props.changeShelf(
                            bookInfo.id,
                            event.target.value
                          );
                        }}
                        value={bookInfo.shelf ? bookInfo.shelf : "none"}
                      >
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
    );
  }
}
