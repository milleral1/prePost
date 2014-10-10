(function() {
    function SignUpCtrl(state, log) {
        var _this = this;
        log.debug('sign up ctrl!!!');
    }
        SignUpCtrl.$inject = ['$state', '$log'];

    angular.module('prePost.auth')
        .controller('SignUpCtrl', SignUpCtrl)
}());
