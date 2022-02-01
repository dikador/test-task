<template>
   <div :class="{ active }" class="input-block">
      <input
         :value="modelValue"
         @input="updateInput"
         @focus="active = true"
         @blur="active = $event.target.value ? true : false"
         type="text"
      />

      <p>{{ placeholder }}</p>
   </div>
</template>

<script>
export default {
   name: "main-input",

   data() {
      return {
         active: false,
      };
   },

   props: {
      placeholder: {
         type: String,
      },
      modelValue: [String, Number],
   },

   methods: {
      updateInput(e) {
         this.$emit("update:modelValue", e.target.value);
      },
   },

   mounted() {
      this.active = this.$el.children[0].value ? true : false;
   },

   watch: {
      modelValue() {
         this.active = this.modelValue ? true : false;
      },
   },
};
</script>

<style lang="scss" scoped>
.input-block {
   position: relative;

   p {
      position: absolute;
      top: 50%;
      left: 16px;
      font-size: 14px;
      line-height: 1.2em;
      pointer-events: none;
      transform: translate(0, -50%);

      color: rgba(17, 17, 17, 0.48);
      transition: 0.2s;
   }

   &.active {
      p {
         transform: translate(0, 0%);
         top: 6px;
         font-size: 13px;
      }
   }
}

input {
   border: 1px solid #f1f1f1;
   border-radius: 4px;
   color: #111111;
   font-size: 14px;
   max-width: 100%;
   height: 56px;
   width: 100%;
   outline: none;
   padding: 16px 16px 0px 16px;
   transition: 0.2s;

   &:focus {
      border: 1px solid #cecece;
   }
}
</style>