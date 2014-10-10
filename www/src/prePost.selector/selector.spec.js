describe("prePost.feed", function() {
    var controller, log;

    // get the module that contains the service
    beforeEach(module('prePost.selector'));

    describe("feed controller", function() {
        beforeEach(inject(function ($rootScope, $controller, $injector) {
            var log = $injector.get('$log');
            controller = $controller('FeedCtrl', {
                'log': log
            });
        }));

        it('controller test', function() {
//            console.log(controller);
            expect(feedCtrl.test).toBe('dodo');
        });
    });
});
