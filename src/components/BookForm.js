import React, { useState } from "react";
import { createBook } from "../api/bookApi";

function BookForm() {
  const [form, setForm] = useState({ title: "", author: "", published_year: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBook(form);
    setForm({ title: "", author: "", published_year: "" });
    window.location.reload();
  };

  return (
    <div className="card">
      <h2>➕ Add Book</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
        />
        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
        />
        <input
          name="published_year"
          placeholder="Year"
          value={form.published_year}
          onChange={handleChange}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default BookForm;
