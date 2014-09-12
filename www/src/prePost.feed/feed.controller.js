(function() {

  function FeedCtrl(log, Posts, scope, ionicModal) {
    log.debug('FeedCtrl!!!!');
    scope.posts = Posts.all();
    log.debug('posts', scope.posts);

    ionicModal.fromTemplateUrl('src/prePost.feed/votes.html', {
        scope: scope
    }).then(function(modal) {
        scope.modal = modal;
    });
  }

    FeedCtrl.$inject = ['$log', 'Posts', '$scope','$ionicModal'];

  angular.module('prePost.feed')
    .controller('FeedCtrl', FeedCtrl);

}())