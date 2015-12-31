describe('accordion', function () {
    var $scope;

    beforeEach(module('accordion'));

    beforeEach(inject(function ($rootScope) {
        $scope = $rootScope;
    }));

    describe('controller', function () {
        var ctrl, $attrs;
        beforeEach(inject(function ($controller) {
            $attrs = {};
            ctrl = $controller('AccordionController', {$scope: $scope, $attrs: $attrs});
        }));
        describe('addGroup', function () {
            it('adds ', function () {

            })
        })
    });

});
