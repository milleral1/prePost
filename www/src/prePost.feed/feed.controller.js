(function() {

  function FeedCtrl(log, Posts, scope, ionicModal) {
    var _this = this;
    log.debug('FeedCtrl!!!!');
    _this.posts = Posts.all();
    log.debug('posts', _this.posts);

    ionicModal.fromTemplateUrl('src/prePost.feed/votes.html', {
        scope: scope
    }).then(function(modal) {
        _this.modal = modal;
    });

      ionicModal.fromTemplateUrl('src/prePost.feed/image.html', {
          scope: scope
      }).then(function(modal) {
          _this.modal2 = modal;
      });

      _this.modal2Selected = function (postId) {
          _this.post = Posts.get(postId);
          _this.modal2.show();
      };

      _this.modalSelected = function (postId) {
          _this.post = Posts.get(postId);
          _this.modal.show();
      }
  }
    FeedCtrl.$inject = ['$log', 'Posts', '$scope','$ionicModal'];

  angular.module('prePost.feed')
    .controller('FeedCtrl', FeedCtrl);

}())