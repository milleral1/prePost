(function() {

    function Posts() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var posts= [
            {
                user: {
                    name: 'alon miller',
                    image: 'http://www.jeremynoeljohnson.com/wp-content/uploads/2014/06/crazy_cat_3.jpg'
                },
                image: 'http://www.old-radio.info/wp-content/uploads/2014/09/cute-cat.jpg',
                created_at: '11/11/1111'
            },
            {
                user: {
                    name: 'yarden pardo',
                    image: 'http://www.jeremynoeljohnson.com/wp-content/uploads/2014/06/crazy_cat_3.jpg'
                },
                image: 'http://www.old-radio.info/wp-content/uploads/2014/09/cute-cat.jpg',
                created_at: '12/12/1212'
            },
            {
                user: {
                    name: 'guy oliel',
                    image: 'http://www.jeremynoeljohnson.com/wp-content/uploads/2014/06/crazy_cat_3.jpg'
                },
                image: 'http://www.old-radio.info/wp-content/uploads/2014/09/cute-cat.jpg',
                created_at: '11/2/35'
            }

        ];

        return {
            all: function() {
                return posts;
            },
            get: function(postId) {
                // Simple index lookup
                return posts[postId];
            }
        }
    }

    angular.module('prePost.services')
        .factory('Posts', Posts)

}())