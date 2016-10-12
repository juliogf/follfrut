angular.module('App', ['ui.router','ngMaterial','Inicio','Nosotros'])

    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/inicio');
        $stateProvider

        // HOME STATES AND NESTED VIEWS ========================================
            .state('inicio', {
                url: '/inicio',
                templateUrl: 'views/inicio/index.tpl.html'
            })

            // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
            .state('nosotros', {
                url: '/nosotros',
                templateUrl: 'views/nosotros/index.tpl.html'
            })

    });