import React, { useState } from "react";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";
import BookDetail from "./components/BookDetail";
import ImportBook from "./components/ImportBook";
import ReportChart from "./components/ReportChart";
import "./App.css";

function App() {
  const [selectedBookId, setSelectedBookId] = useState(null);

  return (
    <div className="container">
      <h1>📚 Book Management App</h1>
      <div className="grid">
        <BookList onSelect={setSelectedBookId} />
        <BookForm />
        <ImportBook/>
        <ReportChart />
        <BookDetail bookId={selectedBookId} />
      </div>
    </div>
  );
}

export default App;
