const express = require ('express');
const mongoose = require ('mongoose');
const router =  require ('./routes/book-routes')
const cors = require('cors');

const app = express();

//middle ware
app.use(express.json());
app.use(cors());
app.use('/books',router);


mongoose.connect("mongodb+srv://admin:admin@cluster0.uaxj8yg.mongodb.net/test"
).then(() =>console.log( "connected Database"))
.then(()=>{
    app.listen(5000)
})
.catch((err)=> console.log(err));