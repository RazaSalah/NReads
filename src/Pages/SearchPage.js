import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchShelves from "../components/SearchShelves";

export default class SearchPage extends Component {
  render() {
    const handleSearch = this.props.handleSearch;
    const search = this.props.search;
    const searchResult = this.props.searchResult;
    const loadSearch = this.props.loadSearch;
    //console.log(searchResult);

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
                value={search}
              />
            </div>
          </div>
          {/* import search shelf */}
          {loadSearch ? (
            <SearchShelves
              searchResult={searchResult}
              changeShelf={this.props.changeShelf}
            />
          ) : (
            searchResult
          )}
        </div>
      </div>
    );
  }
}
