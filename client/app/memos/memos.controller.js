angular.module('artoo').controller('MemosCtrl', function ($scope, $mdToast, Memos) {
  $scope.priorities = [{
    name: 'Low',
    value: 0
  }, {
    name: 'Medium',
    value: 1
  }, {
    name: 'High',
    value: 2
  }];
  
  $scope.minDate = new Date();
  
  $scope.dateFormat = 'dd/MM/yyyy';
  
  $scope.search = { done: 'all' };
  
  $scope.order = {
    sort: 'date.due'
  };
  
  $scope.memo = {
    priority: 1
  };
  
  var getFreshMemos = function () {
    $scope.loading = true;
    Memos.query().then(function (memos) {
      $scope.memos = memos.data;
    }).catch(function (err) {
      $mdToast.show($mdToast.simple().content('Error in loading the memos'));
    }).then(function () {
      $scope.loading = false;
    });
  };
  
  $scope.add = function (memo, addForm) {
    $scope.loading = true;
    Memos.add(memo).then(function () {
      $mdToast.show($mdToast.simple().content('Memo successfully added'));
    }).catch(function (err) {
      $mdToast.show($mdToast.simple().content('Error in adding the memo'));
    }).then(function () {
      getFreshMemos();
      $scope.memo = { priority: 1 };
      addForm.$setPristine();
    });
  };
  
  $scope.remove = function (memo) {
    Memos.remove(memo._id).then(function () {
      $mdToast.show($mdToast.simple().content('Memo successfully removed'));
    }).catch(function (err) {
      $mdToast.show($mdToast.simple().content('Error in removing the memo'));
    }).then(function () {
      getFreshMemos();
    });
  };
  
  $scope.done = function (memo) {
    Memos.done(memo._id).then(function () {
      $mdToast.show($mdToast.simple().content('Memo successfully done'));
    }).catch(function (err) {
      $mdToast.show($mdToast.simple().content('Error in modify the memo'));
    }).then(function () {
      getFreshMemos();
    });
  };
  
  getFreshMemos();
});