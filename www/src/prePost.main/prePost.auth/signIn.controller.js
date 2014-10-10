(function() {
    function SignInCtrl(state, log, Auth, ionicPopup) {
        var _this = this;
        log.debug('sign in ctrl!!!');
        _this.register = function(email, password) {
            Auth.signIn(email, password).then(function(data) {
                log.debug('data in controller', data);
//                state.go('app.feed');
            }, function(data) {
                log.error(data);
                ionicPopup.alert({
                    title: 'error',
                    template: data
                });
            });
        };
    }
        SignInCtrl.$inject = ['$state', '$log', 'Auth', '$ionicPopup'];

    angular.module('prePost.auth')
        .controller('SignInCtrl', SignInCtrl)
}());