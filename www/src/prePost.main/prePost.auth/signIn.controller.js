(function() {
    function SignInCtrl(state, log) {
        var _this = this;
        log.debug('sign in ctrl!!!');
        _this.register = function() {
            state.go('app.feed');
        };
    }
        SignInCtrl.$inject = ['$state', '$log'];

    angular.module('prePost.auth')
        .controller('SignInCtrl', SignInCtrl)
}());