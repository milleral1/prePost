(function() {

    function Posts() {
        // Might use a resource here that returns a JSON array

        // Some fake testing data
        var posts= [
            {
                user: {
                    name: 'alon miller',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'
                },
                image: 'http://www.old-radio.info/wp-content/uploads/2014/09/cute-cat.jpg',
                created_at: '11/11/1111',
                yes: [
                    {
                            name: 'ido',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                            name: 'alon',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                            name: 'yarden',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    }


                ],
                no: [
                    {

                            name: 'guy',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                            name: 'yosi',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                            name: 'bruria',
                            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    }
                ]

            },
            {
                user: {
                    name: 'yarden pardo',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'
                },
                image: 'http://www.old-radio.info/wp-content/uploads/2014/09/cute-cat.jpg',
                created_at: '12/12/1212',
                yes: [
                    {
                        name: 'ido',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                        name: 'alon',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                        name: 'yarden',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    }


                ],
                no: [
                    {

                        name: 'guy',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                        name: 'yosi',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                        name: 'bruria',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    }
                ]
            },
            {
                user: {
                    name: 'guy oliel',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'
                },
                image: 'http://www.old-radio.info/wp-content/uploads/2014/09/cute-cat.jpg',
                created_at: '11/2/35',
                yes: [
                    {
                        name: 'ido',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                        name: 'alon',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                        name: 'yarden',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    }


                ],
                no: [
                    {

                        name: 'guy',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                        name: 'yosi',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    },
                    {

                        name: 'bruria',
                        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_2Ilm21O2pZdu0AZa7EgVvIu9Jdt-a8NEJVomLkelcpo37Uu2YA'


                    }
                ]
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