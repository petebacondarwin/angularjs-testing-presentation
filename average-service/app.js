angular.module('average-app', [])

.factory('average', function() {
  return function average(values) {
    
    // Check if values is an array
    if ( Object.prototype.toString.apply(values) !== '[object Array]' ) {
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