import { map } from "lodash";
import React from "react";
import { BookProps } from "../book-search/Book";
import WishlistItem from "./WishlistItem";

interface WishlistListProps {
  items: Array<BookProps>;
}

const WishlistList = ({ items }: WishlistListProps) => {
  return (
    <div>
      {map(items, (wishlistItem) => (
        <WishlistItem
          {...wishlistItem}
          key={`wishlist-item-${wishlistItem?.id}`}
        />
      ))}
    </div>
  );
};

export default WishlistList;
