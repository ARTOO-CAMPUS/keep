angular.module('artoo').factory('Memos', function ($http) {

  // business logics
  var add = function (memo) {
    return $http({
      method: 'POST',
      url: '/api/memos/',
      data: memo
    })
  }
  
  var query = function () {
    return $http({
      method: 'GET',
      url: '/api/memos/',
    })
  }
  
  var remove = function (id) {
    return $http({
      method: 'DELETE',
      url: '/api/memos/'+id,
    })
  }
  
  var done = function (id) {
    return $http({
      method: 'PUT',
      url: '/api/memos/done/'+id,
    })
  }
  
  // public API
  return {
    add: add,
    done: done,
    query: query,
    remove: remove
  };
});