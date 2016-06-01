'use strict';

define([
    'jquery',
    "source/load-options",
    'sourceModules/module',
], function ($, options, module) {

    options.exampleSectionClass = 'before-angular-bootstrap';
    
    function Ngdirective() {
        this.init();
    }

    Ngdirective.prototype = module.createInstance();
    Ngdirective.prototype.constructor = Ngdirective;

    Ngdirective.prototype.init = function () {
        var examples = $('.source_example');
        var examplesBefore = [];
        var appname = options.plugins.ngdirective.appname;

        examples.each(function(i,item){
            examplesBefore.push($(item).clone());
        });
        
        try{
            angular.bootstrap(document, [appname]);
        }
        catch(err){
            console.error('App name not defined or angular isnt loaded');
        }

        examples.each(function(i,item){
           $(item).after(
                $('<div></div>')
                .addClass(options.exampleSectionClass)
                .html(examplesBefore[i].html())
                .hide()
            );
        });
    };

    return new Ngdirective();
});