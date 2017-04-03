/* jshint esversion:6 */
/* globals angular */

(function () {
    
    'use strict';
    
    angular.module('avtk-app')
    
        .config(function ($routeProvider) {
        
            $routeProvider
            
                .when('/', {
                    templateUrl: 'client/templates/home.tpl.html',
                    controller : 'avtkCtrl as vm'
                })
        
                .when('/about', {
                    templateUrl: 'client/templates/about.tpl.html',
                    controller : 'avtkCtrl as vm'
                })
        
                .when('/services', {
                    templateUrl: 'client/templates/services.tpl.html',
                    controller : 'avtkCtrl as vm'
                })
        
                .when('/quality', {
                    templateUrl: 'client/templates/quality.tpl.html',
                    controller : 'avtkCtrl as vm'
                })
        
                .when('/stock', {
                    templateUrl: 'client/templates/stock.tpl.html',
                    controller : 'avtkStockCtrl as vm'
                });        
        
        });
    
}());