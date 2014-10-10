(function() {
    function SignInCtrl(state, log, Auth) {
        var _this = this;
        log.debug('sign in ctrl!!!');
        _this.register = function(email, password) {
            Auth.signIn(email, password).then(function(data) {
                log.debug('data in controller', data);
//                state.go('app.feed');
            });
        };
    }
        SignInCtrl.$inject = ['$state', '$log', 'Auth'];

    angular.module('prePost.auth')
        .controller('SignInCtrl', SignInCtrl)
}());