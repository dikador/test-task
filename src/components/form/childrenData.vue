<template>
   <div class="childrens">
      <div class="childrens__top">
         <h3 class="main-title">Дети (макс. 5)</h3>
         <button
            v-if="childrens.length < 5"
            @click="createChildren"
            class="button btn-transparent"
         >
            Добавить ребенка
         </button>
      </div>
      <div class="childrens__body">
         <div
            v-for="children of childrens"
            :key="children.id"
            class="childrens__block"
         >
            <main-input
               @input="transferChildren(children)"
               v-model="children.name"
               class="form__input"
               placeholder="Имя"
            />
            <main-input
               @input="transferChildren(children)"
               v-model="children.age"
               class="form__input"
               placeholder="Возраст"
            />
            <button
               @click="deleteChildren(children.id)"
               type="button"
               class="btn-text"
            >
               Удалить
            </button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         childrens: [],
      };
   },

   mounted() {
      const defaultChidlrens = [
         {
            name: "",
            age: "",
            id: 0,
         },
      ];

      this.childrens =
         JSON.parse(localStorage.getItem("user"))?.childrens ||
         defaultChidlrens;
   },

   methods: {
      createChildren() {
         if (this.childrens.length < 5) {
            this.childrens.push({
               name: "",
               age: "",
               id: this?.childrens?.[this.childrens.length - 1]?.id + 1 || 0,
            });
            this.$emit("transferChildren", this.childrens);
         }
      },

      transferChildren(children) {
         children.name = children.name.replace(/[^a-zа-яё]/gi, "");
         children.age = children.age.replace(/[^0-9]/g, "");
         this.$emit("transferChildren", this.childrens);
      },

      deleteChildren(id) {
         this.childrens = this.childrens.filter((item) => item.id !== id);
         this.$emit("transferChildren", this.childrens);
      },
   },
};
</script>

<style lang="scss" scoped>
.childrens__top {
   display: flex;
   align-items: center;
   justify-content: space-between;

   .button {
      position: relative;
      padding-left: 50px;

      &::before {
         content: "";
         position: absolute;
         left: 24px;
         top: 50%;
         width: 16px;
         height: 2px;
         background: #01a7fd;
         transform: translate(0, -50%);
         border-radius: 10px;
      }

      &:after {
         content: "";
         position: absolute;
         border-radius: 10px;
         left: 30px;
         top: 50%;
         width: 2px;
         height: 16px;
         transform: translate(50%, -50%);
         background: #01a7fd;
      }
   }
}

.childrens__block {
   display: flex;
   align-items: center;
   margin-top: 10px;

   .input-block {
      width: 100%;
      margin-top: 0;
      margin-right: 18px !important;
   }
}

@media (max-width: 460px) {
   .btn-transparent {
      padding: 10px 13px 10px 30px !important;

      &:before {
         left: 12px !important;
      }

      &::after {
         left: 18px !important;
      }
   }
}
</style>