//importo valori posts

const valoriPosts = require('./../posts')

//creo  rotte crud

// index
function index(req, res) {

    res.json(valoriPosts)
};

// show
function show(req, res) {

    //var per salvare id

    const idPosts = parseInt(req.params.id)

    //confronto il valore di id

    const post = valoriPosts.find(p => p.id === idPosts)
    
    res.json(post);
};

// store
function store(req, res) {
    res.send('Creazione nuovi postssss');
};

// update
function update(req, res) {
    res.send('Modifica integrale dei posts ' + req.params.id);
};

// modify
function modify(req, res) {
    res.send('Modifica parziale dei posts ' + req.params.id);
};

// destroy
function destroy(req, res){

    //trasformo id in numero
    const id = parseInt(req.params.id)
    
    //confronto id con post

    const postId = valoriPosts.find(post => post.id === id)

    //rimuovo valorePost dai post 
    valoriPosts.splice(valoriPosts.indexOf(postId), 1);

    //forzo status 204 secondo condizioni di rest

    res.sendStatus(204)
};

//rendo importabili da altri componenti queste rotte 

module.exports = {index , store, update, modify , destroy, show}