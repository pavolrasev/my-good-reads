import React from "react";
import { render } from "@testing-library/react";
import BooksList from "./BooksList";


const items = [{
    id: '1',
    title: 'title 1',
    authors: [],
    description: 'lorem ipsum',
    coverUrl: 'https://....'
},
{
    id: '2',
    title: 'title 12',
    authors: [],
    description: 'lorem ipsumssd',
    coverUrl: 'https://....'
}];

test("renders books", () => {
  const { queryAllByTestId } = render(
    <BooksList
      books={items}
      updateSearchValue={() => {}}
    />
  );

  const element = queryAllByTestId('book-component');
  expect(element.length).toBe(2);
});

test("test loading", () => {
  const { getByText } = render(
    <BooksList
      isLoading={true}
      books={items}
      updateSearchValue={() => {}}
    />
  );

  const element = getByText(/Loading.../i)
  expect(element).toBeInTheDocument();
});