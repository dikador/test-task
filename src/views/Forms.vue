<template>
   <section class="form">
      <div class="container">
         <main-data @transferUser="transferUser" />
         <children-data
            @transferChildren="transferChildren"
            class="form__children"
         />

         <button @click="saveUser" type="button" class="button btn-blue">
            Сохранить
         </button>
      </div>
   </section>
</template>

<script>
import mainData from "@/components/form/mainData";
import childrenData from "@/components/form/childrenData";

export default {
   components: {
      mainData,
      childrenData,
   },

   data() {
      return {
         user: {},
      };
   },

   mounted() {
      const defaultUser = {
         name: "",
         age: "",
         childrens: [
            {
               name: "",
               age: "",
               id: 0,
            },
         ],
      };

      this.user = JSON.parse(localStorage.getItem("user")) || defaultUser;
   },

   methods: {
      transferUser(props) {
         this.user.name = props.name;
         this.user.age = props.age;
      },

      transferChildren(props) {
         this.user.childrens = props;
      },

      saveUser() {
         let err = 0;
         if (!this.user.name || !this.user.age) {
            return alert("Заполните имя и возраст");
         }
         this.user.childrens.forEach((element) => {
            if (!element.name || !element.age) {
               err++;
               alert("Заполните имя и возраст ребенка");
            }
         });

         if (err === 0) {
            localStorage.setItem("user", JSON.stringify(this.user));
            alert("Сохранено!");
         }
      },
   },
};
</script>

<style lang="scss">
.form {
   margin-top: 30px;

   .btn-blue {
      margin-top: 30px;
   }
}

.form__input {
   margin-top: 10px;
}

.form__children {
   margin-top: 30px;
}
</style>