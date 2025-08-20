import React, { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../api/bookApi";

function BookList({ onSelect }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  return (
    <div
      className="card"
      style={{
        maxHeight: "400px",   // set desired height
        overflowY: "auto",    // enable vertical scroll
        padding: "10px"
      }}
    >
      <h2>📚 Book List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {books.map((b) => (
          <li
            key={b.id}
            style={{
              marginBottom: "10px",
              borderBottom: "1px solid #ccc",
              paddingBottom: "5px"
            }}
          >
            <strong>{b.title}</strong> by {b.author} ({b.published_year})
            <div style={{ marginTop: "5px" }}>
              <button onClick={() => onSelect(b.id)}>View</button>
              <button
                onClick={() => handleDelete(b.id)}
                style={{ marginLeft: "5px" }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
