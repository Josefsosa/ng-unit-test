## Unit Testing AngularJS Isolate Directives

##### Testing Patterns

* [Suggested Setup](#suggested-directive-unit-test-setup-)
* When created
  * [should have expected isolated scope](#should-have-expected-isolated-scope-)
* When the model changes
  * *[pull request welcome!](../#contributing-test-patterns)*
* when destroyed
  * *[pull request welcome!](../#contributing-test-patterns)*

###### [Example](../example) implementation of these testing patterns

####Suggested Directive Unit Test Setup [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
describe('Directive: myDir2', function () {
  var element, scope, compile,
      validTemplate = '<my-dir2 data="someData"></my-dir2>';

  function createDirective(data, template) {
    var elm;
    
    // Setup scope state
    scope.someData = data;

    // Create directive
    elm = compile(template || validTemplate)(scope);

    // Trigger watchers
    //scope.$apply();

    // Return
    return elm;
  }

  beforeEach(function () {

    // Load the directive's module
    module('myApp');
    
    // Reset data each time
    defaultData = 42;
    
    // Provide any mocks needed
    module(function ($provide) {
      //$provide.value('Name', new MockName());
    });
    
    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      compile = $compile;
    });
  });

  describe('when created', function () {
    // Add specs
  });

  describe('when the model changes', function () {
    // Add specs
  });

  return describe('when destroyed', function () {
    // Add specs
  });
});
```

#### My directive should:


#####should have expected isolated scope [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should have expected isolated scope', function () {
  var data = 'this is the data';
  element = createDirective(data);
  var isolated = element.isolateScope();
  expect(isolated.data).toBe(data);
});
```


