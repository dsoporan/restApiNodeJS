const express = require('express');
const request = require('request');
const dataToFile = require('./fetchingData');
const fileManager = require("./fileManager");
var myParser = require("body-parser");
const path = require('path');


const app = express();

app.use(myParser.urlencoded({extended : true}));

//MIDDLEWARES
app.use('/posts/:postsChoice', (req, res) => {
    var choice = req.params.postsChoice;
    res.send(fileManager.readOneJsonObjectFromFile("posts.json", choice));
});

app.use('/users/:usersChoice', (req, res) => {
    var choice = req.params.usersChoice;
    res.send(fileManager.readOneJsonObjectFromFile("users.json", choice));
});

app.use('/comments/:commentsChoice', (req, res) => {
    var choice = req.params.commentsChoice;
    res.send(fileManager.readOneJsonObjectFromFile("comments.json", choice));
});

app.use('/todos/:todosChoice', (req, res) => {
    var choice = req.params.todosChoice;
    res.send(fileManager.readOneJsonObjectFromFile("todos.json", choice));
});

app.use('/posts', (req, res) => {
    res.send(fileManager.readJsonObjectFromFile("posts.json"));
});

app.use('/users', (req, res) => {
    res.send(fileManager.readJsonObjectFromFile("users.json"));
});

app.use('/comments', (req, res) => {
    res.send(fileManager.readJsonObjectFromFile("comments.json"));
});

app.use('/todos', (req, res) => {
    res.send(fileManager.readJsonObjectFromFile("todos.json"));
});

// ROUTES
app.get('/', (req, res) => {
   res.send('Home');
    dataToFile.getDataStart();
});

app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, 'posts.html'));
});

app.post('/post', (req, res) => {
    var obj = req.body;
    obj.id = fileManager.readJsonObjectFromFile("posts.json").length + 1;
    fileManager.appendJsonObjectToFile(obj, 'posts.json');
    res.sendFile(path.join(__dirname, 'posts.html'));
});

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname, 'users.html'));
});

app.post('/user', (req, res) => {
    var obj = req.body;
    obj.id = fileManager.readJsonObjectFromFile("users.json").length + 1;
    fileManager.appendJsonObjectToFile(obj, 'users.json');
    res.sendFile(path.join(__dirname, 'users.html'));
});

app.get('/comment', (req, res) => {
    res.sendFile(path.join(__dirname, 'comments.html'));
});

app.post('/comment', (req, res) => {
    var obj = req.body;
    obj.id = fileManager.readJsonObjectFromFile("comments.json").length + 1;
    fileManager.appendJsonObjectToFile(obj, 'comments.json');
    res.sendFile(path.join(__dirname, 'comments.html'));});

app.get('/todo', (req, res) => {
    res.sendFile(path.join(__dirname, 'todos.html'));
});

app.post('/todo', (req, res) => {
    var obj = req.body;
    obj.id = fileManager.readJsonObjectFromFile("todos.json").length + 1;
    fileManager.appendJsonObjectToFile(obj, 'todos.json');
    res.sendFile(path.join(__dirname, 'todos.html'));
});

app.listen(3000);