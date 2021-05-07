import axios from "axios";
const BaseUrl = "https://www.googleapis.com/books/v1/volumes?q="

export default {
  // Gets all books
  searchBooks: (query) => axios.get(BaseUrl + query),
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: (id) => axios.delete("api/books/" + id),
  // Saves a book to the database
  saveBook: (bookData) => axios.post("/api/books", bookData),
};
