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
        <button class="ms-2 btn btn-success" @click="savePost">Save</button>
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
    posts(){
      return this.$store.state.posts;
    }
  },
  methods: {
    sendId(id, text, header) {
      console.log(id);
      this.editedPostId = id;
      this.editedPostText = text;
      this.editedPostHeader = header;
      console.log("text", this.editedPostText);
    },
    createPost() {
      if (this.editedPostText == "") {
        alert("Заполните текст поста.");
      } else if (this.editedPostHeader == "") {
        alert("Не забудь про заголовок.");
      } else if (this.editedPostId != null) {
        alert("Сначала сохраните изменения.");
      } else {
        this.$store.commit('addPost',{
          id: this.posts[this.posts.length - 1].id + 1,
          header: this.editedPostHeader,
          text: this.editedPostText,
          date: this.myDate,
          author: "me",
          my_post: true,
          liked: false,
          saved: false,
        });

        console.log("New post created.");
        this.clearFields();
      }
    },
    deletePost() {
      let id = 0;
      let deletedId = this.posts.length - 1;

      if (
        (this.editedPostId && this.editedPostId != null) ||
        this.editedPostId === 0
      ) {
        this.posts.forEach((post) => {
          if (post.id == this.editedPostId && this.editedPostId != null) {
            deletedId = id;
            this.$store.commit('deletePost', deletedId);
          }
          id++;
        });
        console.log(`The post with id:${this.editedPostId} was deleted.`);
      } else if (this.posts.length > 0) {
        this.$store.commit('deletePost', deletedId);
      } else {
        console.log("there is no more posts :'(");
      }
      this.clearFields();
    },
    savePost() {
      this.posts.forEach((post) => {
        if (post.id == this.editedPostId && this.editedPostId != null) {
          post.text = this.editedPostText;
          post.header = this.editedPostHeader;

          this.posts.text = this.editedPostText;
          this.posts.header = this.editedPostHeader;
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
