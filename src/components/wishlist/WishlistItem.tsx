import { isEmpty } from "lodash";
import React from "react";
import useWishlist from "../../hooks/useWishlist";
import { BookProps } from "../book-search/Book";
import TrashIcon from "../icons/TrashIcon";

const WishlistItem = (props: BookProps) => {
  const { removeItem } = useWishlist();

  if (isEmpty(props)) {
    return null;
  }

  const { id, title } = props;

  const handleRemoveFromWishlist = (e: any) => {
    e.preventDefault();
    removeItem(id);
  };

  return (
    <div className="wishlist-item">
      <span>{title}</span>
      <button
        className="wishlist-item__icon"
        onClick={handleRemoveFromWishlist}
      >
        <TrashIcon />
      </button>
    </div>
  );
};

export default WishlistItem;
