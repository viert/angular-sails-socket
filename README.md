angular-sails-socket
====================

Provides SailsSocket module with $socket service
wrapping io.socket object for use with angularjs

Simple just as angular $http!

Usage:
```javascript
  angular.module('YourApplication', ['SailsSocket'])
    .controller('YourController', function($scope, $socket) {

      $socket.on("someEvent", function(response) {
        console.log(response);
      });

      $socket.get("/path/to/api", function(response) {
        $scope.myData = response;
      });

    });
```
