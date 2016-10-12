/**
 * Created by juliogf on 11-10-16.
 */

"use strict";
angular.module('Nosotros',['ngMap'])
    .controller('NosotrosCtrl', Controller);
function Controller($scope,NgMap){
    var vm = this;
    NgMap.getMap().then(function(map) {
        console.log(map.getCenter());
        console.log('markers', map.markers);
        console.log('shapes', map.shapes);
    });

}