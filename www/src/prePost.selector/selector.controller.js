(function() {

  function SelectorCtrl(log) {
    log.debug('Selector Controller!!!');
    this.test = 'dodo';
  }

    SelectorCtrl.$inject = ['$log'];

  angular.module('prePost.selector')
    .controller('SelectorCtrl', SelectorCtrl)

}())