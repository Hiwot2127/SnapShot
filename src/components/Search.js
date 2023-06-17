import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/posts?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearchSubmit} className="search-form">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search Images"
          className="search-input"
        />
        <button type="submit" className="search-button">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default Search;
