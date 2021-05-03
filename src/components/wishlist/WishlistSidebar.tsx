import React from "react";
import useWishlist from "../../hooks/useWishlist";
import WishlistList from "./WishlistList";

const WishlistSidebar = () => {
    const { wishlist } = useWishlist();

    return (
        <>
            <h3>My Reading Wishlist ({wishlist.length})</h3>
            <div>
                <WishlistList items={wishlist} />
            </div>
        </>
    )
}

export default WishlistSidebar;