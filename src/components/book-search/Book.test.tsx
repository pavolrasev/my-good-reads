import React from "react";
import { render } from "@testing-library/react";
import Book from "./Book";

test("renders book item", () => {
  const { getByText } = render(
    <Book
      title="Book title"
      authors={[]}
      description="this is description"
      coverUrl=""
      id="xyy12"
    />
  );
  const element = getByText(/Book title/i);
  expect(element).toBeInTheDocument();
});

test("renders book wishlist button", () => {
    const { getByRole } = render(
      <Book
        title="Book title"
        authors={[]}
        description="this is description"
        coverUrl=""
        id="xyy12"
      />
    );
    const element = getByRole('button');
    expect(element).toBeInTheDocument();
  });
