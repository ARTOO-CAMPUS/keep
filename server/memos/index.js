var express = require('express');
var controller = require('./memos.controller')();
var memos = express.Router();

memos.get('/', controller.query);
memos.post('/', controller.add);
memos.delete('/:id', controller.remove);
memos.put('/done/:id', controller.done);

module.exports = memos;