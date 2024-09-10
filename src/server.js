const express = require("express");

const app = express();

app.use(express.json());


const fakeDB = [];

app.get("/books/allbooks",(request, response) =>{
    
    response.send({message: "success", books: fakeDB});
 });

app.get("/books", (request, response) => {
    const book = {
        title: "esv bible",
        author: "God",
        genre: "history",
    };
    response.send({message: "success", book: book});

 });

app.post("/books",(request,response) =>{
   
    fakeDB.push(request.body);
    response.send({message: '${request.body.title}has been added'});
});

app.listen(5000,() =>{
    console.log("server is listening on port 5000");
});
