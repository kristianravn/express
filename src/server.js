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

app.get("/books/allbooks",(request, response) =>{
    response.send({message: "success"});
 });

app.get("/books", (request, response) => {
  
    response.send({message: "success"});

 });


// get all books on the db

app.get("/books/getallbooks", async (request,response) => {
    const books = await Book.find({});
    
    response.send({message: "success", allbooks: books});
});

// delete one book by title

app.delete("/books/deletebookbytitle", async (request,response) => {
   const books = await Book.deleteOne({
        title: request.body.title,

   
   });

   response.send ({message: "success", deletebookbytitle: books})

});


// updating a document on db (a book) filter book by title

app.put ("/books/updatebookbyauthor", async(request,response) =>{
    const books = await Book.updatebook({
        title: request.body.title,

   
   });
   response.send ({message: "success", updatebookbyauthor: books})
})





app.listen(5000,() =>{
    console.log("server is listening on port 5000");
});
