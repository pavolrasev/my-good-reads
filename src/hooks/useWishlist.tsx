import { filter, isEmpty, concat, find, uniqBy } from "lodash";
import { useState, useEffect } from "react";
import { WISHLIST_STORAGE } from "../constants/AppContstants";

const useWishlist = () => {
  const [val, setVal] = useState(localStorage.getItem(WISHLIST_STORAGE));

  const setValue = (value: any) => {
    localStorage.setItem(WISHLIST_STORAGE, JSON.stringify(value));
    window.dispatchEvent( new Event('storage') )
  };

  useEffect(() => {
    const handler = () => {
      setVal(localStorage.getItem(WISHLIST_STORAGE));
    };

    window.addEventListener("storage", handler);

    return () => window.removeEventListener("storage", handler);
  }, []);

  const getWishlistData = () => {
    if (!window || !localStorage) {
      console.log('here');
      return "";
    }

    let wishlistData = val || "[]";
    return JSON.parse(wishlistData);
  };

  const addItem = (item: any) => {
    if (isEmpty(item)) {
      return;
    }

    const wishlistData = getWishlistData();

    const newWishlist = uniqBy(
      concat(wishlistData, [item]),
      (item) => item?.id
    );
    setValue(newWishlist);
  };

  const removeItem = (id: string) => {
    if (isEmpty(id)) {
      return;
    }

    const wishlistData = getWishlistData();
    const newWishlist = filter(
      wishlistData,
      (wishlistItem) => wishlistItem?.id !== id
    );
    setValue(newWishlist);
  };

  const isInWishlist = (item: any) => {
    if (isEmpty(item)) {
      return;
    }

    const wishlistData = getWishlistData();
    return !isEmpty(find(wishlistData, { id: item?.id }));
  };

  return {
    wishlist: getWishlistData(),
    addItem,
    removeItem,
    isInWishlist,
  };
};

export default useWishlist;
