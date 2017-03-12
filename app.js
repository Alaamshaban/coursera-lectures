function () {
  'use strict';
  angular.module('DIAPP',[])
  .controller('DICONTROLLER',DICONTROLLER);
  function DICONTROLLER($Scope) {
    $Scope.name="alaa";
  }
})();
