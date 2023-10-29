/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useState } from "react";

function SearchBar({ findCard }) {
  const [searchString, setSearchString] = useState("");

  const handleInputChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchString.length >= 1) {
      findCard(searchString);
    }
  };

  useEffect(() => {
    if (searchString.length >= 3) {
      findCard(searchString);
    }
  }, [searchString]);

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search-bar"
        className="search-bar__input"
        value={searchString}
        onChange={handleInputChange}
      />
    </form>
  );
}

export default SearchBar;
