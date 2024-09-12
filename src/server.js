require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./db/connection");

const Book = require("./books/model") 

const bookRouter = require("./books/routes")

const app = express();

app.use(express.json());

connection();

app.use(bookRouter);



// shows all books on the db

// app.get("/books/allbooks", );

// app.get("/books", (request, response) => {
  
//     response.send({message: "success"});

//  });


// get all books on the db



// delete one book by title




// updating a document on db (a book) filter book by title

// app.put ("/books/updatebookbyauthor", async(request,response) =>{
//     const books = await Book.findOneAndUpdate({
//         title: request.body.title},
//         {author: request.body.author
   
//    });
//    response.send ({message: "success", updateBookByAuthor: author});
// });





app.listen(5000,() =>{
    console.log("server is listening on port 5000");
});
