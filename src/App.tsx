import React from "react";
import "./styles/App.scss";
import BookSearch from "./components/book-search/BookSearch";
import WishlistSidebar from "./components/wishlist/WishlistSidebar";

function App() {
  return (
    <div>
      <header className="header">
        <div className="header--content">
          <h1>My Good Reads</h1>
        </div>
      </header>
      <main className="book--container">
        <section className="search-params">
          <BookSearch />
        </section>
        <section className="sidebar">
          <WishlistSidebar />
        </section>
      </main>
    </div>
  );
}

export default App;
