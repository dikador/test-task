<template>
   <header class="header">
      <div class="header__container">
         <div class="header__block">
            <router-link to="/"
               ><img src="@/assets/logo.png" alt=""
            /></router-link>
         </div>
         <nav class="nav header__block">
            <router-link class="nav__item" to="/">Форма</router-link>
            <router-link class="nav__item" to="/preview">Превью</router-link>
         </nav>
      </div>
   </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
   border-bottom: 1px solid rgba(17, 17, 17, 0.103);
}

.header__container {
   display: flex;
   padding: 24px 12px;
   width: 100%;
   max-width: 92vw;
   margin: 0 auto;
   align-items: center;
}

.header__block {
   width: 50%;
}

.nav {
   display: flex;
   align-items: center;
}

.nav__item {
   font-size: 14px;
   line-height: 1.6em;

   display: flex;
   text-decoration: none;
   align-items: flex-end;
   margin-left: 24px;
   color: rgba(17, 17, 17, 0.48);
   transition: 0.2s;

   &.active {
      color: rgba(0, 0, 0, 0.98);
   }

   &:hover {
      color: rgba(0, 0, 0, 0.98);
   }
}
</style>