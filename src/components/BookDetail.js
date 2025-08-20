import React, { useEffect, useState } from "react";
import { getBook, updateBook } from "../api/bookApi";

function BookDetail({ bookId}) {
  const [book, setBook] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ title: "", author: "", published_year: "" });

  useEffect(() => {
    if (bookId) fetchBook();
  }, [bookId]);

  const fetchBook = async () => {
    const res = await getBook(bookId);
    setBook(res.data);
    setForm(res.data); 
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateBook(bookId, form);
    setEditMode(false);
    fetchBook();
    window.location.reload();
  };

  if (!book) return null;

  return (
    <div className="card">
      {editMode ? (
        <form
          onSubmit={handleUpdate}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <input name="title" value={form.title} onChange={handleChange} />
          <input name="author" value={form.author} onChange={handleChange} />
          <input name="published_year" value={form.published_year} onChange={handleChange} />
          <button type="submit">💾 Save</button>
          <button type="button" onClick={() => setEditMode(false)}>❌ Cancel</button>
        </form>
      ) : (
        <>
          <h2>📖 Book Detail</h2>
          <p><b>Title:</b> {book.title}</p>
          <p><b>Author:</b> {book.author}</p>
          <p><b>Year:</b> {book.published_year}</p>
          <button onClick={() => setEditMode(true)}>✏️ Edit</button>
        </>
      )}
    </div>
  );
}

export default BookDetail;
