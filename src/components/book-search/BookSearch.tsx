import React, { useEffect, useState, useCallback } from "react";
import { getBooksByType } from "../../services/book-search.service";
import { transformBooksResponseToBookProps } from "../../utils/books";
import get from "lodash/get";
import SearchBar from "./SearchBar";
import BooksList from "./BooksList";
import { debounce, isEmpty } from "lodash";

const BookSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, updateSearchValue] = useState("");
  const [allAvailableBooks, setAllAvailableBooks] = useState([]);

  async function requestBooks(term: string) {
    setIsLoading(true);
    if (term) {
      const allBooks = await getBooksByType(term);
      setAllAvailableBooks(allBooks);
    }
    setIsLoading(false);
  }

  const getAllBooks = useCallback(
    debounce((term) => requestBooks(term), 500),
    []
  );

  useEffect(() => {
    if (!isEmpty(searchValue)) {
      getAllBooks(searchValue);
    } else {
      setAllAvailableBooks([]);
    }
  }, [searchValue, getAllBooks]);

  return (
    <>
      <SearchBar
        searchValue={searchValue}
        handleSearchValueChange={(value: string) => updateSearchValue(value)}
      />
      <BooksList
        isLoading={isLoading}
        books={transformBooksResponseToBookProps(
          get(allAvailableBooks, "items")
        )}
        updateSearchValue={updateSearchValue}
      />
    </>
  );
};

export default BookSearch;
