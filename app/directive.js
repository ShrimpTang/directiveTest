/**
 * Created by ShrimpTang on 2015/12/17.
 */
angular.module('directive.button', [])
    .directive('button', function () {
        return {
            restrict: 'E',
            compile: function (element, attrs) {
                element.addClass('btn');
                if (attrs.type == 'submit') {
                    element.addClass('btn-primary');
                }
                if (attrs.size) {
                    element.addClass('btn-' + attrs.size);
                }
            }
        }
    })
    .directive('accordion', function () {
        return {}
    });