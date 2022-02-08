
import React from 'react';

export default function BookCards() {
  return( 
    <div className="shelf-books">
    <ol className="books-box">
      <li>
        <div className="book">
          <div className="book-position">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage:
                  'url("http://books.google.com/books/content?id=PXa2bby0oQ0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api")',
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
          <div className="book-title">JavaScript: The Good Parts</div>
          <div className="book-author">Douglas Crockford</div>
        </div>
      </li>
    </ol>
  </div>
);
}
