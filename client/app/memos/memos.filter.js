angular.module('artoo').filter('done', function () {
  return function (input, search) {
    if (!input) { return; }
    if (search.done === 'all') { return input; }
    var output = input.filter(function (memo) {
      return memo.done === search.done;
    });
    return output;
  }
});