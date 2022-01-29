<template>
  <div class="tests">
    <div></div>
    <div class="">
      <h1>Tests</h1>
      <div>
        <h2>Синтаксис шаблонов</h2>
        <div>
          <span>Сообщение: {{ msg }}</span
          ><br />
          <input type="text" v-model="msg" />
        </div>

        <div>
          <h3>v-once</h3>
          <span v-once>Это сообщение никогда не изменится: {{ msg1 }}</span
          ><br />
          <input type="text" v-model="msg1" />
        </div>

        <div>
          <h3>v-html</h3>
          <p>Двойные фигурные скобки: {{ rawHtml }}</p>
          <p>Директива v-html: <span v-html="rawHtml"></span></p>
        </div>

        <div>
          <h3>Динамические аттрибуты</h3>
          <div>
            <h3>v-bind</h3>
            <label for="">
              <input type="checkbox" v-model="boolka" />
              <span v-bind:class="boolka ? 'red' : ''">
                Хочу быть красным :'(
              </span> </label
            ><br />
            <input
              type="text"
              v-bind:disabled="boolka"
              placeholder="Изменяем свойство disabled"
              size="25"
            />
          </div>
        </div>

        <div>
          <h3>Директивы v-...</h3>
          <div>
            <label>
              <input type="checkbox" v-model="boolka1" />
              {{ boolka1 ? "  Видно" : "  Не видно" }}</label
            >
          </div>
          <div v-if="boolka1">Изменим видимость текста</div>
        </div>

        <div>
          <h3>Аргументы</h3>
          <h4>v-bind:href</h4>
          <label>
            <input type="checkbox" v-model="boolka2" />
            {{ boolka2 ? "  ВКЛ" : "  ВЫКЛ" }}</label
          >

          <a v-bind:href="boolka2 ? '' : 'reg'">
            Ссылка на
            {{ boolka2 ? "домашнюю страницу" : "страницу регистрации" }}
          </a>
          <h4>v-on</h4>
          <div
            style="height: 50px; background: yellow; text-align: center"
            v-on:mouseover="hi"
          >
            Наведи на меня курсор!
          </div>
        </div>

        <div>
          <h3>Динамические аргументы</h3>
          <div>
            <label>
              <input type="checkbox" v-model="boolka3" @click="changeProp" />
              {{
                boolka3 ? "  событие на наведение мыши" : "  событие на клик"
              }}</label
            >
          </div>
          <button v-on:[prop]="hi">Непростая кнопка :)</button>
        </div>

        <div>
          <h3>Модификаторы v-on:событие.модификатор</h3>
          <div>
            normal: <input type="text" v-model="text_norm" /> {{ text_norm
            }}<br />
            number: <input type="text" v-model.lazy="text_lazy" />{{ text_lazy
            }}<br />
            lazy: <input type="text" v-model.lazy="text_num" />{{ text_num
            }}<br />
            trim: <input type="text" v-model.lazy="text_trim" />{{ text_trim
            }}<br />
          </div>
        </div>

        <div>
          <h3></h3>
          <div>
            <strong>Список покупок</strong><br />
            <input
              type="text"
              v-model="newToBuyItem"
              @keyup.enter="pushToBuy"
            />
            <button @click="pushToBuy">Добавить в список</button><br />
            <input type="text" v-model="itemNum" @keyup.enter="pushToBuy" />
            <button @click="removeToBuy">Удалить номер в списке</button>
            <ul style="list-style: none">
              <li v-for="item in toBuy" :key="item">
                {{ item.id }}) {{ item.label }}
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3>Computed методы</h3>
          <div>
            <div id="computed-basics">
              <p>Есть опубликованные книги:</p>
              <label>
                <input type="checkbox" v-model="bookShow" />
                Показать результат </label
              ><br />
              <span>Ответ: {{ publishedBooksMessage }}</span>
              <ul v-if="bookShow">
                <li v-for="book in author.books" :key="book">{{ book }}</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3></h3>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import feed from "@/components/feed.vue";
//import dialog_win from "@/components/ui/dialog_win.vue";

export default {
  name: "Tests",
  components: {},
  data() {
    return {
      msg: "Мой текст сообщения.",
      msg1: "благодаря v-once!",
      rawHtml: '<span style="color: red">This should be red.</span>',
      boolka: false,
      boolka1: false,
      boolka2: false,
      boolka3: false,
      bookShow: true,
      prop: "click",
      text_norm: null,
      text_lazy: null,
      text_num: null,
      text_trim: null,
      newToBuyItem: "",
      itemNum: null,
      toBuy: [
        { id: 1, label: "1kg of tomatos" },
        { id: 2, label: "0,5kg of cucumbers" },
        { id: 3, label: "1,7kg of onions" },
      ],
      author: {
        name: "John Doe",
        books: [
          "Vue 2 - Advanced Guide",
          "Vue 3 - Basic Guide",
          "Vue 4 - The Mystery",
        ],
      },
    };
  },
  computed: {
    publishedBooksMessage() {
      // `this` указывает на экземпляр vm
      return this.author.books.length > 0 ? "Да" : "Нет";
    },
  },
  methods: {
    pushToBuy() {
      this.toBuy.push({ id: this.toBuy.length + 1, label: this.newToBuyItem });
      this.newToBuyItem = "";
    },
    removeToBuy() {
      if (this.itemNum == null) this.toBuy.pop();
      else if (this.itemNum < this.toBuy.length)
        this.toBuy.splice(this.itemNum, 1);
      else alert("Такого номера нет");
      this.itemNum = null;
    },
    hi() {
      alert("hi, you hovered!");
    },
    changeProp() {
      console.log(this.prop);
      if (this.prop == "click") this.prop = "mouseover";
      else this.prop = "click";
    },
  },
};
</script>

<style scoped>
h1,
h2,
h3,
h4 {
  text-align: center;
  margin-bottom: 20px;
}

.tests > div > div > div {
  border: 1px solid orange;
  border-radius: 15px;
  margin: 20px 0;
  padding: 10px 20px;
}
.red {
  color: red;
}
</style>
