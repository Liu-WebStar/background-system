<template>
  <div class="main">
    <app-link  v-show="$route.path!='/home'"/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppLink from './link.vue';

export default {
  components:{ AppLink }
}
</script>

<style scoped lang="scss">
.main{
  position:absolute;
  top:50px;
  left:230px;
  right:0;
  bottom:0;
  padding:10px;
  overflow-y:auto;
}
</style>