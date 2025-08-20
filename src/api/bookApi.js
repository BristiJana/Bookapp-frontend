import axios from "axios";

// Set base URL of Django backend
const API = axios.create({
  baseURL: "https://bookapp-backend-7o3y.onrender.com/api/", 
});

export const getBooks = () => API.get("books/");
export const getBook = (id) => API.get(`books/${id}/`);
export const createBook = (data) => API.post("books/create/", data);
export const updateBook = (id, data) => API.put(`books/${id}/update/`, data);
export const deleteBook = (id) => API.delete(`books/${id}/delete/`);
export const importBook = (query) => API.post("books/import/", { q: query });
export const getBooksByYear = () => API.get("books/report/year/");
