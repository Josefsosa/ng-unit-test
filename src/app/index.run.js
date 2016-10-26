(function() {
  'use strict';

  angular
    .module('ngUnitTest')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
