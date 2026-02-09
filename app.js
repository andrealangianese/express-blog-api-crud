//richiamo express e la porta 

const express = require("express");
const app = express();
const port = 3000

//importo il router dei post salvandolo in una var

const routerPosts = require('./routers/posts')


// attivazione della cartella public per uso file statici
app.use(express.static('public'));

//chiamata

app.get("/", (req, res) => {
    res.send("dubug")
})

//istanza per rendere utilizzabili le rotte per posts

app.use('/posts' ,routerPosts)



app.listen(port, () => {
    console.log(`sono la porta in ascolto numero ${port}`);

})