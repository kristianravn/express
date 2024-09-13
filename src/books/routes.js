const {Router} = require("express");
const bookRouter = Router();

const {addBook, updateBookByAuthor, getAllBooks, deleteBookByTitle, findAndReplace,} = require("./controllers");
const { findOneAndReplace } = require("./model");

// post
bookRouter.post("/books/addbook", addBook);
bookRouter.put("/books/updatebookbyauthor", updateBookByAuthor);
bookRouter.get("/books/getallbooks", getAllBooks);
bookRouter.delete("/books/deletebookbytitle", deleteBookByTitle);
bookRouter.put("/books/findandreplace",findAndReplace);
    
module.exports = bookRouter;