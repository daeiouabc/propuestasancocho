(function(){
var sancochoApp = angular.module("sancochoApp", ['ngRoute']);


sancochoApp.controller('sancochoCtrl',function(){});

sancochoApp.controller('programacionCtrl', function ($scope, $http) {
 /* $http.get('/datos/programacion.json').success(function(data) {
    $scope.tabla = data.eventos;
   console.log($scope.tabla);
   
  });
*/
  $scope.tabla = [
        {
            "dia": "13",
            "hora": "03:00 p.m",
            "descripcion": "Encuentro en el parque de las palmas chiminangos"
        },
        {
            "dia": "13",
            "hora": "04:00 p.m",
            "descripcion": "Salida y recorrido del carnaval Sancocho Fest"
        },
        {
            "dia": "13",
            "hora": "03:00 p.m",
            "descripcion": "Llegada del carnaval obra de teatro 'Gallinas ciegas' Gestos Teatro (Tuluá)"
        },
        {
            "dia": "13",
            "hora": "03:00 p.m",
            "descripcion": "Don Champignon Concierto Monareta Latin (Tuluá)"
        },
        {
            "dia": "13",
            "hora": "03:00 p.m",
            "descripcion": "Presentación cirko pirata (Cali)",
            "lugar": ""
        }
    ];
    
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
                    when('/bienvenidos/', {
                        templateUrl: '/html/bienvenidos.html',
                        controller: 'sancochoCtrl'
                    }).
                    
                    otherwise({
                        redirectTo: '/'
                    });
        }]);
})();