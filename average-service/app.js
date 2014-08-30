
angular.module('average-app', [])

.factory('average', function() {

  return function average(values) {

    if ( !angular.isArray(values) ) {
      throw new Error('invalid parameter `values`');
    }

    // Check if it is empty
    var count = values.length;
    if ( count === 0 ) {
      return 0;
    }

    // Calculate average
    var sum = 0;
    for(var index=0; index < count; index++) {
      sum = sum + values[index];
    }
    return sum / count;

  };
});