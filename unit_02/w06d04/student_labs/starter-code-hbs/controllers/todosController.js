var express = require('express');
var todosRouter = express.Router();

todosRouter.get('/', function (req, res) {
  var seededTodos = [
    {
      description: "get beer",
      urgent: true
    }, {
      description: "dry cleaning",
      urgent: false
    }
  ];

  todosRouter.get('/show', function (req, res) {
    var seededTodos = [
      {
        description: "get beer",
        urgent: true
      }, {
        description: "dry cleaning",
        urgent: false
      }
    ];

    res.render('todos/index', {
      todos: seededTodos
    });
  });
});

module.exports = todosRouter;