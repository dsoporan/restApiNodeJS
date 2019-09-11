const fileManager = require("./fileManager");
const request = require('request');


module.exports = {
    getDataStart: () => {
        request({
                    url: "https://jsonplaceholder.typicode.com/posts",
                    json: true
                }, function (error, response, body){
            if (!error && response.statusCode === 200) {
                fileManager.saveJsonObjectToFile(body, "posts.json");
            }
        });

        request({
            url: "https://jsonplaceholder.typicode.com/users",
            json: true
        }, function (error, response, body){
            if (!error && response.statusCode === 200) {
                fileManager.saveJsonObjectToFile(body, "users.json");
            }
        });

        request({
            url: "https://jsonplaceholder.typicode.com/comments",
            json: true
        }, function (error, response, body){
            if (!error && response.statusCode === 200) {
                fileManager.saveJsonObjectToFile(body, "comments.json");
            }
        });

        request({
            url: "https://jsonplaceholder.typicode.com/todos",
            json: true
        }, function (error, response, body){
            if (!error && response.statusCode === 200) {
                fileManager.saveJsonObjectToFile(body, "todos.json");
            }
        });
    }
};