describe("prePost.feed", function() {
    var scope, feedCtrl, posts, log, ionicModal;

    // get the module that contains the service
    beforeEach(module('prePost.feed'));

    // jasmine matcher
    beforeEach(function() {
        this.addMatchers({
            toBeArray: function() {
                return {
                    compare: function(actual, expected) {
                        return {
                            pass: actual.constructor == Array
                        };
                    }
                };
            }
        });
    });

    describe("feed controller", function() {
        beforeEach(inject(function ($rootScope, $controller, $injector) {
            posts = $injector.get('Posts');
            log = $injector.get('$log');
            ionicModal = $injector.get('$ionicModal');
            scope = $rootScope.$new();
            feedCtrl = $controller('FeedCtrl', {
                'Posts': posts,
                'scope': scope,
                'log': log,
                'ionicModal': ionicModal
            });
        }));

        it('controller.posts', function() {
//            console.log(controller);
            expect(feedCtrl.posts).toBeArray();
        });
    });
});
