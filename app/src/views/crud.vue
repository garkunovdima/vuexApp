<template>
  <div>
    <form action="">
      <div>
        <div class="h3">Заголовок</div>
        <my-input
          class="w-100"
          placeholder="Поле заголовка"
          inputType="text"
          @returnInput="returnInput"
          :value="editedPostHeader"
        ></my-input>
      </div>
      <div class="my-2">
        <label>
          <input type="checkbox" />
          указать дополнительных авторов
        </label>
      </div>
      <div>
        <textarea
          placeholder="Основной текст поста"
          rows="10"
          class="w-100"
          v-model="editedPostText"
        ></textarea>
      </div>
      <div class="my-2 text-end">
        <button class="btn btn-primary" @click="createPost">Create</button>
        <button class="ms-2 btn btn-success" @click="saveAndEditPost">
          Save
        </button>
        <button class="ms-2 btn btn-danger" @click="deletePost">Delete</button>
      </div>
    </form>
    <div v-for="post in posts" :key="post">
      <button @click="sendId(post.id, post.text, post.header)">Edit</button>
      Post id: {{ post.id }} by {{ post.author }}
      <hr />
    </div>
    <div>
      <span v-show="editedPostId || editedPostId === 0">
        {{ editedPostId }}
      </span>
    </div>
    <hr />
    <div v-for="post in posts" :key="post">
      <post :post="post" :class="{ red: post.my_post }"></post>
    </div>
  </div>
</template>

<script>
import Post from "../components/post.vue";
import myInput from "../components/ui/myInput.vue";

export default {
  name: "CRUD",
  components: {
    myInput,
    Post,
  },
  data() {
    return {
      editedPostId: null,
      editedPostText: "",
      editedPostHeader: "",
    };
  },
  computed: {
    myDate() {
      let date = new Date().toLocaleDateString();
      return date;
    },
    posts() {
      return this.$store.state.posts.posts;
    },
    getLength(){return this.$store.state.posts.posts.length}
  },
  methods: {
    sendId(id, text, header) {
      this.editedPostId = id;
      this.editedPostText = text;
      this.editedPostHeader = header;
    },
    createPost() {
      if (this.editedPostText == "") {
        alert("Заполните текст поста.");
      } else if (this.editedPostHeader == "") {
        alert("Не забудь про заголовок.");
      } else if (this.editedPostId != null) {
        alert("Сначала сохраните изменения.");
      } else {
        this.$store.dispatch("posts/createPost", {
          id: (new Date()).getTime(),
          author: this.$store.state.user.profileLink,
          header: this.editedPostHeader,
          text: this.editedPostText,
          date: new Date().toString(),
          likes: 0,
        });

        console.log("createPost in crud done");
        this.clearFields();
      }
    },
    deletePost() {
      if (
        (this.editedPostId && this.editedPostId != null) ||
        this.editedPostId === 0
      ) {
        this.$store.dispatch("posts/deletePost", this.editedPostId);
        console.log(`The post with id:${this.editedPostId} was deleted.`);
      } else if (this.posts.length > 0) {
        this.$store.dispatch("posts/deletePost", this.editedPostId);
        //this.$store.commit("deletePost", deletedId);
      } else {
        console.log("there is no more posts :'(");
      }
      this.clearFields();
    },
    saveAndEditPost() {
      this.posts.forEach((post) => {
        if (post.id == this.editedPostId && this.editedPostId != null) {
          this.$store.dispatch("posts/updatePost", {
            id: post.id,
            author: this.$store.state.user.profileLink,
            header: this.editedPostHeader,
            text: this.editedPostText,
            date: new Date().toString(),
          });
        }
      });
      if (!this.editedPostId && this.editedPostId == null) {
        alert("Выберете публикацию");
      } else {
        console.log("The post was successfully saved.");
        this.clearFields();
      }
    },
    returnInput(value) {
      console.log("returned by input", value);
      this.editedPostHeader = value;
    },
    clearFields() {
      this.editedPostId = null;
      this.editedPostText = "";
      this.editedPostHeader = "";
    },
  },
};
</script>
