// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    res.sendFile(__dirname + '/public/index.html');
});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
//create route to handle GET request for all pets
//connect to the data base
//return pets as JSON response
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.json(pets);
});

// get pet by owner with query string
//create route to handle GET for request by owner name
//extract owner name from request params
//connect to database
//reuturn list of pets as JSON
//case handle for no owner for pets 
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    const { owner } = req.query;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response
    res.json(pet);
});

// get pet by name
//create route to handle GET request for get pet by name
//Extract pet name from request params
//connect to Database
//query to retrieve pet with specified name
//return pet as JSON
//case handle for pet not found
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request
    const { name } = req.params;

    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response
    res.json(pet);
});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;