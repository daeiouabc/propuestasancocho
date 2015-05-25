(function(){
var sancochoApp = angular.module("sancochoApp", ['ngRoute']);


sancochoApp.controller('sancochoCtrl',function(){});

sancochoApp.controller('programacionCtrl', function ($scope, $http) {
  $http.get('/datos/programacion.json').success(function(data) {
    $scope.todo = data;
    console.log($scope.todo);
  });
});


sancochoApp.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                    when('/fest/', {
                        templateUrl: '/html/festival.html',
                        controller: 'sancochoCtrl'
                    }).
                    when('/programacion/', {
                        templateUrl: '/html/programacion.html',
                        controller: 'programacionCtrl'
                    }).
                    when('/pasados/', {
                        templateUrl: '/html/pasados.html',
                        controller: 'sancochoCtrl'
                    }).
                    when('/organiza/', {
                        templateUrl: '/html/organizadores.html',
                        controller: 'sancochoCtrl'
                    }).
                    when('/patrocinadores/', {
                        templateUrl: '/html/patrocinadores.html',
                        controller: 'sancochoCtrl'
                    }).
                    when('/contacto/', {
                        templateUrl: '/html/contacto.html',
                        controller: 'sancochoCtrl'
                    }).
                    when('/', {
                        templateUrl: '/html/bienvenidos.html',
                        controller: 'sancochoCtrl'
                    }).
                      when('/bienvenidos', {
                          templateUrl: '/html/bienvenidos.html',
                          controller: 'sancochoCtrl'
                      }).

                    otherwise({
                        redirectTo: '/error'
                    });
        }]);
})();
