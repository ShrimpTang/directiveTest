angular.module('accordion', [])

    .controller('AccordionController', ['$scope', function ($scope) {
        this.groups = [];
        this.addGroup = function (groupScope) {
            var that = this;
            this.groups.push(groupScope);
            groupScope.$on('$destroy', function (e) {
                this.removeGroup(groupScope);
            })
        }
        this.removeGroup = function (groupScope) {
            var index = this.groups.indexOf(groupScope);
            if (index != -1) {
                this.groups.slice(index, 1);
            }
        }
        this.closeOthers = function (openGroup) {
            angular.forEach(this.groups, function (group) {
                if (group !== openGroup) {
                    group.isOpen = false;
                }
            })
        }
    }])

    .directive('accordion', function () {
        return {
            restrict: 'E',
            controller: 'AccordionController',
            link: function (scope, element, attrs) {
                element.addClass('accordion');
            }
        };
    })

    .directive('accordionGroup', function () {
        return {
            require: '^accordion',         // We need this directive to be inside an accordion
            restrict: 'E',                 // It will be an element
            transclude: true,              // It transcludes the contents of the directive into the template
            replace: true,                // The element containing the directive will be replaced with the template
            template: '<div class="accordion-group">\n    <div class="accordion-heading" ><a class="accordion-toggle" ng-click="isOpen = !isOpen">{{heading}}</a></div>\n    <div class="accordion-body" ng-show="isOpen">\n        <div class="accordion-inner" ng-transclude></div>\n    </div>\n</div>',
            scope: {heading: '@'},          // Create an isolated scope and mirror the heading attribute onto this scope
            link: function (scope, element, attrs, accordionCtrl) {
                accordionCtrl.addGroup(scope);
                scope.isOpen=false;
                scope.$watch('isOpen', function (newValue) {
                    if(newValue){
                        accordionCtrl.closeOthers(scope);
                    }
                })
            }
        };
    });
