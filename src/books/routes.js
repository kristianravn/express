const {Router} = require("express");
const bookRouter = Router();

const {addBook, updateBookByAuthor, getAllBooks, deleteBookByTitle} = require("./controllers");

// post
bookRouter.post("/books/addbook", addBook);
bookRouter.put("/books/updatebookbyauthor", updateBookByAuthor);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.delete("/books/deletebookbytitle", deleteBookByTitle);

module.exports = bookRouter;