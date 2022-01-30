import { createStore } from 'vuex'

export default createStore({
    state: {
        users: [{
                id: 0,
                name: "Vlad",
                email: "vlad@gmail.com",
                password: "0000",
                sex: "male",
            },
            {
                id: 1,
                name: "Lena",
                email: "lena@gmail.com",
                password: "0000",
                sex: "female",
            },
            {
                id: 2,
                name: "Grisha",
                email: "grisha@gmail.com",
                password: "0000",
                sex: "male",
            },
        ],
        posts: [{
                id: 0,
                author: "Not your business",
                date: "November 23, 2016",
                header: "How to make your company website based on bootstram framework on localhost?",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
                my_post: true,
                liked: false,
                saved: false,
            },
            {
                id: 1,
                author: "Alex",
                header: "How to make your company website based on bootstram framework on localhost?",
                date: "24-01-2022",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
                my_post: false,
                liked: true,
                saved: true,
            },
            {
                id: 2,
                author: "Bert",
                header: "How to make your company website based on bootstram framework on localhost?",
                date: "24-01-2022",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
                my_post: true,
                liked: true,
                saved: true,
            },
            {
                id: 3,
                author: "Hush",
                header: "How to make your company website based on bootstram framework on localhost?",
                date: "24-01-2022",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
                my_post: false,
                liked: false,
                saved: false,
            },
        ]
    },
    mutations: {
        deletePost(state, id) {
            console.log(`state.posts.splice(${id}, 1); post deleted`, state.posts[id]);
            console.log(state.posts[id]);
            state.posts.splice(id, 1);
        },
        addPost(state, post) {
            console.log(`adding new post with id ${post.id}`);
            state.posts.push(post);
            console.log("post added");
        }
    },
    actions: {},
    modules: {}
})