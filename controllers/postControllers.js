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
    res.send('Creazione nuovi posts');
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
    res.send('Eliminazione dei posts ' + req.params.id);
};

//rendo importabili da altri componenti queste rotte 

module.exports = {index , store, update, modify , destroy, show}