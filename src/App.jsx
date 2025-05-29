import React from "react";
import "./App.css";

function App() {
  return (
    <div className="bookstore">
      <aside className="sidebar">
        <h2>📚 BookNest</h2>
        <ul>
          <li>All Books</li>
          <li>Fiction</li>
          <li>Mystery</li>
          <li>History</li>
          <li>Science</li>
        </ul>
      </aside>

      <div className="main">
        <header className="header">
          <h1>Welcome to BookNest</h1>
          <p>Your cozy digital bookstore 📖</p>
        </header>

        <section className="content">
          <h2>Top Picks</h2>
          <div className="books">
            <div className="book-card">
              <h3>It Ends With Us</h3>
              <p>by Colleen Hoover</p>
              <button>Buy</button>
            </div>
            <div className="book-card">
              <h3>Think Like a Monk</h3>
              <p>by Jay Shetty</p>
              <button>Buy</button>
            </div>
            <div className="book-card">
              <h3>Harry Potter</h3>
              <p>by J.K. Rowling</p>
              <button>Buy</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
