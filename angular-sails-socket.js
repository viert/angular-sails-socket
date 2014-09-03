/*
 * @script: angular-sails-socket.js
 * @author: Pavel Vorobyov <aquavitale@yandex.ru>
 *
 * Provides SailsSocket module with $socket service
 * wrapping io.socket object for use with angularjs
 *
 * Simple just as angular $http!
 *
 * Usage:
 *
 *   angular.module('YourApplication', ['SailsSocket'])
 *     .controller('YourController', function($scope, $socket) {
 *       
 *       $socket.on("someEvent", function(response) {
 *         console.log(response);
 *       });
 *
 *       $socket.get("/path/to/api", function(response) {
 *         $scope.myData = response;
 *       });
 *
 *     });
 *
*/
angular.module('SailsSocket', [])
    .service('$socket', [ '$rootScope', function($scope) {

        var get = function(path, data, callback) {
            if ("function" === typeof data) {
                callback = data;
                data = {};
            }
            io.socket.get(path, data, function(response) {
                callback(response);
                $scope.$apply();
            });
        };
        var post = function(path, data, callback) {
            if ("function" === typeof data) {
                callback = data;
                data = {};
            }
            io.socket.post(path, data, function(response) {
                callback(response);
                $scope.$apply();
            });
        };
        var put = function(path, data, callback) {
            if ("function" === typeof data) {
                callback = data;
                data = {};
            }
            io.socket.put(path, data, function(response) {
                callback(response);
                $scope.$apply();
            });
        };
        var del = function(path, data, callback) {
            if ("function" === typeof data) {
                callback = data;
                data = {};
            }
            io.socket.delete(path, data, function(response) {
                callback(response);
                $scope.$apply();
            });
        };
        var on = function(eventName, callback) {
            io.socket.on(eventName, function(response) {
                callback(response);
                $scope.$apply();
            })
        }

        return {
            get: get,
            post: post,
            put: put,
            delete: del,
            on: on
        }

    }]);
