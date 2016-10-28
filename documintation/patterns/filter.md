## Unit Testing AngularJS Filters

##### Testing Patterns

* [Suggested Setup](#suggested-filter-unit-test-setup-)
* When evaluating an expression
  * [it should return the expected output](#return-the-expected-output-)
* Have a good pattern?
  * *[pull request welcome!](../#contributing-test-patterns)*

###### [Example](../example) implementation of these testing patterns

####Suggested Filter Unit Test Setup [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
describe('Filter: myFltr', function () {
  var myFltr;

  beforeEach(function () {
    // Load the filters's module
    module('myApp');

    // Provide any mocks needed
    module(function ($provide) {
      //$provide.value('Name', new MockName());
    });

    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($filter) {
      myFltr = $filter('myFltr');
    });
  });

  it('should exist', function () {
    expect(!!myFltr).toBe(true);
  });

  describe('when evaluating an expression', function () {
    // Add specs
  });
});
```

#### My filter should:

#####return the expected output [&#8593;](#testing-patterns)
```JavaScript
// JavaScript
it('should return the expected output', function () {
  var text = 'AngularJS';
  expect(myFltr(text)).toBe('my filter: ' + text);
});
```


