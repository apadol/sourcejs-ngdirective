'use strict';

define([
    'jquery',
    'sourceModules/module',
], function ($, module) {

    
    function Ngdirective() {
        this.init();
    }

    Ngdirective.prototype = module.createInstance();
    Ngdirective.prototype.constructor = Ngdirective;

    var ANGULAR_SOURCE_CLASS_NAME = '.source_example.source_ngdirective';

    Ngdirective.prototype.init = function () {

        function getAngularSourceElems(){
            var angularSourceElems = document.querySelectorAll(ANGULAR_SOURCE_CLASS_NAME);
            return (angularSourceElems.length === 0) ? null : angularSourceElems;
        }

        var generateSourceCodeWrapper = (function(){
            var codeElemEmpty = document.createElement('code');
            codeElemEmpty.setAttribute('class', 'src-html');
            codeElemEmpty.setAttribute('ng-non-bindable', '');
            return function(){
                return codeElemEmpty.cloneNode();
            };
        })();

        $(document).ready(function(){

            var angularSourceElems = getAngularSourceElems();

            if(!angularSourceElems){
                return; //no angular elements.
            }

            Array.prototype.forEach.call(angularSourceElems, function(angularSourceElem){
                var sourceCodeWrapper = generateSourceCodeWrapper();
                Array.prototype.forEach.call(angularSourceElem.children, function(child){
                    sourceCodeWrapper.appendChild(child.cloneNode());
                });
                angularSourceElem.parentElement.insertBefore(sourceCodeWrapper, angularSourceElem);
            });


        });
    };
    return new Ngdirective();
});