import React from "react";
import SearchInput from "../form/SearchInput";

interface SearchBarProps {
  searchValue: string;
  handleSearchValueChange: (value: string) => void;
}

const SearchBar = ({
  searchValue,
  handleSearchValueChange,
}: SearchBarProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearchValueChange(searchValue);
      }}
    >
      <SearchInput
        id="search-input"
        className="full-width"
        autoFocus
        name="gsearch"
        type="search"
        value={searchValue}
        placeholder="Search for books to add to your reading list and press Enter"
        onChange={(e: any) => handleSearchValueChange(e.target.value)}
      />
    </form>
  );
};

export default SearchBar;
