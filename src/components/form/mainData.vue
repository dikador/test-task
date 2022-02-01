<template>
   <div>
      <h3 class="main-title">Персональные данные</h3>
      <main-input
         @input="transferUser"
         v-model="name"
         class="form__input"
         placeholder="Имя"
      />
      <main-input
         @input="transferUser"
         v-model="age"
         class="form__input"
         placeholder="Возраст"
      />
   </div>
</template>

<script>
export default {
   data() {
      return {
         name: "",
         age: "",
      };
   },

   mounted() {
      this.name = JSON.parse(localStorage.getItem("user"))?.name || "";
      this.age = JSON.parse(localStorage.getItem("user"))?.age || "";
   },

   methods: {
      transferUser() {
         this.name = this.name.replace(/[^a-zа-яё]/gi, "");
         this.age = this.age.replace(/[^0-9]/gi, "");

         this.$emit("transferUser", {
            name: this.name,
            age: this.age,
         });
      },
   },
};
</script>

<style lang="scss" scoped>
h3 {
   margin-bottom: 20px;
}
</style>