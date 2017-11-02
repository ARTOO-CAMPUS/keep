var Memo = require('./memos.model');

module.exports = function () {
  // business logic
  var add = function (req, res) {
    var memo = new Memo(req.body);
    memo.save().then(function () {
      res.status(201).send();
    }).catch(function (err) {
      res.status(500).send(err);
    });
  };
  
  var query = function (req, res) {
    Memo.find().exec().then(function (memos) {
      res.json(memos);
    }).catch(function (err) {
      res.status(500).send(err);
    });
  };
  
  var remove = function (req, res) {
    Memo.findByIdAndRemove(req.params.id).exec()
      .then(function () {
        res.status(200).send();
      })
      .catch(function (err) {
        res.status(500).send(err);
      });
  };
  
  var done = function (req, res) {
    Memo.findById(req.params.id).exec().then(function (memo) {
      memo.setDone();
      return memo.save();
    }).then(function () {
      res.status(200).send();
    }).catch(function (err) {
      res.status(500).send(err);
    });
  };
  
  // public API
  return {
    add: add,
    done: done,
    query: query,
    remove: remove
  };
};