<template>
  <div>
    <HeaderComponent />
    <JumbotronComponent />
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import JumbotronComponent from './components/JumbotronComponent.vue';
  export default {
    components: {
      HeaderComponent,
      JumbotronComponent,
    },
    data(){
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
@use './assets/style/partials/variables' as *;

</style>