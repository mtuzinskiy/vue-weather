<script>
export default {};
</script>

<template>
  <p class="nav">
    <router-link to="/">Погода</router-link>
    <router-link to="/about">Про нас</router-link>
    <router-link to="/subscribe">Підписатись</router-link>
    <router-link to="/settings">Налаштування</router-link>
  </p>
  <router-view></router-view>
</template>

<style scoped>
.nav a {
  margin-right: 12px;
}
</style>
