(function() {

    function AuthService(http, q, log) {
        var user = null; //localstorage later
        var url = "http://192.168.10.52:3000";
        return {
            signIn: function(email, password) {
                var _this = this;
                var deferred = q.defer();
                http({
                    method: 'post',
                    url: url + '/sessions',
                    data: {
                        email: email,
                        password: password
                    }
                }).success(function(data) {
                    _this.setUser(data);
                    deferred.resolve(data);
                    log.debug('user signed in', data);
                }).error(function(msg, code) {
                    deferred.reject(msg);
                    log.error(msg, code)
                });

                return deferred.promise;
            },
            signUp: function() {

            },
            getUser: function() {
                return user;
            },
            setUser: function(userToBeSet) {
                user = userToBeSet;
            }
        }
    }
        AuthService.$inject = ['$http', '$q', '$log'];

    angular.module('prePost.auth')
        .factory('Auth', AuthService)

}());
