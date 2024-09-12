const Book = require("./model");

const addBook = async (request,response) =>{

    const book = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });
   
    response.send({message: "success", addBook: book});
};


const getAllBooks = async (request,response) => {
    const books = await Book.find({});
    
    response.send({message: "success", getAllBooks: books});
};

const deleteBookByTitle = async (request,response) => {
    const books = await Book.deleteOne({
         title: request.body.title,
 
    
    });
 
    response.send ({message: "success", deleteBookByTitle: books})
 
 };

 const updateBookByAuthor = async(request,response) =>{
    const author = await Book.findOneAndUpdate({title: request.body.title}, 
        {author: request.body.author},{updateBookByAuthor});
        response.send ({message: "success", updateBookByAuthor: author});
   
   };
   





module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    deleteBookByTitle: deleteBookByTitle,
    updateBookByAuthor: updateBookByAuthor,

};
