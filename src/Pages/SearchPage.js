import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SearchPage extends Component {
  render() {
    return (
      <div className="main">
        <div className="search-container">
          <div className="search-container-bar">
            {/* <button
              className="close-btn-bar"
              onClick={() => this.props.ShowSearchPage(true)}
            >
              Close
            </button> */}
            {/* we can use the link instead of using state to navigate back to home */}
            <Link to="/" className="close-btn-bar">
              Close
            </Link>
            <div className="input-wrapper">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="search-results">
            <ol className="books-box"></ol>
          </div>
        </div>
      </div>
    );
  }
}
