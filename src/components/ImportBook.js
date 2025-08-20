import React, { useState } from "react";
import { importBook } from "../api/bookApi";

function ImportBook() {
  const [query, setQuery] = useState("");

  const handleImport = async () => {
    await importBook(query);
    window.location.reload();
  };

  return (
    <div className="card">
      <h2>🌍 Import Book</h2>
      <input placeholder="Enter book title or author ..."  value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleImport}>Import</button>
    </div>
  );
}

export default ImportBook;
