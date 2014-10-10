(function () {
    angular.module('prePost.auth',[]);

    function Run() {

    }
        Run.$inject = [];

    function Config(stateProvider) {
        stateProvider
            .state('signIn',{
                url:'/signIn',
                templateUrl: "src/prePost.main/prePost.auth/signIn.html",
                controller: 'SignInCtrl as signIn'
            })

            .state('signUp',{
                url:'/signUp',
                templateUrl: "src/prePost.main/prePost.auth/signUp.html",
                controller: 'SignUpCtrl as signUp'
            })
    }
        Config.$inject = ['$stateProvider'];

    angular.module('prePost.auth')
        .run(Run)
        .config(Config)
}())
