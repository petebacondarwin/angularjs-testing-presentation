describe('MainCtrl controller', function() {

  var mainCtrl, $scope, limitCharsSpy;
  
  // Load the test-app module
  beforeEach(module('test-app'));

  beforeEach(inject(function($controller, $rootScope) {
    
    // Create a new child scope (we could have simply used the $rootScope)
    $scope = $rootScope.$new();
    
    // Mock out the limitChars function
    limitCharsSpy = jasmine.createSpy('limitChars').andReturn('XXX');
    
    // Instantiate our controller, passing in the scope
    mainCtrl = $controller('MainCtrl', { $scope: $scope, limitChars: limitCharsSpy });
    
  }));


  
  it('should attach the limitChars service to the scope', function() {
    
    // Note that the limitChars method is attached to the scope, not the controller
    expect($scope.limitChars).toBe(limitCharsSpy);
  
  });
  

  
  
  describe('updateMessage method', function() {
  
    it('should update the limitedMessage with XXX', function() {
      $scope.updateMessage();
      expect(limitCharsSpy).toHaveBeenCalledWith($scope.message, $scope.limit);
      expect($scope.limitedMessage).toEqual('XXX');
    });

  });
});