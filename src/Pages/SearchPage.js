import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchShelves from "../components/SearchShelves";

export default class SearchPage extends Component {
  render() {
    const handleSearch = this.props.handleSearch;
    const search = this.props.search;
    const searchResult = this.props.searchResult;
    console.log(searchResult);

    return (
      <div className="main">
        <div className="search-container">
          <div className="search-container-bar">
            <Link to="/" className="close-btn-bar">
              Close
            </Link>
            <div className="input-wrapper">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
              />
            </div>
          </div>
          {/* import search shelf */}
          <SearchShelves searchResult={searchResult} />
        </div>
      </div>
    );
  }
}
