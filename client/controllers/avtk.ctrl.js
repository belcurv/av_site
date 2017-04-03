/* jshint esversion:6 */
/* globals angular */

(function () {
    
    'use strict';
    
    angular.module('avtk-app')
    
        .controller('avtkCtrl', [function () {
            
            var vm = this;
            
            vm.hello = 'Hello world';
            
        }]);
    
}());