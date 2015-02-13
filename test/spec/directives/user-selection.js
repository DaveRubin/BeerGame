'use strict';

describe('Directive: userSelection', function () {

  // load the directive's module
  beforeEach(module('beerGameApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<user-selection></user-selection>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the userSelection directive');
  }));
});
