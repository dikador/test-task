<template>
   <section class="preview">
      <div class="container">
         <h3 class="main-title">Персональные данные</h3>

         <h4 class="preview__name">{{ user.name }}, {{ user.age }} лет</h4>

         <div class="childrens">
            <h3 class="main-title">Дети</h3>

            <div
               v-for="children in user.childrens"
               :key="children.id"
               class="childrens__item"
            >
               {{ children.name }}, {{ children.age }} лет
            </div>
         </div>
      </div>
   </section>
</template>

<script>
export default {
   data() {
      return {
         user: [],
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
};
</script>

<style lang="scss" scoped>
.preview {
   margin-top: 30px;
}

.preview__name {
   margin-top: 20px;
   font-size: 16px;
   font-weight: 700;
}

.childrens {
   margin-top: 60px;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
}

.childrens__item {
   padding: 10px 20px;
   margin-top: 20px;
   font-size: 16px;
   line-height: 1.3em;
   background-color: #f1f1f1;
   font-weight: 700;
   display: inline-block;
}
</style>