const Book = require("./model");

// add a book to the db
const addBook = async (request,response) =>{

    const book = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });
   
    response.send({message: "success", addBook: book});
};

// get all books on the db
const getAllBooks = async (request,response) => {
    const books = await Book.find({});
    
    response.send({message: "success", getAllBooks: books});
};

// delete one book by title
const deleteBookByTitle = async (request,response) => {
    const books = await Book.deleteOne({
         title: request.body.title,
 });
 
    response.send ({message: "success", deleteBookByTitle: books})
 
 };

// updating a document on db (a book) filter book by title
 const updateBookByAuthor = async(request,response) =>{
    const author = await Book.findOneAndUpdate({title: request.body.title}, 
        {author: request.body.author},{updateBookByAuthor});

        response.send ({message: "success", updateBookByAuthor: author});
   
   };
   
x

   

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    deleteBookByTitle: deleteBookByTitle,
    updateBookByAuthor: updateBookByAuthor,
    findAndReplace:findAndReplace,
};
