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

      ionicModal.fromTemplateUrl('src/prePost.feed/image.html', {
          scope: scope
      }).then(function(modal) {
          scope.modal2 = modal;
      });

      scope.modal2Selected = function (postId) {
          scope.post = Posts.get(postId);
          scope.modal2.show();
      }
  }
    FeedCtrl.$inject = ['$log', 'Posts', '$scope','$ionicModal'];

  angular.module('prePost.feed')
    .controller('FeedCtrl', FeedCtrl);

}())