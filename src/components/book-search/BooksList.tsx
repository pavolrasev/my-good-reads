import { map, get, isEmpty } from "lodash";
import React from "react";
import Book, { BookProps } from "./Book";
import LoadingIcon from "../icons/LoadingIcon";

interface BookListProps {
  books: Array<BookProps>;
  isLoading?: boolean,
  updateSearchValue: (value: string) => void;
}

const BooksList = ({ books, isLoading = false, updateSearchValue }: BookListProps) => {
  return (
    <>
    {isLoading && (
        <div className="empty">
          <p>
            <LoadingIcon /> Loading...
          </p>
        </div>
      )}
      {isEmpty(books) && (
        <div className="empty">
          <p>
            Try searching for a topic, for example
            <a
              href="#search-input"
              onClick={(e) => {
                e.preventDefault();
                updateSearchValue("Javascript");
              }}
            >
              {" "}
              "Javascript"
            </a>
          </p>
        </div>
      )}

      {map(books, (book) => (
        <Book key={get(book, "id")} {...book} />
      ))}
    </>
  );
};

export default BooksList;
