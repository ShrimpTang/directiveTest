/**
 * Created by ShrimpTang on 2015/12/17.
 */
describe('Button directive', function () {
    var $compile, $rootScope;
    beforeEach(module('directive.button'));
    beforeEach(inject(function (_$compile_, _$rootScope_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));
    it('add btn class', function () {
        var element = $compile('<button></button>')($rootScope);
        expect(element.hasClass('btn')).toBeTruthy();
    });
    it('add size classes ', function () {
        var element = $compile('<button size="large"></button>')($rootScope);
        expect(element.hasClass('btn-large')).toBeTruthy();
    });

    it('添加submit 判断是否增加primary class', function () {
        var element = $compile('<button type="submit"></button>')($rootScope);
        expect(element.hasClass('btn-primary')).toBeTruthy();
    })
});