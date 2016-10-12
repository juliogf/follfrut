angular.module('App', ['ui.router','ngMaterial','Inicio','Nosotros','Productos'])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/inicio');
        $stateProvider


            .state('inicio', {
                url: '/inicio',
                templateUrl: 'views/inicio/index.tpl.html'
            })


            .state('nosotros', {
                url: '/nosotros',
                templateUrl: 'views/nosotros/index.tpl.html'
            })

            .state('productos', {
                url: '/productos',
                templateUrl: 'views/productos/index.tpl.html'
            })

            .state('contacto', {
                url: '/contacto',
                templateUrl: 'views/contacto/index.tpl.html'
            })

    })

.run(function($rootScope,$state){
    //Scrolling automatico al TOP cambiar de estado
    $rootScope.$on('$stateChangeSuccess', function() {
               document.body.scrollTop = document.documentElement.scrollTop = 0;
    });

   });