require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());



const connection = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB is working");
};

connection();



const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,

    },
    author: {
        type: String,
        required: true,
    },
    genre: {
        type: String,

    },
});

const Book = mongoose.model("book", bookSchema);


app.get("/books/allbooks",(request, response) =>{
    response.send({message: "success"});
 });

app.get("/books", (request, response) => {
  
    response.send({message: "success"});

 });

// app.post("/books/addbook", async (request,response) =>{

//     const book = await Book.create({
//         title: request.body.title,
//         author: request.body.author,
//         genre: request.body.genre,
//     });
   
//     response.send({message: "success", book: book});
// });

app.get("/books/getallbooks", async (request,response) => {
    const books = await Book.find({});
    
    response.send({message: "success", allbooks: books});
});

app.listen(5000,() =>{
    console.log("server is listening on port 5000");
});
