import React from "react";
import { isEmpty, join } from "lodash";
import useWishlist from "../../hooks/useWishlist";
import WishlistIcon from "../icons/WishlistIcon";

export interface BookProps {
  id: string;
  title: string;
  authors: Array<string>;
  coverUrl: string;
  description: string,
}

const Book = (props: BookProps) => {
  const { addItem, removeItem, isInWishlist } = useWishlist();

  const { id, title, authors, coverUrl, description } = props;
  const inWishlist = isInWishlist(props);

  const handleWishlistClick = (e: any) => {
    e.preventDefault();
    if (!inWishlist) {
      addItem(props);
    } else {
      removeItem(id);
    }
  };

  if (isEmpty(props)) {
    return null;
  }

  return (
    <div className="book" data-testid="book-component">
      <img src={coverUrl} alt={title} />
      <div className="book__info">
        <h2>{title}</h2>
        <i>{join(authors, ", ")}</i>
        <p>{description}</p>
        <button
          onClick={handleWishlistClick}
          className={`wishlist-icon ${inWishlist ? "active" : ""}`}
        >
          <WishlistIcon />
        </button>
      </div>
    </div>
  );
};

export default Book;
