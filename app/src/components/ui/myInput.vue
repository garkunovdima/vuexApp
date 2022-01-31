<template>
    <input
      size="30"
      :type="inputType"
      :placeholder="placeholder"
      v-model="text"
      @change="returnValue(text)"
    />
</template>

<script>
//:value="text"
export default {
  name: "myInput",
  props: {
    inputType: { type: String, default: "text" },
    placeholder: { type: String, default: "myInput placeholder" },
    value: { default: "" },
  },
  data() {
    return {
      text: this.textT,
    };
  },
  computed:{
    textT(){
      return this.value;
    }
  },
  watch:{
    value(){this.text = this.value}
  },
  methods: {
    returnValue() {
      this.$emit("returnInput", this.text);
    },
  },
};
</script>
