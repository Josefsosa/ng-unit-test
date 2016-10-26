(function() {
  'use strict';

  /**
   * @todo Complete the test
   * This example is test the user service.
   */
  describe('User Injector', function() {
    //Inject a specific ng module
    beforeEach(module('ngResource', function($provide) {
      $provide.value('fooVal', 42);
    }));

    it('should have ngResource defined', inject(function ($resource, fooVal) {
      expect($resource).toBeDefined;
      expect(fooVal).toBe(42);
    }));

    describe('service users', function() {
      //Inject a specific ng module
      beforeEach(module('ngResource'));

      it('should have ngResource defined', inject(function ($resource) {
        expect($resource).toBeDefined;
      }));
    });

    it('should have test', function () {
      expect(true).toBe(true);
    });
    });

    describe('Users factory', function() {
      it('has a dummy spec to test 2 + 2', function() {
        expect(2 + 2).toEqual(4);
      });
    });

})();
