## Unit Testing AngularJS ControllersAs

##### Testing Patterns

* [Suggested Setup](#suggested-controller-as-unit-test-setup-)
* Data type
  * [Anything](#attach-mything-to-the-scope-)
  * [Array](#attach-myarray-to-the-scope-)
  * [Boolean](#attach-myboolean-to-the-scope-)
  * [Date](#attach-mydate-to-the-scope-)
  * [Method](#attach-mymethod-to-the-scope-)
  * [Null](#attach-mynull-to-the-scope-)
  * [Number](#attach-mynumber-to-the-scope-)
  * [Object](#attach-myobject-to-the-scope-)
  * [RegExp](#attach-myregexp-to-the-scope-)
  * [String](#attach-mystring-to-the-scope-)
  * [Undefined](#expect-myundefined-to-be-undefined-)
* Method use
  * [should return expected value](#mymethod-should-return-expected-value-)
  * [should call method in same controller](#call-mymethod2-on-myctrl-)
  * [should call method on a service](#call-mymethod-on-myservice-)
* Improve the test pattern?
  * *[pull request welcome!](../#contributing)*

###### [Example](../example) implementation of these testing patterns

####Suggested Controller As Unit Test Setup [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
describe('Controller: myCtrl2 as ctrl', function () {
  var myCtrl2, scope, mySvc;

  // Initialize the controller and scope
  beforeEach(function () {
    // Load the controller's module
    module('myApp');

    // Provide any mocks needed
    module(function ($provide) {
      $provide.value('mySvc', new MockMySvc());
    });

    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($controller, _mySvc_) {
      scope = {};
      mySvc = _mySvc_;
      myCtrl2 = $controller('myCtrl2 as ctrl', {
        $scope: scope
      });
    });

  });

  it('should exist', function () {
    expect(!!myCtrl2).toBe(true);
  });

  describe('when created', function () {
    // Add specs
  });

  describe('when destroyed', function () {
    // Add specs
  });
});
```

#### My controller should:

#####attach `myThing` to the scope [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should define a myThing property', function () {
  expect(scope.ctrl.myThing).toBeDefined();
});
```

#####attach `myArray` to the scope [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should provide a myArray property', function () {
  expect(scope.ctrl.myArray instanceof Array).toBe(true);
});
```

#####attach `myBoolean` to the scope [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should provide a boolean myBoolean property', function () {
  expect(typeof scope.ctrl.myBoolean).toBe('boolean');
});
```

#####attach `myDate` to the scope [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should provide a myDate property', function () {
  expect(scope.ctrl.myDate instanceof Date).toBe(true);
});
```

#####attach `myMethod` to the scope [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should provide a myMethod function', function () {
  expect(typeof scope.ctrl.myMethod).toBe('function');
});
```

#####attach `myNull` to the scope [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should provide a myNull property', function () {
  expect(scope.ctrl.myNull).toBe(null);
});
```

#####attach `myNumber` to the scope [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should provide a myNumber property', function () {
  expect(typeof scope.ctrl.myNumber).toBe('number');
});
```

#####attach `myObject` to the scope [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should provide a myObject property', function () {
  expect(scope.ctrl.myObject instanceof Object).toBe(true);
});
```

#####attach `myRegExp` to the scope [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should provide a myRegExp property', function () {
  expect(scope.ctrl.myRegExp instanceof RegExp).toBe(true);
});
```

#####attach `myString` to the scope [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should provide a myString property', function () {
  expect(typeof scope.ctrl.myString).toBe('string');
});
```

#####expect `myUndefined` to be undefined [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should expect myUndefined to be undefined', function () {
  expect(scope.ctrl.myUndefined).not.toBeDefined();
});
```

#####`myMethod` should return expected value [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('myMethod should return expected value', function () {
  var result = scope.ctrl.myMethod();
  expect(result).toBe('Not implemented');
});
```

#####call `myMethod2` on `myCtrl` [&#8593;](#testing-patterns)
Use to make sure one method is calling another.
```JavaScript
// JavaScript
it('should call myMethod2 from myMethod', function () {
  // PULL REQUEST WELCOME!
});
```

#####call `myMethod` on `mySvc` [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should call myMethod on mySvc', function () {
  expect(mySvc.myMethod.callCount).toBe(1);
  expect(mySvc.myMethod).toHaveBeenCalledWith(jasmine.any(Object));
});
```