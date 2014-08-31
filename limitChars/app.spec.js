describe('test-app', function() {

  // Load the test-app module
  beforeEach(module('test-app'));

  describe('MainCtrl controller', function() {

    var mainCtrl, $scope, limitCharsMock;

    beforeEach(inject(function($controller, $rootScope) {

      // Store the scope for later
      $scope = $rootScope;

      // Mock out the limitChars function
      limitCharsMock = angular.noop;

      // Instantiate our controller, passing in the scope and services
      mainCtrl = $controller('MainCtrl', {
        $scope: $scope,
        limitChars: limitCharsMock
      });

    }));

    it('should attach the limitChars service to the scope', function() {

      // Note that the limitChars method is attached to the scope, not the controller
      expect($scope.limitChars).toBe(limitCharsMock);

    });

  });

  describe("limitChars", function() {

    it("should truncate the string at the specified limit",
        inject(function(limitChars) {

      expect(limitChars('A very long string', 10))
          .toEqual('A very ...');

    }));

  });
});