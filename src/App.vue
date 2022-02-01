<template>
   <div class="wrapper">
      <main-header />
      <main>
         <router-view />
      </main>
      <main-footer />
   </div>
</template>

<script>
import mainHeader from "./components/mainHeader.vue";
import mainFooter from "./components/mainFooter.vue";
export default {
   components: {
      mainHeader,
      mainFooter,
   },
};
</script>

<style lang="scss">
@import "@/assets/null";

.wrapper {
   display: table;
   width: 100%;
   min-height: 100vh;
}

main {
   display: table-row;
   height: 100%;
}

.container {
   width: 100%;
   max-width: 655px;
   margin: 0 auto;
   padding: 0 20px;
}

.main-title {
   font-size: 16px;
   line-height: 1.3em;
   font-weight: 500;
}

.button {
   padding: 10px 20px;
   font-size: 14px;
   line-height: 1.4em;
   box-sizing: border-box;
   border-radius: 100px;
   cursor: pointer;
   transition: 0.2s;
   outline: none;
   border: none;

   &.btn-transparent {
      background: transparent;
      border: 2px solid #01a7fd;
      color: #01a7fd;
   }

   &.btn-blue {
      color: #fff;
      background-color: #01a7fd;
   }

   &:hover {
      transform: scale(0.97);
   }

   &:active {
      transform: scale(0.92);
   }
}

.btn-text {
   font-size: 14px;
   cursor: pointer;
   display: inline-block;
   outline: none;
   border: none;
   background: transparent;
   line-height: 1.4em;

   color: #01a7fd;
}
</style>
