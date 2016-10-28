## Complexity Threshold Enforcement for AngularJS

### JavaScript

#### Install Dependencies

* Install [grunt-complexity](https://github.com/vigetlabs/grunt-complexity) by running `npm install grunt-complexity --save-dev`

Then add a few lines to your grunt file to configure it ([full example](../example/Gruntfile.js)).

####Example
```JavaScript
// JavaScript
grunt.initConfig({
  // ...
  complexity: {
    js: {
      //list of source files to analyze
      src: ['javascript/*.js'],
      options: {
        // show only maintainability errors
        errorsOnly: false,
        // http://en.wikipedia.org/wiki/Cyclomatic_complexity
        cyclomatic: 8,
        // http://en.wikipedia.org/wiki/Halstead_complexity_measures
        halstead: 8,
        maintainability: 100
      }
    }
  }
  // ...
});
```

![screenshot](https://raw.github.com/vigetlabs/grunt-complexity/master/example.png)
![screenshot](https://raw.github.com/vigetlabs/grunt-complexity/master/complexity.png)

####Example
```JavaScript
// JavaScript
//TO DO update this configu to gulp


