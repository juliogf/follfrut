/**
 * Created by juliogf on 11-10-16.
 */

"use strict";
angular.module('Inicio',[])
    .controller('InicioCtrl', Controller);
function Controller($scope){
    var vm = this;
    vm.titulo = "Inicio";

    $('.slider').slider({full_width: true});

}

