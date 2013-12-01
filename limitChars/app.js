angular.module('test-app', [])

// Our limit chars function is nicely encapsulated in a service, which we can inject
.factory('limitChars', function() {
  return function limitChars(value, limit) {
    if ( value.length <= limit ) {
      return value;
    }
    return value.substr(0, limit - 3) + '...';
  };
})

.controller('MainCtrl', function($scope, limitChars) {

  // Attach our limitChars function to the scope
  $scope.limitChars = limitChars;
  
  // Handle the Update Message button click
  $scope.updateMessage = function updateMessage() {
    $scope.limitedMessage = $scope.limitChars($scope.message, $scope.limit);
  };
  
  // Initialize the scope with some data
  $scope.message = "This is a very long sentence, that goes on and on and on";
  $scope.limit = 15;
  
});