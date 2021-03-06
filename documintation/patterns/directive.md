## Unit Testing AngularJS Directives

##### Testing Patterns

* [Suggested Setup](#suggested-directive-unit-test-setup-)
* When created
  * [should throw error when ngModel attribute not defined](#throw-error-when-ngmodel-attribute-not-defined-)
  * [should render the expected output](#render-the-expected-output-)
* When the model changes
  * *[pull request welcome!](../#contributing-test-patterns)*
* when destroyed
  * *[pull request welcome!](../#contributing-test-patterns)*

###### [Example](../example) implementation of these testing patterns

####Suggested Directive Unit Test Setup [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
describe('Directive: myDir', function () {
  var element, scope, compile, defaultData,
      validTemplate = '<my-dir ng-model="data"></my-dir>';

  function createDirective(data, template) {
    var elm;
    
    // Setup scope state
    scope.data = data || defaultData;

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

  describe('when destroyed', function () {
    // Add specs
  });
});
```

#### My directive should:

#####throw error when ngModel attribute not defined [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should throw error when ngModel attribute not defined', function () {
  function invalidTemplate() {
    createDirective(null, '<my-dir></my-dir>');
  }
  // Note: older versions of Angular throw this error as: 'No controller: ngModel'
  // More recently it is: Controller 'ngModel', required by directive 'myDir', can't be found!
  expect(invalidTemplate).toThrow();
});
```

#####render the expected output [&#8593;](#testing-patterns)

```JavaScript
// JavaScript
it('should render the expected output', function () {
  element = createDirective();
  expect(element.text()).toBe('this is my directive');
});
```


