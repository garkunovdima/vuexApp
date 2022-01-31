import { createStore } from 'vuex'

export default createStore({
    state: {
        auth: {
            id: 0,
            link: "harkunovdmytro",
        },
        users: [{
                id: 0,
                name: "Harkunov Dmytro",
                link: "harkunovdmytro",
                email: "hd@gmail.com",
                password: "0000",
                sex: "male",
                ava: 'harkunovdmytro',
                lists: [
                    { name: "myList1", posts: [0, 1, 4] },
                    { name: "myList2", posts: [1, 2, 3] },
                    { name: "myList3", posts: [4, 2, 1] },
                ]
            },
            {
                id: 1,
                name: "Alex",
                link: 'alex',
                email: "vlad@gmail.com",
                password: "0000",
                sex: "male",
            },
            {
                id: 2,
                name: "Bert",
                link: 'bert',
                email: "lena@gmail.com",
                password: "0000",
                sex: "female",
            },
            {
                id: 3,
                name: "Grisha",
                link: 'grisha',
                email: "grisha@gmail.com",
                password: "0000",
                sex: "male",
            },
        ],
        posts: [{
                id: 0,
                author: "Harkunov Dmytro",
                authorLink: "harkunovdmytro",
                date: "November 23, 2016",
                header: "0How to make your company website based on bootstram framework on localhost?",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
                my_post: true,
                liked: false,
                saved: false,
            },
            {
                id: 1,
                author: "Grisha",
                authorLink: "grisha",
                header: "1How to make your company website based on bootstram framework on localhost?",
                date: "24-01-2022",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
                my_post: false,
                liked: true,
                saved: true,
            },
            {
                id: 2,
                author: "Bert",
                authorLink: "bert",
                header: "2How to make your company website based on bootstram framework on localhost?",
                date: "24-01-2022",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
                my_post: true,
                liked: true,
                saved: true,
            },
            {
                id: 3,
                author: "Alex",
                authorLink: "alex",
                header: "3How to make your company website based on bootstram framework on localhost?",
                date: "24-01-2022",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero ante, varius in nisl at, convallis sollicitudin nibh. Nunc in leo eget purus cursus accumsan. Aenean laoreet ultricies enim, sit amet suscipit ipsum dignissim quis. Nulla vehicula urna vitae mauris euismod commodo. Duis iaculis, velit in iaculis fringilla, mauris risus cursus leo, ut tincidunt lectus eros non ex. Aliquam erat volutpat. Suspendisse lacinia, orci quis feugiat finibus, velit ante varius eros, at congue justo ipsum at orci. Praesent condimentum tellus non lorem maximus feugiat.",
                my_post: false,
                liked: false,
                saved: false,
            },
            {
                id: 4,
                author: "Harkunov Dmytro",
                authorLink: "harkunovdmytro",
                header: "4How to make your company website based on bootstram framework on localhost?",
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
        },
        addUser(state, user) {
            console.log(`adding new user with name ${user.name}`);
            state.users.push(user);
            console.log("user added");
        },

    },
    actions: {},
    modules: {}
})