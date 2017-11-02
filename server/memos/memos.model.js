var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema definition
var memoSchema = new Schema({
  title: String,
  date: {
    creation: {
      type: Date,
      default: Date.now
    },
    due: Date
  },
  priority: Number,
  done: {
    type: Boolean,
    default: false
  }
});

// methods
memoSchema.methods.setDone = function () {
  this.done = !this.done;
};

// schema attachment
var Memo = mongoose.model('Memo', memoSchema);
module.exports = Memo;